import React from 'react';
import {Container} from './styles';

import SearchBar from '../SearchBar';

export const HomeHeader: React.FC = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default HomeHeader;
