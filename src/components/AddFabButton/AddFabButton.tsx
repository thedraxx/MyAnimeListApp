import React, {useContext, useEffect, useState} from 'react';
import {ContainerButtonFab, TouchableButton} from './Style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {AnimeFavsContext} from '../../context/AnimesFavsContext';
import {Data} from '../../interfaces/AnimeDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {
  animeDetails: Data;
}

const AddFabButton = ({animeDetails}: Props) => {
  const {addAnimeFav, removeAnimeFav, isActive} = useContext(AnimeFavsContext);
  const [isFavorite, setIsFavorite] = useState<string>('heart-o');

  useEffect(() => {
    console.log('useEffect');
    verifyIfIsFav();
  }, [isActive]);

  const verifyIfIsFav = async () => {
    const animeFavs = await AsyncStorage.getItem('animeFavs');
    if (animeFavs) {
      const animes = JSON.parse(animeFavs);
      const isFav = animes.find(
        (anime: Data) => anime.mal_id === animeDetails.mal_id,
      );
      if (isFav) {
        setIsFavorite('heart');
      } else {
        setIsFavorite('heart-o');
      }
    }
  };

  return (
    <ContainerButtonFab>
      {isFavorite === 'heart-o' ? (
        <TouchableButton onPress={() => addAnimeFav(animeDetails)}>
          <Icon name={isFavorite} size={30} color="#fff" />
        </TouchableButton>
      ) : (
        <TouchableButton onPress={() => removeAnimeFav(animeDetails)}>
          <Icon name={isFavorite} size={30} color="#fff" />
        </TouchableButton>
      )}
    </ContainerButtonFab>
  );
};

export default AddFabButton;
