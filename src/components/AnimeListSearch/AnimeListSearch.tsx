/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CardsFavs from '../../components/CardsFavs/CardsFavs';
import {ToggleContext} from '../../context/toggleContext';
import {ContainerSearch, Loading} from './Style';
import animeAPI from '../../api/animeAPI';
import {AnimeSearch, DatumSearch} from '../../interfaces/AnimeSearch';

interface Props {
  search: string;
  isFinishTyping: boolean;
}

const AnimeListSearch = ({search, isFinishTyping}: Props) => {
  const {...state} = useContext(ToggleContext);
  const {top} = useSafeAreaInsets();
  const isInDarkMode = state.isDarkMode;
  const [animeSearch, setAnimeSearch] = useState<DatumSearch[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getSearch();
  }, [isFinishTyping]);

  const getSearch = async () => {
    try {
      if (search.length > 0) {
        setIsLoading(true);
        const resp = await animeAPI.get<AnimeSearch>(`/anime?q=${search}`);
        setAnimeSearch(resp.data.data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContainerSearch isInDarkMode={isInDarkMode} top={top}>
      {isLoading ? (
        <Loading size={50} color="#1c439b" />
      ) : (
        <FlatList
          data={animeSearch}
          keyExtractor={item => item.mal_id.toString()}
          numColumns={2}
          renderItem={({item}) => <CardsFavs animes={item} />}
        />
      )}
    </ContainerSearch>
  );
};

export default AnimeListSearch;
