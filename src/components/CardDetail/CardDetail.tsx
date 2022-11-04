/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Data} from '../../interfaces/AnimeDetail';
import {
  ContainerDetailCard,
  ContainerInfoCard,
  ImageDetailCard,
  TextEpisodes,
  TextSubTitle,
  TextTitle,
} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {getImageColor} from '../../helpers/getColors';

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
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}>
        <ImageDetailCard
          source={{uri: animeDetails.images.webp.large_image_url}}
        />
      </LinearGradient>

      <ContainerInfoCard>
        <TextTitle>{animeDetails.title}</TextTitle>
        <TextSubTitle>{animeDetails.title_japanese}</TextSubTitle>
        <TextEpisodes>Episodes: {animeDetails.episodes}</TextEpisodes>
        <Text>{animeDetails.synopsis}</Text>
      </ContainerInfoCard>
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
});
