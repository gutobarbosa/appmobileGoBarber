import styled from 'styled-components';

// Botão retangular
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100vh;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 25px;
`;
