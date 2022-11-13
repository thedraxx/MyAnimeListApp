import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator`
  display: flex;
  position: absolute;
  flex: 1;
  top: 50%;
  left: 50%;
  right: 50%;
  bottom: 50%;
`;

export const ContainerDetailGeneral = styled.View`
  flex: 1;
  background-color: ${(props: {isInDarkMode: string}) => props.isInDarkMode};
`;
