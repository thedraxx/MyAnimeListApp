/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState, useContext} from 'react';
import {ScrollView} from 'react-native';
import animeAPI from '../../api/animeAPI';
import CardDetail from '../../components/CardDetail/CardDetail';
import {ToggleContext} from '../../context/toggleContext';
import {AnimeDetail, Data} from '../../interfaces/AnimeDetail';
import {RootStackParams} from '../../navigator/Navigator';
import {ContainerDetailGeneral, Loading} from './Style';

interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'> {}

const Detail = ({route}: Props) => {
  const [animeDetails, setAnimeDetails] = useState<Data>();
  const {...state} = useContext(ToggleContext);

  const isInDarkMode = state.isDarkMode ? '#000' : '#fff';

  const {mal_id} = route.params;
  useEffect(() => {
    getFullDetail();
  }, [mal_id]);

  const getFullDetail = async () => {
    try {
      const resp = await animeAPI.get<AnimeDetail>(`anime/${mal_id}`);
      setAnimeDetails(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerDetailGeneral isInDarkMode={isInDarkMode}>
      {animeDetails ? (
        <ScrollView>
          <CardDetail animeDetails={animeDetails} />
        </ScrollView>
      ) : (
        <Loading size={50} color="#1c439b" />
      )}
    </ContainerDetailGeneral>
  );
};

export default Detail;
