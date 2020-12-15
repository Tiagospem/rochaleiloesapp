import React, {useEffect, useState, useRef} from 'react';
import api from '../../services/api';
import {useScrollToTop} from '@react-navigation/native';

import LeilaoList from './components/LeilaoList';

import PlaceHolder from './components/PlaceHolder';

import HomeHeader from './components/HomeHeader';

import Separator from '../../components/Separator';

import {List, Container, Footer, SeparatorContainer} from './styles';

import {ActivityIndicator} from 'react-native';

import {LeilaoDataType} from '../Definitions';

//import {useAuth} from '../../hooks/auth';

const Home: React.FC = () => {
  const [leiloes, setLeiloes] = useState<LeilaoDataType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isfetching, setFetching] = useState(false);
  const flatListRef = useRef<any>();
  //const {signOut} = useAuth();

  useScrollToTop(flatListRef);

  const refreshFooter = () => {
    if (!isfetching) {
      return null;
    }
    return (
      <Footer>
        <ActivityIndicator size={30} color="#000" />
      </Footer>
    );
  };

  const separator = () => {
    return (
      <SeparatorContainer>
        <Separator />
      </SeparatorContainer>
    );
  };

  const homeHeader = () => {
    return <HomeHeader />;
  };

  const loadMore = async () => {
    if (currentPage < totalPages) {
      setFetching(true);
      await api
        .get(`leiloes?page=${currentPage + 1}`)
        .then((response) => {
          setLeiloes([...leiloes, ...response.data.data]);
          console.log('loadMore data:', response.data.data);
          setCurrentPage(currentPage + 1);
        })
        .catch(() => {
          console.log('error');
        })
        .then(() => {
          setFetching(false);
        });
    }
  };

  const refresh = async () => {
    setInitialLoading(true);
    getLeiloes();
  };

  /**
   * esta dando um bug ao recarregar algumas vezes;
   */
  const getLeiloes = async () => {
    await api
      .get('leiloes')
      .then((response) => {
        setLeiloes(response.data.data);
        setCurrentPage(1);
        setTotalPages(response.data.last_page);
      })
      .catch(() => {
        console.log('error');
      })
      .then(() => {
        setFetching(false);
        setInitialLoading(false);
      });
  };

  useEffect(() => {
    getLeiloes();
  }, []);

  return (
    <Container>
      {!initialLoading ? (
        <List
          ListHeaderComponent={homeHeader}
          ref={flatListRef}
          data={leiloes}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ItemSeparatorComponent={separator}
          ListFooterComponent={refreshFooter}
          refreshing={false}
          onRefresh={refresh}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <LeilaoList leilao={item} />}
        />
      ) : (
        <>
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </>
      )}
    </Container>
  );
};

export default Home;
