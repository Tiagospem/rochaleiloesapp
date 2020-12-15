import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f1f1;
`;

interface BadgeStatusProps {
  color: string;
}

export const Icon = styled(FeatherIcon)`
  margin-right: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'AirbnbCereal-Medium';
`;

export const Scroll = styled.ScrollView``;

export const SectionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 15px;
`;

export const SectionButton = styled(RectButton)`
  background-color: #fff;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitleText = styled.Text`
  font-family: 'AirbnbCereal-Bold';
  font-size: 25px;
`;

export const HeaderSubTitle = styled.View``;

export const HeaderSubTitleText = styled.Text`
  margin-top: 25px;
  font-size: 16px;
  font-family: 'AirbnbCereal-Medium';
`;
export const HeaderSubTitleTextEmail = styled.Text`
  margin-top: 5px;
  font-family: 'AirbnbCereal-Light';
  color: #333;
  align-items: center;
  display: flex;
`;

export const Header = styled.View`
  padding: 30px 15px;
  margin-top: 20px;
`;

interface HeaderCardColorProps {
  color: string;
}
export const HeaderCard = styled.View<HeaderCardColorProps>`
  padding: 20px 10px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderCardTitle = styled.Text<HeaderCardColorProps>`
  font-family: 'AirbnbCereal-Medium';
  font-size: 20px;
  color: ${(props) => props.color};
`;
