import styled from 'styled-components/native';

export const SuperContainer = styled.View`
  position: relative;
  flex: 1;
`;

export const ContainerImageBanner = styled.View`
  top: 0;
  left: 0;
  flex: 1;
`;

export const ImageBanner = styled.Image`
  width: 100%;
  height: 300px;
`;

export const ContainerInfoBanner = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TitleBanner = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitleBanner = styled.Text`
  color: #fff;
  font-size: 15px;
`;
