import styled from 'styled-components/native';

export const ContainerFavs = styled.View`
  flex: 1;
  background-color: ${(props: {
    isInDarkMode: string;
    state: {isDarkMode: string};
  }) => (props.isInDarkMode ? '#181818' : '#fff')};
`;
