import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import {AuthContextProps, AuthState} from '../pages/Definitions';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = await AsyncStorage.getItem('@rocha:token');
      const user = await AsyncStorage.getItem('@rocha:user');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({token, user: JSON.parse(user)});
      }
      setIsRendering(false);
    }
    loadStorageData();
  }, []);

  const [isSign, setIsSign] = useState(false);
  const signIn = useCallback(async ({email, password}) => {
    setIsSign(true);
    await api
      .post('login', {
        email,
        password,
      })
      .then((response) => {
        const {user, access_token: token} = response.data;
        AsyncStorage.multiSet([
          ['@rocha:token', token],
          ['@rocha:user', JSON.stringify(user)],
        ]);

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({token, user});
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => setIsSign(false));
  }, []);
  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@rocha:token', '@rocha:user']);
    setData({} as AuthState);
  }, []);

  const updateUserDate = useCallback(async () => {
    await api.post('user').then((response) => {
      AsyncStorage.setItem('@rocha:user', JSON.stringify(response.data));
      setData({token: data.token, user: response.data});
    });
  }, [data.token]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        isRendering,
        signOut,
        isSign,
        updateUserDate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must bem used within an AuthProvider');
  }
  return context;
}

export {AuthProvider, useAuth};
