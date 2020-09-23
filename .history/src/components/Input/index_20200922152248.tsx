/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      {...rest}
    />
  </Container>
);

export default Input;
