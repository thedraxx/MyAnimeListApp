import styled from 'styled-components/native';

export const ContainerScroll = styled.View`
  flex: 1;
  top: 15px;
`;

export const ContainerGeneral = styled.View`
  flex: 1;
  background-color: ${(props: {state: {isDarkMode: boolean}}) =>
    props.state.isDarkMode ? '#181818' : '#fff'};
`;
