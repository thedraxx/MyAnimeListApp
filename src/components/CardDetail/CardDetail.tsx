import React from 'react';
import {View, Text} from 'react-native';
import {Data} from '../../interfaces/AnimeDetail';
import {ContainerDetailCard} from './Style';

interface Props {
  animeDetails: Data;
}

const CardDetail = ({animeDetails}: Props) => {
  console.log(animeDetails);
  return (
    <ContainerDetailCard>
      <Text>xD</Text>
    </ContainerDetailCard>
  );
};

export default CardDetail;
