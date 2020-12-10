import React, {useRef, useEffect, useState} from 'react';
import {
  Container,
  SearchContainer,
  Wrapper,
  Icon,
  LastSearches,
  LastSearchItem,
  LastSearchItemText,
  LastSearchItemDeleteButton,
  LastSearchItemTextButton,
  LastSearchHeaderText,
  SearchResultTemp,
} from './styles';

import Input from '../../components/Input';
import {Form} from '@unform/mobile';
import {TextInput} from 'react-native';
import {LastSearchDataType} from '../Definitions';

const Search: React.FC = () => {
  const searchInputRef = useRef<TextInput>(null);

  const [hasInputSearch, setInputSearch] = useState(false);

  useEffect(() => searchInputRef.current?.focus(), []);

  const searches: LastSearchDataType[] = [
    {
      title:
        'Terrenos urbanos Terrenos urbanos Terrenos urbanos Terrenos urbanos',
    },
    {title: 'Terrenos urbanos'},
    {title: 'Terrenos urbanos'},
    {title: 'Terrenos urbanos'},
    {title: 'Terrenos urbanos'},
    {title: 'Terrenos urbanos'},
  ];

  const lastSearchHeaderText = () => {
    return <LastSearchHeaderText>Últimas buscas:</LastSearchHeaderText>;
  };

  const lastSearchList = () => {
    return (
      <LastSearches
        ListHeaderComponent={lastSearchHeaderText}
        data={searches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => lastSearchItem(item)}
      />
    );
  };

  const searchResult = () => {
    return <SearchResultTemp>Nenhuma busca localizada...</SearchResultTemp>;
  };

  const lastSearchItem = (item: LastSearchDataType) => {
    return (
      <LastSearchItem>
        <LastSearchItemTextButton>
          <LastSearchItemText numberOfLines={1}>
            <Icon name="search" size={16} /> {item.title}
          </LastSearchItemText>
        </LastSearchItemTextButton>
        <LastSearchItemDeleteButton>
          <Icon name="trash" size={16} />
        </LastSearchItemDeleteButton>
      </LastSearchItem>
    );
  };

  return (
    <Wrapper>
      <SearchContainer>
        <Form onSubmit={() => setInputSearch(true)}>
          <Input
            autoFocus
            clearButtonMode="always"
            ref={searchInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="web-search"
            name="search"
            icon="search"
            placeholder="Faça aqui sua busca"
            returnKeyType="search"
          />
        </Form>
      </SearchContainer>
      <Container>
        {hasInputSearch ? searchResult() : lastSearchList()}
      </Container>
    </Wrapper>
  );
};

export default Search;
