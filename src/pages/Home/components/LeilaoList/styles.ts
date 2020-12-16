import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

//export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 5;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: {
    padding: 0,
    paddingRight: 10,
  },
})``;

export const Wrapper = styled.View``;

export const ContainerSingle = styled.View`
  margin: 5px 10px 5px;
`;

export const ContainerList = styled.View`
  width: ${itemWidth}px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
`;
