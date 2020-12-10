import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonText} from './styles';
import {ActivityIndicator} from 'react-native';

interface ButtonProps extends RectButtonProperties {
  children: string;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container {...rest}>
    <ButtonText>
      {rest.isLoading ? <ActivityIndicator size={30} color="#FFF" /> : children}
    </ButtonText>
  </Container>
);

export default Button;
