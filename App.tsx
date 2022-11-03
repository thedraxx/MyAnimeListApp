import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import DarkMode from './src/components/darkMode/DarkMode';
import {ToggleProvider} from './src/context/toggleContext';

const AppState = ({children}: any) => {
  return <ToggleProvider>{children}</ToggleProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
        <DarkMode />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
