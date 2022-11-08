/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Data} from '../../interfaces/AnimeDetail';
import {
  ContainerAnimeLikeThis,
  ContainerDetailCard,
  ContainerGenre,
  ContainerGenreText,
  ContainerInfoCard,
  ContainerScore,
  ImageDetailCard,
  TextEpisodes,
  TextGenre,
  TextSinopsis,
  TextSubTitle,
  TextTitle,
} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {getImageColor} from '../../helpers/getColors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ToggleContext} from '../../context/toggleContext';
import BackButton from '../BackButton/BackButton';
import AnimeLikeThis from '../AnimeLikeThis/AnimeLikeThis';
interface Props {
  animeDetails: Data;
}

interface ImageColors {
  primary: string;
  secondary: string;
}

const CardDetail = ({animeDetails}: Props) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const {...state} = useContext(ToggleContext);

  const isInDarkMode = state.isDarkMode ? '#000' : '#fff';

  let arrayScore = [];
  for (let i = 0; i < animeDetails.score; i++) {
    arrayScore.push(i);
  }

  useEffect(() => {
    callGetColors(animeDetails.images.webp.large_image_url);
  }, [animeDetails]);

  const callGetColors = async (uri: string) => {
    const [primary, secondary] = await getImageColor(uri);
    if (primary && secondary) {
      setColors({primary, secondary});
    } else {
      setColors({primary: 'transparent', secondary: 'transparent'});
    }
  };
  return (
    <ContainerDetailCard>
      <BackButton />
      <LinearGradient
        colors={[colors.primary, colors.secondary, isInDarkMode]}
        style={styles.linearGradient}>
        <ImageDetailCard
          source={{uri: animeDetails.images.webp.large_image_url}}
        />
      </LinearGradient>
      <LinearGradient
        colors={[isInDarkMode, isInDarkMode]}
        style={styles.linearGradientInfo}>
        <ContainerInfoCard>
          <TextTitle isInDarkMode={isInDarkMode}>
            {animeDetails.title}
          </TextTitle>
          <TextSubTitle isInDarkMode={isInDarkMode}>
            {animeDetails.title_japanese}
          </TextSubTitle>
          <TextEpisodes isInDarkMode={isInDarkMode}>
            Episodes: {animeDetails.episodes}
          </TextEpisodes>
          <ContainerScore>
            {arrayScore.map((item, index) => {
              return (
                <View key={index}>
                  <Icon
                    name="star"
                    size={15}
                    color={isInDarkMode === '#fff' ? '#3C4048' : '#fff'}
                  />
                </View>
              );
            })}
          </ContainerScore>
          <TextSinopsis isInDarkMode={isInDarkMode}>
            {animeDetails.synopsis}
          </TextSinopsis>
          <ContainerGenre>
            {animeDetails.genres.map(genre => (
              <ContainerGenreText key={genre.mal_id}>
                <TextGenre>{genre.name}</TextGenre>
              </ContainerGenreText>
            ))}
          </ContainerGenre>
          <ContainerAnimeLikeThis>
            {/* Recomendations */}
            {!animeDetails ? (
              <ActivityIndicator />
            ) : (
              <AnimeLikeThis animeDetails={animeDetails} />
            )}
          </ContainerAnimeLikeThis>
        </ContainerInfoCard>
      </LinearGradient>
    </ContainerDetailCard>
  );
};

export default CardDetail;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 0,
    padding: 25,
  },
  linearGradientInfo: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 0,
    padding: 25,
  },
});
