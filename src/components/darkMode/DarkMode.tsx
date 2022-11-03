import React, {useContext} from 'react';
import {ButtonDarkMode, ContainerButton} from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {StyleSheet} from 'react-native';
import {ToggleContext} from '../../context/toggleContext';
const DarkMode = () => {
  const {toggleTheme, ...state} = useContext(ToggleContext);
  return {
    ...(state.isDarkMode ? (
      <ContainerButton>
        <ButtonDarkMode onPress={toggleTheme}>
          <Icon name="sun-o" size={30} color="#ffffff" style={styles.Icon} />
        </ButtonDarkMode>
      </ContainerButton>
    ) : (
      <ContainerButton>
        <ButtonDarkMode onPress={toggleTheme}>
          <Icon name="moon-o" size={30} color="#fff" style={styles.Icon} />
        </ButtonDarkMode>
      </ContainerButton>
    )),
  };
};

export default DarkMode;

const styles = StyleSheet.create({
  Icon: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
  },
});
