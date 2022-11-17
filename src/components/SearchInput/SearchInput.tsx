import React, {useState} from 'react';
import {Container, TextBackground, TextInputCustom} from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimeListSearch from '../AnimeListSearch/AnimeListSearch';
import {useForm} from '../hooks/useForm';

const SearchInput = () => {
  const {search, onChange} = useForm({
    search: '',
  });

  const [isFinishTyping, setIsFinishTyping] = useState(false);

  return (
    <Container>
      <TextBackground>
        <TextInputCustom
          placeholder="Search Anime"
          autoCapitalize="none"
          autoCorect={false}
          value={search}
          onChangeText={(value: string) => onChange(value, 'search')}
          onSubmitEditing={() => setIsFinishTyping(!isFinishTyping)}
        />
        <Icon name="search-outline" size={30} color="#373737" />
      </TextBackground>

      <AnimeListSearch search={search} isFinishTyping={isFinishTyping} />
    </Container>
  );
};

export default SearchInput;
