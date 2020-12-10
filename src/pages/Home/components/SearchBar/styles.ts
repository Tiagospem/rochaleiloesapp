import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin: 20px 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #bebebe;
  font-family: 'AirbnbCereal-Bold';
`;

export const Search = styled(RectButton)`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  border: 2px solid transparent;
  color: #201e1e;
  margin-bottom: 10px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #bebebe;
`;
