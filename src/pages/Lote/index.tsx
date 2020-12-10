import React, {useEffect} from 'react';
import {Container, Title} from './styles';

import {LoteDataType} from '../Definitions';

const Lote: React.FC<any> = ({route, navigation}) => {
  const lote: LoteDataType = route.params.lote;

  useEffect(() => {
    navigation.setOptions({
      title: lote.sub_titulo,
      headerTitleAlign: 'left',
    });
  }, [navigation, lote]);

  return (
    <Container>
      <Title>{lote.id}</Title>
    </Container>
  );
};

export default Lote;
