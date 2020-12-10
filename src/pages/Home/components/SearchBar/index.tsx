import React from 'react';
import {Container, Title, Search, Icon} from './styles';
import {useNavigation} from '@react-navigation/native';

import Separator from '../../../../components/Separator';

export const SearchBar: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Search onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={20} />
        <Title>Faça aqui a sua busca</Title>
      </Search>
      <Separator />
    </Container>
  );
};

export default SearchBar;
