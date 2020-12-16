import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {Container, Title, Text, Wrapper, Scroll, SubTitle} from './styles';
import PlaceHolder from '../Profile/components/PlaceHolder';

import LottieView from 'lottie-react-native';

const About: React.FC = () => {
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function sobre() {
      await api.get('sobre').then((response) => {
        setText(response.data);
        setIsLoading(false);
      });
    }
    sobre();
  }, []);

  return (
    <Wrapper>
      {!isLoading ? (
        <Scroll showsVerticalScrollIndicator={false}>
          <Container>
            <LottieView
              style={{
                width: '100%',
              }}
              source={require('../../assets/animations/gavel.json')}
              autoPlay
              loop
            />
            <Title>O leiloeiro</Title>
            <SubTitle>Dou-lhe uma, dou-lhe duas...</SubTitle>
            <Text>{text}</Text>
          </Container>
        </Scroll>
      ) : (
        <PlaceHolder />
      )}
    </Wrapper>
  );
};

export default About;
