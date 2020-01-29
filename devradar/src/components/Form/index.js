import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, SearchInput, SearchButton } from './styles';

export default function Form() {
  return (
    <Container>
      <SearchInput
        placeholder="Buscar devs por techs..."
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <SearchButton>
        <MaterialIcons
          name="my-location"
          size={20}
          color="#FFF"
          onPress={() => {}}
        />
      </SearchButton>
    </Container>
  );
}
