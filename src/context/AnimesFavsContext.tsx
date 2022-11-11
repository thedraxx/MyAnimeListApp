import React, {createContext} from 'react';
import {Data} from '../interfaces/AnimeDetail';
import {useReducer} from 'react';
import {AnimeFavsReducer} from './AnimesFavsReducer';
import {Datum} from '../interfaces/AnimesInterfaces';

// Definir como luce, que informacion tendra
export interface animeFavsState {
  animeFavsState: Datum[] | [];
}

//  Definir el estado inicial
export const animeFavsInitialState: animeFavsState = {
  animeFavsState: [],
};

// Lo usaré para decirle a React como luce y que expone el context
export interface AnimeFavsContextProps {
  animeFavsState: animeFavsState;
  addAnimeFav: (anime: Data) => void;
  removeAnimeFav: (anime: Data) => void;
}

// Crear el context
export const AnimeFavsContext = createContext({} as AnimeFavsContextProps);

// Componente que provee del estado del context
export const AnimeFavsProvider = ({children}: any) => {
  const [animeFavsState, dispatch] = useReducer(
    AnimeFavsReducer,
    animeFavsInitialState,
  );

  const addAnimeFav = (anime: Data) => {
    dispatch({type: 'addAnimeFav', payload: anime});
  };

  const removeAnimeFav = (anime: Data) => {
    dispatch({type: 'removeAnimeFav', payload: anime});
  };

  return (
    <AnimeFavsContext.Provider
      value={{
        animeFavsState,
        addAnimeFav,
        removeAnimeFav,
      }}>
      {children}
    </AnimeFavsContext.Provider>
  );
};
