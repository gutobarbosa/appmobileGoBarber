// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordTitle,
  CreateAccountButtonText,
  CreateAccountButton,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Container>
          <Image source={logoImg} />
          <Title>Faça seu logon</Title>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('Deu');
            }}
          >
            Entrar
          </Button>
          <ForgotPassword
            onPress={() => {
              console.log('ForgotPassword');
            }}
          >
            <ForgotPasswordTitle> Esqueci minha senha </ForgotPasswordTitle>
          </ForgotPassword>
        </Container>
        <CreateAccountButton
          onPress={() => {
            console.log('ForgotPassword');
          }}
        >
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
