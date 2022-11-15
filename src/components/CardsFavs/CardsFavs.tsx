import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CardCustom} from './Style';
import {useNavigation} from '@react-navigation/native';
import {Datum} from '../../interfaces/AnimesTops';

interface Props {
  animes: Datum;
}

const CardsFavs = ({animes}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', animes)}
      activeOpacity={0.8}>
      <CardCustom source={{uri: animes.images.jpg.image_url}} />
    </TouchableOpacity>
  );
};

export default CardsFavs;
