import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Card/Card';
import Tops from '../../components/Tops/Tops';
import {ToggleContext} from '../../context/toggleContext';
import {getAnimes} from '../../helpers/getAnimes';
import {Animes} from '../../interfaces/AnimesInterfaces';
import {ContainerGeneral, ContainerScroll, Loading, TitleText} from './Style';

const Home = () => {
  const [anime, setAnime] = useState<Animes>();
  const {...state} = useContext(ToggleContext);
  const isInDarkMode = state.isDarkMode ? '#fff' : '#000';

  useEffect(() => {
    const animes = getAnimes();
    animes.then(res => {
      setAnime(res);
    });
  }, []);

  return (
    <ContainerGeneral state={state}>
      <Banner />
      <TitleText isInDarkMode={isInDarkMode}>Iconics</TitleText>
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
      <TitleText isInDarkMode={isInDarkMode}>Top</TitleText>
      <Tops />
      <TitleText isInDarkMode={isInDarkMode}>Upcoming</TitleText>
    </ContainerGeneral>
  );
};

export default Home;
