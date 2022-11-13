import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Detail from '../screens/Detail/Detail';
import {Datum} from '../interfaces/AnimesInterfaces';

export type RootStackParams = {
  Home: undefined;
  Detail: Datum;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#ffffff'},
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Navigator;
