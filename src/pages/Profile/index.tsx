import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
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
  HeaderSubTitleTextEmail,
  HeaderTitleText,
  HeaderCard,
  HeaderCardTitle,
} from './styles';

import SeparatorComp from '../../components/Separator';
import {SectionProfileProps} from '../Definitions';
import {useAuth} from '../../hooks/auth';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  shadow: {
    shadowColor: '#a5a5a5',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
});

const Profile: React.FC<any> = () => {
  const isFocused = useIsFocused();
  const {signOut, user, updateUserDate} = useAuth();
  useEffect(() => {
    updateUserDate();
    console.log(user.status);
  }, [updateUserDate, isFocused, user.status]);

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
          <Icon size={30} name="settings" color="#333" />
          <HeaderTitleText>Configurações</HeaderTitleText>
        </HeaderTitle>
        <HeaderSubTitle>
          <HeaderSubTitleText>
            Seja bem vindo, {user.apelido}
          </HeaderSubTitleText>
          <HeaderSubTitleTextEmail>{user.email}</HeaderSubTitleTextEmail>
        </HeaderSubTitle>
        {user.status === 3 && (
          <HeaderCard style={Styles.shadow} color="#ffe9e9">
            <Icon size={35} color="#864a4a" name="slash" />
            <HeaderCardTitle color="#864a4a">
              Cadastro bloqueado
            </HeaderCardTitle>
          </HeaderCard>
        )}
        {user.status === 2 && (
          <HeaderCard style={Styles.shadow} color="#e6fbe2">
            <Icon size={35} color="#626d60" name="check-circle" />
            <HeaderCardTitle color="#626d60">
              Cadastro Homologado
            </HeaderCardTitle>
          </HeaderCard>
        )}
        {user.status === 4 && (
          <HeaderCard style={Styles.shadow} color="#ffe7cf">
            <Icon size={35} color="#847362" name="alert-circle" />
            <HeaderCardTitle color="#847362">
              Cadastro com pendência
            </HeaderCardTitle>
          </HeaderCard>
        )}
        {user.status === 0 && (
          <HeaderCard style={Styles.shadow} color="#ffe7cf">
            <Icon size={35} color="#847362" name="mail" />
            <HeaderCardTitle color="#847362">
              Cadastro não verificado
            </HeaderCardTitle>
          </HeaderCard>
        )}
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
