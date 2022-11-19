import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props: {isInDarkMode: boolean}) =>
    props.isInDarkMode ? '#222222' : '#f4f4f4'};
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TextBackground = styled.View`
  height: 50px;
  border-radius: 50px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextInputCustom = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: ${(props: {isInDarkMode: boolean}) =>
    props.isInDarkMode ? '#f4f4f4' : '#222222'};
`;
