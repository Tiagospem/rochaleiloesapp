import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 80px 20px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-family: 'Lato-Regular';
  margin: 64px 0 24px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
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

export const BackToSignInButtonText = styled.Text`
  color: #999;
  font-size: 18px;
  font-family: 'Lato-Regular';
  margin-left: 16px;
`;
