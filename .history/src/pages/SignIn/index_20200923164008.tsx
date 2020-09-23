// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

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
// Utilizamos o ref quando queremos manipular um elemento de forma direta e não atraves de um evento que aconteça, então quando clicarmos no botão a ref ira ir la no form e vai falar pode dar Submit
// então toda vez que precisamor fazer isso teremos que usar Ref
// por exemplo, quando um determinado campo for selecionado eu quero dar um focus nele, pra isso usaremos Ref.
const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSignIn = useCallback((data: Object) => {
    console.log(data);
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus;
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  // eslint-disable-next-line no-unused-expressions
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  // eslint-disable-next-line no-unused-expressions
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
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
              navigation.navigate('SignUp');
            }}
          >
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
          </CreateAccountButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
