import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import animeAPI from '../../api/animeAPI';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Card/Card';
import Tops from '../../components/Tops/Tops';
import {ToggleContext} from '../../context/toggleContext';
import {Animes} from '../../interfaces/AnimesInterfaces';
import {ContainerGeneral, ContainerScroll, Loading, TitleText} from './Style';

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
      <Banner />
      <TitleText>Iconics</TitleText>
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
      <TitleText>Top</TitleText>
      <Tops />
      <TitleText>Upcoming</TitleText>
    </ContainerGeneral>
  );
};

export default Home;
