import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText  } from './styles';

interface ButtomProps extends RectButtonProperties {
  children: string;
}
const Button: React.FC<ButtomProps> = ({children, ...rest}) =>
//children é aonde ta o texto que escrevemos e todo texto tem que ter uma tag text envolvendo ele como está abaixo
<Container {...rest }>
  <ButtonText>{children}</ButtonText>
</Container>;

export default Button;
