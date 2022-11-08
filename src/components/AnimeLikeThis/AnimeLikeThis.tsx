import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import animeAPI from '../../api/animeAPI';
import {Data} from '../../interfaces/AnimeDetail';
import {AnimeRecomends} from '../../interfaces/AnimeRecomnds';
import {ContainerImage} from './Style';
import {useNavigation} from '@react-navigation/native';

interface Props {
  animeDetails: Data;
}

const AnimeLikeThis = ({animeDetails}: Props) => {
  const [animeRec, setAnimeRec] = useState<AnimeRecomends>();
  const navigation = useNavigation();

  useEffect(() => {
    GetRecomendsAnime(animeDetails.mal_id);
  }, []);

  const GetRecomendsAnime = async (id: number) => {
    try {
      const resp = await animeAPI.get(`anime/${id}/recommendations`);
      setAnimeRec(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!animeRec ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={animeRec.data}
          keyExtractor={item => item.entry.mal_id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {mal_id: item.entry.mal_id})
                }
                activeOpacity={0.8}>
                <ContainerImage
                  source={{uri: item.entry.images.jpg.image_url}}
                />
              </TouchableOpacity>
            </>
          )}
        />
      )}
    </>
  );
};

export default AnimeLikeThis;
