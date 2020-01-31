import React, { useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, SearchInput, SearchButton } from './styles';

import { DevContext } from '~/services/context';
import api from '~/services/api';

export default function Form() {
  const [techs, setTechs] = useState('');
  const { callback, latitude, longitude } = useContext(DevContext);

  const loadDevs = async () => {
    console.log(`latlong: ${latitude}|${longitude}`);
    if (techs) {
      const response = await api.post('/search', {
        latitude,
        longitude,
        techs,
      });

      callback(response.data);
    }
    Keyboard.dismiss();
  };

  return (
    <Container>
      <SearchInput
        placeholder="Buscar devs por techs..."
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        onChangeText={text => setTechs(text)}
      />
      <SearchButton>
        <MaterialIcons
          name="my-location"
          size={20}
          color="#FFF"
          onPress={() => {
            loadDevs();
          }}
        />
      </SearchButton>
    </Container>
  );
}
