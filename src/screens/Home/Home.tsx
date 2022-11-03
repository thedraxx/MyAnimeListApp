import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import animeAPI from '../../api/animeAPI';
import Cards from '../../components/Card/Card';
import {ToggleContext} from '../../context/toggleContext';
import {Animes} from '../../interfaces/AnimesInterfaces';
import {ContainerGeneral, ContainerScroll} from './Style';

const Home = () => {
  const [anime, setAnime] = useState<Animes>();
  const {...state} = useContext(ToggleContext);

  useEffect(() => {
    getAnimes();
  }, []);

  const getAnimes = async () => {
    try {
      const resp = await animeAPI.get('anime/');
      setAnime(resp.data);
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <ContainerGeneral state={state}>
      <ContainerScroll>
        {!anime ? (
          <ActivityIndicator size={50} color="#1c439b" />
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
    </ContainerGeneral>
  );
};

export default Home;
