import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name,icon, ...rest}) => (
  <Container>
    <TextInput { ...rest } />
  </Container>
);

export default Input;
