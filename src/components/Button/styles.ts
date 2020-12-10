import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  isLoading: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  height: 60px;
  background: #58402d;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
  ${(props) =>
    props.isLoading &&
    css`
      opacity: 0.5;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  color: #fff;
  font-size: 18px;
`;
