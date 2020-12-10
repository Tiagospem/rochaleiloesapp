import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  LeilaoCard,
  LeilaoCardImage,
  LeilaoCardBody,
  Title,
  LeilaoData,
  Icon,
  BadgeStatus,
  BadgeText,
} from './styles';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import pt from 'date-fns/locale/pt-BR';
import {s3ImagePath} from '../../../../services/api';

import {LeilaoDataType, LoteDataType} from '../../../Definitions';

import preload from '../../../../assets/images/preload.png';

import {useNavigation} from '@react-navigation/native';

const Styles = StyleSheet.create({
  shadow: {
    shadowColor: '#a5a5a5',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
  },
  badge: {
    elevation: 1,
    position: 'absolute',
    zIndex: 9999,
  },
});

interface LeilaoCardComponentProps {
  leilao: LeilaoDataType;
  lote: LoteDataType;
}

const LeilaoCardComponent: React.FC<LeilaoCardComponentProps> = ({
  leilao,
  lote,
}) => {
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

  const navigation = useNavigation();

  return (
    <Container>
      {lote.sub_status === 1 && (
        <BadgeStatus style={Styles.badge} color="red">
          <BadgeText>RETIRADO</BadgeText>
        </BadgeStatus>
      )}
      {lote.sub_status === 2 && (
        <BadgeStatus style={Styles.badge} color="green">
          <BadgeText>VENDIDO</BadgeText>
        </BadgeStatus>
      )}
      <LeilaoCard
        onPress={() =>
          navigation.navigate('Lote', {leilao: leilao, lote: lote})
        }
        style={Styles.shadow}>
        {lote.one_foto ? (
          <LeilaoCardImage
            loadingIndicatorSource={preload}
            source={{
              uri: `${s3ImagePath}/${lote.one_foto.path}/${lote.one_foto.img}`,
            }}
          />
        ) : (
          leilao.logo && (
            <LeilaoCardImage
              loadingIndicatorSource={preload}
              source={{
                uri: `${s3ImagePath}/${leilao.logo.path}/${leilao.logo.img}`,
              }}
            />
          )
        )}
        <LeilaoCardBody>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {lote.sub_titulo}
          </Title>
          <LeilaoData ended={!!leilao.encerrado_1}>
            <Icon name="calendar" size={16} /> {formatDate(leilao.data_1)} - R${' '}
            {formatPrice(lote.sub_valor_1)}
          </LeilaoData>
          {leilao.data_2 && (
            <LeilaoData ended={!!leilao.encerrado_2}>
              <Icon name="calendar" size={16} /> {formatDate(leilao.data_2)} -
              R$ {formatPrice(lote.sub_valor_2)}
            </LeilaoData>
          )}
        </LeilaoCardBody>
      </LeilaoCard>
    </Container>
  );
};

export default LeilaoCardComponent;
