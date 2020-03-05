import React, { useEffect, useState } from 'react';

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

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([]);

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
              {item.price && item.price > 0 ? `R$ ${item.price}` : 'FREE'}
            </Price>
            <Button>
              <ButtonText>Solicitar reserva</ButtonText>
            </Button>
          </ListItem>
        )}
      />
    </Container>
  );
}
