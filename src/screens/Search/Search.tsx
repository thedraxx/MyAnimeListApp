import React, {useContext} from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import {ContainerSearch} from './Style';
import {ToggleContext} from '../../context/toggleContext';
import {Text} from 'react-native';

const Search = () => {
  const {...state} = useContext(ToggleContext);

  return (
    <ContainerSearch isInDarkMode={state.isDarkMode}>
      <SearchInput />
    </ContainerSearch>
  );
};

export default Search;
