import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {getAnimeBanner} from '../../helpers/getAnimeBanner';
import {AnimeDetail} from '../../interfaces/AnimeDetail';
import {
  ContainerImageBanner,
  ContainerInfoBanner,
  ImageBanner,
  SubTitleBanner,
  SuperContainer,
  TitleBanner,
} from './Style';

const Banner = () => {
  const [animeBanner, setAnimeBanner] = useState<AnimeDetail>();
  const navigation = useNavigation();
  useEffect(() => {
    const id = Math.floor(Math.random() * 1000);
    const animes = getAnimeBanner(id);
    animes.then(res => {
      setAnimeBanner(res);
    });
  }, []);

  return (
    <>
      {!animeBanner ? null : (
        <SuperContainer>
          <ContainerImageBanner>
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', animeBanner.data)}
              activeOpacity={0.8}>
              <ImageBanner
                source={{uri: animeBanner?.data.images.jpg.large_image_url}}
              />
            </TouchableOpacity>
          </ContainerImageBanner>

          <ContainerInfoBanner>
            <TitleBanner>{animeBanner?.data.title}</TitleBanner>
            <SubTitleBanner>
              {animeBanner?.data.synopsis.substring(0, 180)}...
            </SubTitleBanner>
          </ContainerInfoBanner>
        </SuperContainer>
      )}
    </>
  );
};

export default Banner;

// var styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     position: 'relative',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     top: 0,
//     bottom: 0,
//     paddingBottom: 50,
//     marginBottom: 0,
//     width: '100%',
//     height: '100%',
//   },
// });
