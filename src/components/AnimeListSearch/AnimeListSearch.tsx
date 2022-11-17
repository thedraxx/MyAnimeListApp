/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CardsFavs from '../../components/CardsFavs/CardsFavs';
import {ToggleContext} from '../../context/toggleContext';
import {ContainerSearch} from './Style';
import animeAPI from '../../api/animeAPI';

interface Props {
  search: string;
  isFinishTyping: boolean;
}

const AnimeListSearch = ({search, isFinishTyping}: Props) => {
  const {...state} = useContext(ToggleContext);
  const {top} = useSafeAreaInsets();
  const isInDarkMode = state.isDarkMode;

  useEffect(() => {
    getSearch();
    console.log('me ejecuto', search);
  }, [isFinishTyping]);

  const getSearch = async () => {
    try {
      const resp = await animeAPI.get(`anime/?q=${search}`);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContainerSearch isInDarkMode={isInDarkMode} top={top}>
      {/* <FlatList
        data={animeFavs}
        keyExtractor={item => item.mal_id.toString()}
        numColumns={2}
        renderItem={({item}) => <CardsFavs animes={item} />}
      /> */}
    </ContainerSearch>
  );
};

export default AnimeListSearch;
