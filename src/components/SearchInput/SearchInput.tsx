import React, {useState, useContext} from 'react';
import {Container, TextBackground, TextInputCustom} from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimeListSearch from '../AnimeListSearch/AnimeListSearch';
import {useForm} from '../hooks/useForm';
import {ToggleContext} from '../../context/toggleContext';

const SearchInput = () => {
  const {...state} = useContext(ToggleContext);
  const [isFinishTyping, setIsFinishTyping] = useState(false);
  const {search, onChange} = useForm({
    search: '',
  });

  const isInDarkMode = state.isDarkMode ? '#f3f3f3' : '#000000';

  return (
    <>
      <Container isInDarkMode={state.isDarkMode}>
        <TextBackground>
          <TextInputCustom
            isInDarkMode={state.isDarkMode}
            placeholder="Search Anime"
            placeholderTextColor={isInDarkMode}
            autoCapitalize="none"
            autoCorect={false}
            value={search}
            onChangeText={(value: string) => onChange(value, 'search')}
            onSubmitEditing={() => setIsFinishTyping(!isFinishTyping)}
          />
          <Icon name="search-outline" size={30} color="#373737" />
        </TextBackground>
      </Container>
      <>
        <AnimeListSearch search={search} isFinishTyping={isFinishTyping} />
      </>
    </>
  );
};

export default SearchInput;
