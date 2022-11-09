import React from 'react';
import {ContainerButtonFab, TouchableButton} from './Style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddFabButton = () => {
  return (
    <ContainerButtonFab>
      <TouchableButton>
        <Icon name="heart" size={30} color="#ffffff" />
      </TouchableButton>
    </ContainerButtonFab>
  );
};

export default AddFabButton;
