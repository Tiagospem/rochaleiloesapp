import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'AirbnbCereal-Light';
`;

export const Scroll = styled.ScrollView``;

export const SectionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
`;

export const SectionButton = styled(RectButton)`
  background-color: #fff;
  padding: 0 15px;
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

export const HeaderSubTitleText2 = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  font-family: 'AirbnbCereal-Medium';
`;

export const HeaderSubTitleText = styled.Text`
  margin-top: 10px;
  margin-bottom: 15px;
  font-family: 'AirbnbCereal-Light';
  color: #333;
  align-items: center;
  display: flex;
`;

export const HeaderMenuLabel = styled.Text`
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'AirbnbCereal-Light';
  color: #666;
  font-size: 15px;
`;

export const Header = styled.View`
  padding: 0 15px;
  margin-top: 50px;
`;

interface HeaderCardColorProps {
  color: string;
}
export const HeaderCard = styled.View<HeaderCardColorProps>`
  padding: 20px 10px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderCardTitle = styled.Text<HeaderCardColorProps>`
  font-family: 'AirbnbCereal-Medium';
  font-size: 20px;
  margin-left: 15px;
  color: ${(props) => props.color};
`;
