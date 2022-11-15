import styled from 'styled-components/native';

export const ContainerScroll = styled.View`
  flex: 1;
`;

export const ContainerGeneral = styled.View`
  flex: 1;
  background-color: ${(props: {state: {isDarkMode: boolean}}) =>
    props.state.isDarkMode ? '#181818' : '#fff'};
`;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  color: ${(props: {isInDarkMode: string}) => props.isInDarkMode};
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${(props: {isInDarkMode: boolean}) =>
    props.isInDarkMode ? '#181818' : '#fff'};
`;

export const ContainerBanner = styled.View`
  flex: 1;
  height: 300px;
  width: 100%;
`;
