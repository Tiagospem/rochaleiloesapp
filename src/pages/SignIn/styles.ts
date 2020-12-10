import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 20px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-family: 'AirbnbCereal-Medium';
  margin: 64px 0 24px;
`;

export const CreatAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f1f1f1;
  border-top-width: 1px;
  border-color: #e2e2e2;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #999;
  font-size: 18px;
  font-family: 'AirbnbCereal-Light';
  margin-left: 16px;
`;
