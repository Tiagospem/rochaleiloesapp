import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView``;

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-family: 'AirbnbCereal-Bold';
  font-size: 28px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: #fff;
  z-index: 9999;
`;
export const Text = styled.Text`
  font-family: 'AirbnbCereal-Light';
  text-align: justify;
  font-size: 15px;
  margin-top: 10px;
`;

export const ImageContainer = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  height: 180px;
  width: 100%;
`;
