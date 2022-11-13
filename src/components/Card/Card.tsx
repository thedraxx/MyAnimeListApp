import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Datum} from '../../interfaces/AnimesInterfaces';
import {CardCustom, ContainerImage} from './Style';

export interface Props {
  animes: Datum;
  height?: number;
  width?: number;
}

const Cards = ({animes, height = 320, width = 200}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', animes)}
      activeOpacity={0.8}>
      <ContainerImage height={`${height}px`} width={`${width}px`}>
        <CardCustom source={{uri: animes.images.jpg.image_url}} />
      </ContainerImage>
    </TouchableOpacity>
  );
};

export default Cards;
