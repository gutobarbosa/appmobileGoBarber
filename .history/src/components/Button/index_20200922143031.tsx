import React from 'react';

import { Container, ButtonText  } from './styles';

const Button: React.FC = ({children}) =>
//children é aonde ta o texto que escrevemos e todo texto tem que ter uma tag text envolvendo ele como está abaixo
<Container>
  <ButtonText>{children}</ButtonText>
</Container>;

export default Button;
