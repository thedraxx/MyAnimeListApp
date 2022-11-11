import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import CardsFavs from '../../components/CardsFavs/CardsFavs';
import {AnimeFavsContext} from '../../context/AnimesFavsContext';

const Favs = () => {
  const {animeFavsState} = useContext(AnimeFavsContext);

  return (
    <View>
      <FlatList
        data={animeFavsState.animeFavsState}
        keyExtractor={item => item.mal_id.toString()}
        numColumns={2}
        renderItem={({item}) => <CardsFavs animes={item} />}
      />
    </View>
  );
};

export default Favs;
