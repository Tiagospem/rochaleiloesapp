import React, {useEffect, useState} from 'react';
//import {useIsFocused} from '@react-navigation/native';
import api from '../../services/api';
import {
  Container,
  Title,
  Text,
  Wrapper,
  Scroll,
  Image,
  ImageContainer,
} from './styles';

import escritorio from '../../assets/images/escritorio.png';

const About: React.FC = () => {
  const [text, setText] = useState();
  //const isFocussed = useIsFocused();
  useEffect(() => {
    async function sobre() {
      await api.get('sobre').then((response) => {
        setText(response.data);
      });
    }
    sobre();
  }, []);

  return (
    <Wrapper>
      <Scroll showsVerticalScrollIndicator={false}>
        <ImageContainer>
          <Title>Sobre o leiloeiro</Title>
          <Image resizeMode="cover" source={escritorio} />
        </ImageContainer>
        <Container>
          <Text>{text}</Text>
        </Container>
      </Scroll>
    </Wrapper>
  );
};

export default About;
