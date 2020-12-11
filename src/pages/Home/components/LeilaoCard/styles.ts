import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface LeilaoDataProps {
  ended: boolean;
}

export const Container = styled.View`
  background-color: #f1f1f1;
  position: relative;
`;

export const LeilaoCardImage = styled.Image`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 180px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
  margin: 0 0 5px 0;
  color: #000;
`;

export const LeilaoData = styled.Text<LeilaoDataProps>`
  color: #787878;
  font-size: 16px;
  font-family: 'AirbnbCereal-Light';
  ${(props) =>
    props.ended &&
    css`
      text-decoration: line-through;
    `}
`;

export const LeilaoCard = styled(RectButton)`
  background: #fff;
  z-index: 1;
  border-radius: 10px;
`;

export const LeilaoCardBody = styled.View`
  padding: 10px 10px;
`;

export const Icon = styled(FeatherIcon)``;

interface BadgeStatusProps {
  color: string;
}

export const BadgeStatus = styled.View<BadgeStatusProps>`
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  padding: 5px;
  width: 100px;
  position: absolute;
  z-index: 9999;
  top: 10px;
  left: 10px;
`;

export const BadgeText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: 'AirbnbCereal-Light';
`;
