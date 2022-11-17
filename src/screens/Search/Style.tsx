import styled from 'styled-components/native';

export const ContainerSearch = styled.View`
  flex: 1;
  background-color: ${(props: {isInDarkMode: boolean}) =>
    props.isInDarkMode ? '#181818' : '#fff'};
`;
