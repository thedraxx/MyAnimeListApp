import styled from 'styled-components/native';

export const ContainerSearch = styled.View`
  flex: 1;
  background-color: ${(props: {
    isInDarkMode: string;
    state: {isDarkMode: string};
  }) => (props.isInDarkMode ? '#181818' : '#fff')};
  margin-top: ${(props: {top: number}) => props.top}px;
`;
