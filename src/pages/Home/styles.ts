import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {LeilaoDataType} from '../Definitions';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f1f1;
`;

export const Footer = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const SeparatorContainer = styled.View`
  margin: 5px 10px;
`;

export const List = styled(
  FlatList as new () => FlatList<LeilaoDataType>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 0},
})`
  margin-top: 0;
`;
