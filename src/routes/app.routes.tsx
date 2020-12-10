import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Calendar from '../pages/Calendar';
import Lote from '../pages/Lote';
import Search from '../pages/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const colorActive = '#58402d';
const colorInactive = '#9c9c9c';

const BottomTabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName = 'alert-circle';
        let iconColor = focused ? colorActive : colorInactive;
        if (route.name === 'Home') {
          iconName = 'list';
        } else if (route.name === 'Calendar') {
          iconName = 'calendar';
        } else if (route.name === 'About') {
          iconName = 'briefcase';
        } else if (route.name === 'Profile') {
          iconName = 'settings';
        }
        return <FeatherIcon name={iconName} size={20} color={iconColor} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colorActive,
      inactiveTintColor: colorInactive,
      style: {
        paddingBottom: 5,
        backgroundColor: '#FFF',
      },
    }}>
    <Tab.Screen options={{title: 'Leilões'}} name="Home" component={Home} />
    <Tab.Screen
      options={{title: 'Agenda'}}
      name="Calendar"
      component={Calendar}
    />
    <Tab.Screen options={{title: 'Sobre'}} name="About" component={About} />
    <Tab.Screen
      options={{title: 'Perfil'}}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

const StackNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      options={{
        title: 'Leilões',
        headerTitleAlign: 'center',
      }}
      name="Home"
      component={BottomTabNavigator}
    />
    <Stack.Screen name="Lote" component={Lote} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);

export default StackNavigator;
