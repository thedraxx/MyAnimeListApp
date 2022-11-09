import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DarkMode from './src/components/darkMode/DarkMode';
import {ToggleProvider} from './src/context/toggleContext';
import TabNavigator from './src/navigator/TabNavigator';
import {AnimeFavsProvider} from './src/context/AnimesFavsContext';

const AppState = ({children}: any) => {
  return <ToggleProvider>{children}</ToggleProvider>;
};

const AppStateFavorites = ({children}: any) => {
  return <AnimeFavsProvider>{children}</AnimeFavsProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AppStateFavorites>
          <TabNavigator />
          <DarkMode />
        </AppStateFavorites>
      </AppState>
    </NavigationContainer>
  );
};

export default App;
