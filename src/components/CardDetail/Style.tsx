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
  width: 70%;
  height: 500px;
  border-radius: 20px;
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
  top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
`;

export const TextSubTitle = styled.Text`
  font-size: 12px;
`;

export const TextEpisodes = styled.Text`
  font-size: 12px;
`;
