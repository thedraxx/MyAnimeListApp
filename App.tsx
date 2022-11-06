import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DarkMode from './src/components/darkMode/DarkMode';
import {ToggleProvider} from './src/context/toggleContext';
import TabNavigator from './src/navigator/TabNavigator';

const AppState = ({children}: any) => {
  return <ToggleProvider>{children}</ToggleProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <TabNavigator />
        <DarkMode />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
