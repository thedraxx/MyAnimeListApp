import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import CardsFavs from '../../components/CardsFavs/CardsFavs';
import {AnimeFavsContext} from '../../context/AnimesFavsContext';
import {ToggleContext} from '../../context/toggleContext';
import {ContainerFavs} from './Style';

const Favs = () => {
  const {animeFavsState} = useContext(AnimeFavsContext);
  const {...state} = useContext(ToggleContext);
  const isInDarkMode = state.isDarkMode;

  return (
    <ContainerFavs isInDarkMode={isInDarkMode}>
      <FlatList
        data={animeFavsState.animeFavsState}
        keyExtractor={item => item.mal_id.toString()}
        numColumns={2}
        renderItem={({item}) => <CardsFavs animes={item} />}
      />
    </ContainerFavs>
  );
};

export default Favs;
