import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Wrapper,
  ImageListContainer,
  Image,
  ImageList,
  ButtonsHeaderContainer,
  ButtonsHeaderLeft,
  ButtonsHeaderRight,
  Icon,
  Button,
  DetailContainer,
  Title,
  Description,
  Scroll,
  ShowMoreText,
  ValorAvaliacaoLabel,
  ValorAvaliacao,
  ValorLabel,
  Valor,
  LabelDesconto,
  LabelDescontoText,
  ParcelamentoLabel,
  ParcelamentoText,
  ContatoLabel,
  MaiorLanceLabel,
  MaiorLance,
  Apelido,
  DetailProposta,
  StatusContainer,
  StatusLabel,
  DocumentLabel,
  DocumentLink,
  DocumentLinkText,
} from './styles';

import {Alert, Linking, Share} from 'react-native';

// @ts-ignore
import ReadMore from 'react-native-read-more-text';

import api, {s3ImagePath} from '../../services/api';
import preload from '../../assets/images/preload.png';

import PlaceHolder from './components/PlaceHolder';

import {LeilaoDataType, LoteDataType, UrlOpenProps} from '../Definitions';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import pt from 'date-fns/locale/pt-BR';
import Input from '../../components/Input';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import ButtonContact from '../../components/Button';

const Lote: React.FC<any> = ({route, navigation}) => {
  const lote: LoteDataType = route.params.lote;
  const leilao: LeilaoDataType = route.params.leilao;

  const [isFetching, setIsfetching] = useState(true);
  const [isSendingContact, setIsSendingContact] = useState(false);
  const [loteData, setLoteData] = useState<LoteDataType>();

  const formRef = useRef<FormHandles>(null);

  const formatDate = useCallback((date) => {
    return format(parseISO(date), "dd'/'MM'/'yyyy 'às' HH':'mm", {locale: pt});
  }, []);

  const formatPrice = useCallback((value) => {
    if (value === null) {
      return (value = 0);
    }
    value = parseFloat(value);
    let n = value.toFixed(2).split('.');
    n[0] = '' + n[0].split(/(?=(?:...)*$)/).join('.');
    return n.join(',');
  }, []);

  const desconto = useCallback((avaliacao, segundo_leilao) => {
    let variacao = segundo_leilao / avaliacao;
    variacao = variacao - 1;
    variacao = variacao * 100;
    variacao = variacao * -1;
    return variacao.toFixed(0);
  }, []);

  const UrlDocOpen = ({url, children}: UrlOpenProps) => {
    const handlePress = useCallback(async () => {
      const link = await Linking.canOpenURL(url);
      if (link) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Esta URL para ser inválida: ${url}`);
      }
    }, [url]);
    return <DocumentLink onPress={handlePress}>{children}</DocumentLink>;
  };

  const _showText = (handlePress: () => void) => {
    return <ShowMoreText onPress={handlePress}>Ver mais</ShowMoreText>;
  };
  const _hideText = (handlePress: () => void) => {
    return <ShowMoreText onPress={handlePress}>Ver menos</ShowMoreText>;
  };
  const _handleTextReady = () => {};

  const onShare = async (title: string, id: number) => {
    try {
      await Share.share({
        message: `${title} https://rochaleiloes.com.br/lote/${id} - Compartilhado via Rocha Leilões App`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    async function loadLote() {
      await api
        .get(`lote/${lote.id}`)
        .then((response) => {
          setLoteData(response.data);
        })
        .catch(() => {})
        .then(() => {
          setIsfetching(false);
        });
    }
    loadLote();
  }, [lote.id]);

  return (
    <Wrapper>
      {isFetching ? (
        <PlaceHolder />
      ) : (
        <Scroll>
          <ImageListContainer>
            <ButtonsHeaderContainer>
              <ButtonsHeaderLeft>
                <Button
                  onPress={() => navigation.goBack()}
                  style={{elevation: 1}}>
                  <Icon size={22} name="chevron-left" />
                </Button>
              </ButtonsHeaderLeft>
              <ButtonsHeaderRight>
                <Button
                  onPress={() => navigation.navigate('Home')}
                  style={{elevation: 1}}>
                  <Icon size={22} name="home" />
                </Button>
                <Button
                  onPress={() => onShare(lote.sub_titulo, lote.id)}
                  style={{elevation: 1}}>
                  <Icon size={22} name="share-2" />
                </Button>
                <Button
                  onPress={() => navigation.navigate('Search')}
                  style={{elevation: 1}}>
                  <Icon size={22} name="search" />
                </Button>
              </ButtonsHeaderRight>
            </ButtonsHeaderContainer>
            <ImageList horizontal pagingEnabled>
              {lote.fotos?.map((img, index) => (
                <Image
                  key={index}
                  resizeMode="cover"
                  loadingIndicatorSource={preload}
                  source={{
                    uri: `${s3ImagePath}/${img.path}/${img.img}`,
                  }}
                />
              ))}
              {leilao.logo && (
                <Image
                  resizeMode="center"
                  loadingIndicatorSource={preload}
                  source={{
                    uri: `${s3ImagePath}/${leilao.logo.path}/${leilao.logo.img}`,
                  }}
                />
              )}
            </ImageList>
          </ImageListContainer>
          <DetailContainer>
            <Title>
              Lote {lote.grupo.g_lote} - {lote.sub_titulo}
            </Title>
            <ReadMore
              numberOfLines={10}
              onReady={_handleTextReady}
              renderTruncatedFooter={_showText}
              renderRevealedFooter={_hideText}>
              <Description>{loteData?.api_lote_desc}</Description>
            </ReadMore>
          </DetailContainer>

          <DetailContainer>
            <DocumentLabel>Documentos:</DocumentLabel>
            {loteData?.editais_gerais?.map((edital, key) => (
              <DocumentLink key={key}>
                <UrlDocOpen url={`${s3ImagePath}/${edital.path}/${edital.doc}`}>
                  <DocumentLinkText>
                    <Icon size={16} name="file" /> {edital.nome}
                  </DocumentLinkText>
                </UrlDocOpen>
              </DocumentLink>
            ))}
            {loteData?.editais?.map((edital, key) => (
              <DocumentLink key={key}>
                {edital.tipo === 2 && (
                  <UrlDocOpen
                    url={`https://rochaleiloes.com.br/${edital.publicacao_id}/publicacao/`}>
                    <DocumentLinkText>
                      <Icon size={16} name="file-text" /> Edital publicado
                    </DocumentLinkText>
                  </UrlDocOpen>
                )}
                {edital.tipo === 0 && (
                  <UrlDocOpen
                    url={`${s3ImagePath}/${edital.path}/${edital.edital_file}`}>
                    <DocumentLinkText>
                      <Icon size={16} name="file" /> {edital.titulo}
                    </DocumentLinkText>
                  </UrlDocOpen>
                )}
                {edital.tipo === 3 && (
                  <UrlDocOpen
                    url={`https://rochaleiloes.com.br/${edital.id}/publicacao-simples`}>
                    <DocumentLinkText>
                      <Icon size={16} name="file" /> Edital de leilão
                    </DocumentLinkText>
                  </UrlDocOpen>
                )}
              </DocumentLink>
            ))}
            {loteData?.documentos?.map((document, key) => (
              <DocumentLink key={key}>
                <UrlDocOpen
                  url={`${s3ImagePath}/${document.doc.path}/${document.doc.doc}`}>
                  <DocumentLinkText>
                    <Icon size={16} name="file" /> {document.doc.nome}
                  </DocumentLinkText>
                </UrlDocOpen>
              </DocumentLink>
            ))}
          </DetailContainer>

          {loteData?.sub_informacao_adicional && (
            <DetailContainer>
              <Title>Informações adicionais</Title>
              <ReadMore
                numberOfLines={10}
                onReady={_handleTextReady}
                renderTruncatedFooter={_showText}
                renderRevealedFooter={_hideText}>
                <Description>{loteData?.sub_informacao_adicional}</Description>
              </ReadMore>
            </DetailContainer>
          )}
          {!!loteData?.sub_permitir_parcelamento && loteData?.sub_status === 0 && (
            <DetailProposta>
              <ParcelamentoLabel>
                Possibilidade de compra parcelada
              </ParcelamentoLabel>
              <ParcelamentoText>
                Entrada de {loteData?.sub_parcelamento_pct_entrada}% e saldo em
                até {loteData?.sub_parcelamento_qtd_parcelas_max}x
              </ParcelamentoText>
              <ParcelamentoLabel>
                <Icon size={16} name="edit-3" /> Enviar proposta
              </ParcelamentoLabel>
            </DetailProposta>
          )}
          {loteData?.sub_status !== 0 && (
            <StatusContainer sold={loteData?.sub_status === 2}>
              <StatusLabel>
                <Icon size={18} name="check-circle" />{' '}
                {loteData?.sub_status === 2 ? 'LOTE VENDIDO' : ' LOTE RETIRADO'}
              </StatusLabel>
            </StatusContainer>
          )}
          {loteData?.sub_maior_lance && (
            <DetailContainer>
              <MaiorLanceLabel>Maior lance:</MaiorLanceLabel>
              <Apelido>
                <Icon name="user" size={18} /> {loteData?.user?.apelido}
              </Apelido>
              <MaiorLance>
                R$ {formatPrice(loteData?.sub_maior_lance)}
              </MaiorLance>
            </DetailContainer>
          )}
          <DetailContainer>
            {loteData?.sub_valor_2 && (
              <LabelDesconto>
                <LabelDescontoText>
                  -
                  {desconto(loteData.sub_valor_avaliacao, loteData.sub_valor_2)}
                  %
                </LabelDescontoText>
              </LabelDesconto>
            )}
            <ValorAvaliacaoLabel>Valor da avaliação:</ValorAvaliacaoLabel>
            <ValorAvaliacao>
              R$ {formatPrice(loteData?.sub_valor_avaliacao)}
            </ValorAvaliacao>
            {leilao.modalidade_1 === 'v' ? (
              <ValorLabel>
                Em venda direta até {formatDate(leilao.data_1)}h:
              </ValorLabel>
            ) : (
              <ValorLabel>
                1º. leilão {formatDate(leilao.data_1)}h - lance inicial:
              </ValorLabel>
            )}
            <Valor strike={!!leilao.encerrado_1}>
              R$ {formatPrice(loteData?.sub_valor_1)}
            </Valor>
            {leilao.data_2 && (
              <>
                <ValorLabel>
                  2º. leilão {formatDate(leilao.data_2)}h - lance inicial:
                </ValorLabel>
                <Valor strike={!!leilao.encerrado_2}>
                  R$ {formatPrice(loteData?.sub_valor_2)}
                </Valor>
              </>
            )}
          </DetailContainer>
          <DetailContainer>
            <ContatoLabel>Formulário de contato</ContatoLabel>
            <Form ref={formRef} onSubmit={() => {}}>
              <Input
                style={{
                  height: 50,
                }}
                numberOfLines={4}
                autoCorrect={false}
                autoCapitalize="none"
                name="mensagem"
                icon="edit"
                multiline
                placeholder="Envie aqui a sua mensagem"
                returnKeyType="send"
              />
              <ButtonContact
                isLoading={isSendingContact}
                enabled={!isSendingContact}
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Enviar mensagem
              </ButtonContact>
            </Form>
          </DetailContainer>
        </Scroll>
      )}
    </Wrapper>
  );
};

export default Lote;
