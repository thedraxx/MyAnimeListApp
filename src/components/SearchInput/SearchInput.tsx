import React from 'react';
import {Container, TextBackground, TextInputCustom} from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <Container>
      <TextBackground>
        <TextInputCustom
          placeholder="Search Anime"
          autoCapitalize="none"
          autoCorect={false}
        />
        <Icon name="search-outline" size={30} color="#373737" />
      </TextBackground>
    </Container>
  );
};

export default SearchInput;
