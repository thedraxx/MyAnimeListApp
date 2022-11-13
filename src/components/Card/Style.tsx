import styled from 'styled-components/native';

export const ContainerImage = styled.View`
  width: ${(props: {width: number}) => props.width};
  height: ${(props: {height: number}) => props.height};
  flex-direction: row;
  margin: 0 8px;
`;

export const CardCustom = styled.Image`
  flex: 1;
  border-radius: 5px;
`;
