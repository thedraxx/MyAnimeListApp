import React, {useContext} from 'react';
import {ContainerButtonFab, TouchableButton} from './Style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {AnimeFavsContext} from '../../context/AnimesFavsContext';
import {Data} from '../../interfaces/AnimeDetail';

interface Props {
  animeDetails: Data;
}

const AddFabButton = ({animeDetails}: Props) => {
  const {addAnimeFav} = useContext(AnimeFavsContext);
  return (
    <ContainerButtonFab>
      <TouchableButton onPress={() => addAnimeFav(animeDetails)}>
        <Icon name="heart" size={30} color="#ffffff" />
      </TouchableButton>
    </ContainerButtonFab>
  );
};

export default AddFabButton;
