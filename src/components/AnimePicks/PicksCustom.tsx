import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Cards from '../../components/Card/Card';
import {getAnimes} from '../../helpers/getAnimes';
import {Animes} from '../../interfaces/AnimesTops';
import {ContainerScroll, Loading} from './Style';

const PicksCustom = () => {
  const [anime, setAnime] = useState<Animes>();

  useEffect(() => {
    setTimeout(() => {
      const animes = getAnimes();
      animes.then(res => {
        setAnime(res);
      });
    }, 1000);
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

export default PicksCustom;
