import React, {createContext, useState} from 'react';
import {Data} from '../interfaces/AnimeDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Lo usaré para decirle a React como luce y que expone el context
export interface AnimeFavsContextProps {
  addAnimeFav: (anime: Data) => void;
  removeAnimeFav: (anime: Data) => void;
  isActive: boolean;
}

// Crear el context
export const AnimeFavsContext = createContext({} as AnimeFavsContextProps);

// Componente que provee del estado del context
export const AnimeFavsProvider = ({children}: any) => {
  const [isActive, setIsActive] = useState(false);

  const addAnimeFav = (anime: Data) => {
    setIsActive(true);
    AsyncStorage.getItem('animeFavs').then((value: any) => {
      if (value) {
        const animes = JSON.parse(value);
        if (animes.find((animeFav: Data) => animeFav.mal_id === anime.mal_id)) {
          return;
        } else {
          const newArrayFavs = [...animes, anime];
          AsyncStorage.setItem('animeFavs', JSON.stringify(newArrayFavs));
          setIsActive(false);
        }
      } else {
        AsyncStorage.setItem('animeFavs', JSON.stringify([anime]));
        setIsActive(false);
      }
    });
  };

  const removeAnimeFav = (anime: Data) => {
    setIsActive(true);
    AsyncStorage.getItem('animeFavs').then((value: any) => {
      if (value) {
        const animes = JSON.parse(value);
        const newArrayFavs = animes.filter(
          (item: Data) => item.mal_id !== anime.mal_id,
        );
        AsyncStorage.setItem('animeFavs', JSON.stringify(newArrayFavs));
        setIsActive(false);
      }
    });
  };

  return (
    <AnimeFavsContext.Provider
      value={{
        addAnimeFav,
        removeAnimeFav,
        isActive,
      }}>
      {children}
    </AnimeFavsContext.Provider>
  );
};
