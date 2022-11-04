/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import animeAPI from '../../api/animeAPI';
import CardDetail from '../../components/CardDetail/CardDetail';
import {AnimeDetail, Data} from '../../interfaces/AnimeDetail';
import {RootStackParams} from '../../navigator/Navigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'> {}

const Detail = ({route}: Props) => {
  const [animeDetails, setAnimeDetails] = useState<Data>();
  const {mal_id} = route.params;

  useEffect(() => {
    getFullDetail();
  }, []);

  const getFullDetail = async () => {
    try {
      const resp = await animeAPI.get<AnimeDetail>(`anime/${mal_id}`);
      setAnimeDetails(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      {animeDetails ? (
        <CardDetail animeDetails={animeDetails} />
      ) : (
        <ActivityIndicator size={50} color="#1c439b" />
      )}
    </ScrollView>
  );
};

export default Detail;
