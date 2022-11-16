import styled from 'styled-components/native';

export const ContainerFavs = styled.View`
  flex: 1;
  background-color: ${(props: {
    isInDarkMode: string;
    state: {isDarkMode: string};
  }) => (props.isInDarkMode ? '#181818' : '#fff')};
`;

export const ContainerNoFavs = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: {
    isInDarkMode: string;
    state: {isDarkMode: string};
  }) => (props.isInDarkMode ? '#181818' : '#fff')};
`;

export const TextNoFavs = styled.Text`
  font-size: 16px;
  color: ${(props: {isInDarkMode: string; state: {isDarkMode: string}}) =>
    props.isInDarkMode ? '#181818' : '#fff'};
`;
