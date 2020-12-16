import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

const {width: viewportWidth} = Dimensions.get('window');

export const Wrapper = styled.SafeAreaView``;

export const ImageListContainer = styled.View`
  background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const DetailContainer = styled.View`
  padding: 10px 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const DetailProposta = styled(RectButton)`
  padding: 10px 10px;
  background-color: #c9e7bd;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 20px;
`;

export const Description = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
  margin-top: 5px;
  text-align: justify;
`;

export const ShowMoreText = styled.Text`
  font-family: 'AirbnbCereal-Bold';
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
`;

export const ImageList = styled.ScrollView``;

export const Image = styled.Image`
  width: ${viewportWidth}px;
  height: 350px;
`;

export const ButtonsHeaderContainer = styled.View`
  flex-direction: row;
  position: absolute;
  z-index: 9999;
  top: 20px;
`;

export const ButtonsHeaderLeft = styled.View`
  height: 70px;
  justify-content: center;
  padding-left: 5px;
  flex: 1;
`;

export const ButtonsHeaderRight = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  height: 70px;
  padding-right: 5px;
  flex: 2;
`;

export const Icon = styled(FeatherIcon)`
  color: #372f2b;
`;

export const Button = styled(RectButton)`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: #fff;
`;

export const ValorAvaliacaoLabel = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
`;
export const ValorAvaliacao = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ValorLabel = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
`;

interface ValorProps {
  strike: boolean;
}
export const Valor = styled.Text<ValorProps>`
  font-family: 'AirbnbCereal-Medium';
  margin-bottom: 5px;
  font-size: 25px;
  ${(props) =>
    props.strike &&
    css`
      text-decoration: line-through;
      font-size: 20px;
      color: #ccc;
    `}
`;

export const LabelDesconto = styled.View`
  width: 50px;
  height: 50px;
  background-color: #c9e7bd;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
`;
export const LabelDescontoText = styled.Text`
  font-family: 'AirbnbCereal-Bold';
  color: #193b16;
`;

export const ParcelamentoLabel = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
`;

export const ParcelamentoText = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 18px;
`;

export const ContatoLabel = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
  margin-bottom: 10px;
`;

export const MaiorLanceLabel = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
`;

export const MaiorLance = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 20px;
`;

export const Apelido = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 18px;
`;

interface StatusContainerProps {
  sold: boolean;
}

export const StatusContainer = styled.View<StatusContainerProps>`
  margin-bottom: 20px;
  background-color: #eab7b7;
  padding: 10px;
  ${(props) =>
    props.sold &&
    css`
      background-color: #c9e7bd;
    `}
`;

export const StatusLabel = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 18px;
`;

export const DocumentLabel = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
`;

export const DocumentLink = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const DocumentLinkText = styled.Text`
  font-family: 'AirbnbCereal-Light';
  text-transform: uppercase;
  font-size: 16px;
`;
