import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favs from '../screens/Favs/Favs';
import Navigator from './Navigator';
import {ToggleContext} from '../context/toggleContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export type RootStackParams = {
  Home: undefined;
  Favs: undefined;
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const {...state} = useContext(ToggleContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: `${state.isDarkMode ? '#fff' : '#000'}`,
        tabBarInactiveTintColor: `${state.isDarkMode ? '#fff' : '#000'}`,
        tabBarStyle: {
          backgroundColor: `${state.isDarkMode ? '#000' : '#fff'}`,
        },

        tabBarIcon: () => {
          if (route.name === 'Navigator') {
            return (
              <Icon
                name="home"
                size={20}
                color={`${state.isDarkMode ? '#fff' : '#000'}`}
              />
            );
          }
          if (route.name === 'Favs') {
            return (
              <Icon
                name="heart"
                size={20}
                color={`${state.isDarkMode ? '#fff' : '#000'}`}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Navigator"
        options={{title: 'Home'}}
        component={Navigator}
      />
      <Tab.Screen
        name="Favs"
        options={{
          title: 'Favorite',
        }}
        component={Favs}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
