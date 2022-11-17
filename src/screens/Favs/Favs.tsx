/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState} from 'react';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CardsFavs from '../../components/CardsFavs/CardsFavs';
import {ToggleContext} from '../../context/toggleContext';
import {Datum} from '../../interfaces/AnimesTops';
import {ContainerFavs, ContainerNoFavs, TextNoFavs} from './Style';

const Favs = () => {
  const [animeFavs, setAnimeFavs] = useState<Datum[]>();
  const [isRefresing, setIsRefresing] = useState(false);
  const {...state} = useContext(ToggleContext);
  const {top} = useSafeAreaInsets();
  const isInDarkMode = state.isDarkMode;

  const getFavs = async () => {
    setIsRefresing(true);
    const favs = await AsyncStorage.getItem('animeFavs');
    if (favs) {
      setAnimeFavs(JSON.parse(favs));
      setIsRefresing(false);
    } else {
      setIsRefresing(false);
    }
  };

  return (
    <ContainerFavs isInDarkMode={isInDarkMode} top={top}>
      {!animeFavs || animeFavs.length === 0 ? (
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={isRefresing}
              onRefresh={() => getFavs()}
            />
          }>
          <ContainerNoFavs isInDarkMode={isInDarkMode}>
            <TextNoFavs isInDarkMode={isInDarkMode}>
              No favorites! Swipe down to refresh! (˵ •̀ ᴗ - ˵ ) ✧
            </TextNoFavs>
          </ContainerNoFavs>
        </ScrollView>
      ) : (
        <FlatList
          data={animeFavs}
          keyExtractor={item => item.mal_id.toString()}
          numColumns={2}
          renderItem={({item}) => <CardsFavs animes={item} />}
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={isRefresing}
              onRefresh={() => getFavs()}
            />
          }
        />
      )}
    </ContainerFavs>
  );
};

export default Favs;
