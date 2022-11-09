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

export const Loading = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 10px;
`;
