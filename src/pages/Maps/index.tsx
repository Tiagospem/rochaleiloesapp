import React from 'react';
import MapView from 'react-native-maps';
import {Container} from './styles';

const Maps: React.FC = () => {
  return (
    <Container>
      <MapView
        style={{
          height: '100%',
          width: '100%',
        }}
        initialRegion={{
          latitude: -25.4555784,
          longitude: -49.3086287,
          latitudeDelta: 7,
          longitudeDelta: 7,
        }}
      />
    </Container>
  );
};

export default Maps;
