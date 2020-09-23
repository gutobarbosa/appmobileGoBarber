// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordTitle,
} from './styles';

const SignIn: React.FC = () => {
  return (
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
        <ForgotPasswordText> Esqueci minha senha </ForgotPasswordText>
      </ForgotPassword>
    </Container>
  );
};

export default SignIn;
