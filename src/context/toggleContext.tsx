import {createContext, useReducer} from 'react';
import {toggleReducer, ToggleState} from './toggleReducer';
import React from 'react';

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
  };

  return (
    <ToggleContext.Provider value={{toggleTheme, ...state}}>
      {children}
    </ToggleContext.Provider>
  );
};
