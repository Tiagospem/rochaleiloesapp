import React, {useRef} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.png';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu cadastro</Title>
            </View>
            <Form ref={formRef} onSubmit={() => {}}>
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignInButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#333" />
        <BackToSignInButtonText>Voltar para login</BackToSignInButtonText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
