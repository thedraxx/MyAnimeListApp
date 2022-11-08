import React from 'react';
import {ContainerButton, TouchableButton} from './Style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const BackButton = () => {
  const {navigate} = useNavigation();
  return (
    <ContainerButton>
      <TouchableButton onPress={() => navigate('Home')}>
        <Icon name="arrow-left" size={30} color="#ffffff" />
      </TouchableButton>
    </ContainerButton>
  );
};

export default BackButton;
