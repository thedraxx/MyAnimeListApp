import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AnimeFavsContext} from '../../context/AnimesFavsContext';

const Favs = () => {
  const {animeFavsState} = useContext(AnimeFavsContext);
  console.log(animeFavsState);

  return (
    <View>
      <Text>Favs</Text>
      {/* LLamar a favoriteList */}
    </View>
  );
};

export default Favs;
