import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {LastSearchDataType} from '../Definitions';
import {RectButton} from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #f1f1f1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  padding: 10px 10px;
`;

export const SearchContainer = styled.View`
  background-color: #dec245;
  padding: 10px 10px;
`;

export const LastSearches = styled(
  FlatList as new () => FlatList<LastSearchDataType>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 0},
})`
  margin-top: 0;
`;

export const LastSearchItem = styled.View`
  padding: 10px 0;
  flex-direction: row;
`;

export const LastSearchItemTextButton = styled(RectButton)`
  flex: 1;
  justify-content: center;
  padding: 0 10px;
`;

export const LastSearchItemText = styled.Text`
  font-family: 'AirbnbCereal-Light';
  font-size: 16px;
`;

export const LastSearchItemDeleteButton = styled(RectButton)`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const LastSearchHeaderText = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 16px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const SearchResultTemp = styled.Text`
  font-family: 'AirbnbCereal-Medium';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)``;
