import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Header = styled.View`
  margin: 5px 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: #333;
  font-family: 'AirbnbCereal-Bold';
`;

export const SubTitle = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  color: #787878;
  font-family: 'AirbnbCereal-Light';
`;

export const Local = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  color: #787878;
  font-family: 'AirbnbCereal-Medium';
`;

export const Icon = styled(FeatherIcon)``;
