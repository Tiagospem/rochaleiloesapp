import React, {useEffect} from 'react';
import {
  Container,
  Title,
  Icon,
  Scroll,
  SectionButton,
  SectionWrapper,
  Header,
  HeaderTitle,
  HeaderSubTitle,
  HeaderSubTitleText,
  HeaderSubTitleText2,
  HeaderTitleText,
  HeaderCard,
  HeaderCardTitle,
  HeaderMenuLabel,
} from './styles';

import {useIsFocused} from '@react-navigation/native';

import SeparatorComp from '../../components/Separator';
import {SectionProfileProps} from '../Definitions';
import {useAuth} from '../../hooks/auth';
import LottieView from 'lottie-react-native';

const Profile: React.FC<any> = () => {
  const {signOut, user} = useAuth();

  const isFocussed = useIsFocused();

  useEffect(() => {}, [isFocussed]);

  const Section = ({icon, label, onPress}: SectionProfileProps) => {
    return (
      <SectionButton onPress={onPress}>
        <SectionWrapper>
          <Icon name={icon} size={25} color="#333" />
          <Title>{label}</Title>
        </SectionWrapper>
        <SeparatorComp />
      </SectionButton>
    );
  };

  const SectionHeader = () => {
    return (
      <Header>
        <HeaderTitle>
          <Icon size={30} name="user" color="#333" />
          <HeaderTitleText>Olá, {user.apelido}</HeaderTitleText>
        </HeaderTitle>
        <HeaderSubTitle>
          <HeaderSubTitleText>{user.email}</HeaderSubTitleText>
          <SeparatorComp />
          <HeaderSubTitleText2>
            Mantenha seu cadastro atualizado e seus documentos em dia
          </HeaderSubTitleText2>
        </HeaderSubTitle>
        {user.status === 3 && (
          <HeaderCard color="#ffe9e9">
            <LottieView
              style={{
                width: 55,
                height: 55,
              }}
              source={require('../../assets/animations/block.json')}
              autoPlay
              loop={false}
            />
            <HeaderCardTitle color="#864a4a">
              Cadastro bloqueado
            </HeaderCardTitle>
          </HeaderCard>
        )}
        {user.status === 2 && (
          <HeaderCard color="#e6fbe2">
            <LottieView
              style={{
                width: 35,
                height: 35,
              }}
              source={require('../../assets/animations/check.json')}
              autoPlay
              loop={false}
            />
            <HeaderCardTitle color="#626d60">
              Cadastro Homologado
            </HeaderCardTitle>
          </HeaderCard>
        )}
        {user.status === 4 && (
          <HeaderCard color="#ffe7cf">
            <LottieView
              style={{
                width: 35,
                height: 35,
              }}
              source={require('../../assets/animations/info-warning2.json')}
              autoPlay
              loop={true}
            />
            <HeaderCardTitle color="#847362">
              Cadastro com pendência
            </HeaderCardTitle>
          </HeaderCard>
        )}
        {user.status === 0 && (
          <HeaderCard color="#ffe7cf">
            <LottieView
              style={{
                width: 35,
                height: 35,
              }}
              source={require('../../assets/animations/info-warning2.json')}
              autoPlay
              loop={true}
            />
            <HeaderCardTitle color="#847362">
              Cadastro não verificado
            </HeaderCardTitle>
          </HeaderCard>
        )}
        <SeparatorComp />
        <HeaderMenuLabel>CONFIGURAÇÕES DA CONTA</HeaderMenuLabel>
      </Header>
    );
  };

  return (
    <Container>
      <Scroll>
        <SectionHeader />
        <Section onPress={() => {}} icon="heart" label="Favoritos" />
        <Section onPress={() => {}} icon="paperclip" label="Meus documentos" />
        <Section onPress={() => {}} icon="award" label="Minhas arrematações" />
        <Section onPress={() => {}} icon="check" label="Minhas habilitações" />
        <Section onPress={() => {}} icon="edit" label="Cadastro" />
        <Section onPress={() => {}} icon="lock" label="Alterar senha" />
        <Section onPress={() => signOut()} icon="log-out" label="Sair" />
      </Scroll>
    </Container>
  );
};

export default Profile;
