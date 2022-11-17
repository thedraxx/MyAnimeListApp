import {createContext, useReducer} from 'react';
import {toggleReducer, ToggleState} from './toggleReducer';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ToggleContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ToggleinitialState: ToggleState = {
  isDarkMode: false,
};

export const ToggleContext = createContext({} as ToggleContextProps);

export const ToggleProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(toggleReducer, ToggleinitialState);

  const toggleTheme = () => {
    dispatch({type: 'toggle'});
    AsyncStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
  };

  return (
    <ToggleContext.Provider value={{toggleTheme, ...state}}>
      {children}
    </ToggleContext.Provider>
  );
};
