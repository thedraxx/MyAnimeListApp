import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Cards from '../../components/Card/Card';
import {Animes} from '../../interfaces/AnimesTops';
import {ContainerScroll, Loading} from './Style';
import {getAnimeTops} from '../../helpers/getAnimeTops';

const Tops = () => {
  const [anime, setAnime] = useState<Animes>();

  useEffect(() => {
    setTimeout(() => {
      const animes = getAnimeTops();
      animes.then(res => {
        setAnime(res);
      });
    }, 2500);
  }, []);

  return (
    <ContainerScroll>
      {!anime ? (
        <Loading size={50} color="#1c439b" />
      ) : (
        <FlatList
          data={anime?.data}
          keyExtractor={item => item.mal_id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Cards animes={item} />}
        />
      )}
    </ContainerScroll>
  );
};

export default Tops;
