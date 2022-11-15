import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import CardsFavs from '../../components/CardsFavs/CardsFavs';
import {ToggleContext} from '../../context/toggleContext';
import {Datum} from '../../interfaces/AnimesTops';
import {ContainerFavs} from './Style';

type Props = {
  animeFavsState: Datum;
};

const Favs = () => {
  const [animeFavs, setAnimeFavs] = useState<Props>({});
  const [isRefresing, setIsRefresing] = useState(false);
  const {...state} = useContext(ToggleContext);
  const isInDarkMode = state.isDarkMode;

  const getFavs = async () => {
    setIsRefresing(true);
    const favs = await AsyncStorage.getItem('animeFavs');
    console.log(favs);
    setAnimeFavs(JSON.parse(favs));
    setIsRefresing(false);
  };

  return (
    <ContainerFavs isInDarkMode={isInDarkMode}>
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
    </ContainerFavs>
  );
};

export default Favs;
