import React, {useContext} from 'react';
import PicksCustom from '../../components/AnimePicks/PicksCustom';
import Tops from '../../components/AnimeTops/Tops';
import Upcoming from '../../components/AnimeUpcoming/Upcoming';
import Banner from '../../components/Banner/Banner';
import {ToggleContext} from '../../context/toggleContext';
import {
  ContainerBanner,
  ContainerGeneral,
  ScrollViewContainer,
  TitleText,
} from './Style';

const Home = () => {
  const {...state} = useContext(ToggleContext);
  const isInDarkMode = state.isDarkMode ? '#fff' : '#000';

  return (
    <>
      <ScrollViewContainer isInDarkMode={state.isDarkMode}>
        <ContainerBanner>
          <Banner />
        </ContainerBanner>
        <ContainerGeneral state={state}>
          <TitleText isInDarkMode={isInDarkMode}>TOP PICKS FOR YOU</TitleText>
          <PicksCustom />
          <TitleText isInDarkMode={isInDarkMode}>Top</TitleText>
          <Tops />
          <TitleText isInDarkMode={isInDarkMode}>Upcoming</TitleText>
          <Upcoming />
        </ContainerGeneral>
      </ScrollViewContainer>
    </>
  );
};

export default Home;
