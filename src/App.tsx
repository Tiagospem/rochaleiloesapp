import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';

import AuthProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#fff" />
    <AuthProvider>
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </AuthProvider>
  </NavigationContainer>
);

export default App;
