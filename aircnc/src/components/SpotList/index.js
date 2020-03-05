import React, { useEffect, useState } from 'react';

import { withNavigation } from 'react-navigation';

import {
  Container,
  Title,
  TechTitle,
  List,
  ListItem,
  SpotImage,
  Company,
  Price,
  Button,
  ButtonText,
} from './styles';

import api from '~/services/api';

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  const handleNavigate = id => {
    navigation.navigate('Book', { id });
  };

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: {
          tech,
        },
      });

      if (response && response.data) {
        setSpots(response.data);
      }
    }
    loadSpots();
  }, [tech]);

  return (
    <Container>
      <Title>
        Empresas que usam: <TechTitle>{tech}</TechTitle>
      </Title>
      <List
        data={spots}
        keyExtractor={item => item._id}
        horizontal
        showsHorrizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem>
            <SpotImage source={{ uri: item.thumbnail }} />
            <Company>{item.company}</Company>
            <Price>
              {item.price && item.price > 0 ? `R$ ${item.price}/dia` : 'FREE'}
            </Price>
            <Button onPress={() => handleNavigate(item._id)}>
              <ButtonText>Solicitar reserva</ButtonText>
            </Button>
          </ListItem>
        )}
      />
    </Container>
  );
}

export default withNavigation(SpotList);
