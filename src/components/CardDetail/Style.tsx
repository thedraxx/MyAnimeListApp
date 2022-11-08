import styled from 'styled-components/native';

export const ContainerDetailCard = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ScrollCard = styled.ScrollView`
  flex: 1;
  flex-direction: column;
`;

export const ImageDetailCard = styled.Image`
  width: 90%;
  height: 500px;
  border-radius: 10px;
`;

export const ContainerImage = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  top: 50px;
  background-color: ${(props: any = {}) => props.colors.vibrant};
  padding: 25px;
`;

export const ContainerInfoCard = styled.View`
  flex: 1;
  top: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2px;
`;

export const TextTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${(props: any = {}) =>
    props.isInDarkMode === '#fff' ? '#3C4048' : '#fff'};
`;

export const TextSubTitle = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: ${(props: any = {}) =>
    props.isInDarkMode === '#fff' ? '#3C4048' : '#fff'};
`;

export const TextEpisodes = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  color: ${(props: any = {}) =>
    props.isInDarkMode === '#fff' ? '#3C4048' : '#fff'};
`;

export const ContainerScore = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextSinopsis = styled.Text`
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: ${(props: any = {}) =>
    props.isInDarkMode === '#fff' ? '#3C4048' : '#fff'};
`;

export const ContainerGenre = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const TextGenre = styled.Text`
  font-size: 12px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const ContainerGenreText = styled.View`
  padding: 13px;
  background-color: #1c439b;
  border-radius: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ContainerAnimeLikeThis = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
`;
