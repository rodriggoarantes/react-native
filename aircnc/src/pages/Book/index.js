import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

import { Safe, Logo } from '~/components/Container';
import { Form, Label, Button, ButtonText, Input } from '~/components/Form';
import { Container, CancelButton } from './styles';

export default function Book({ navigation }) {
  const [booking, setBooking] = useState('');
  const id = navigation.getParam('id');

  const handleSubmit = () => {};
  const handleCancel = () => {};

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user && id) {
      }
    });
  }, [id]);

  return (
    <Safe>
      <Logo />
      <Container>
        <Form>
          <Label>DATA DE INTERESSE *</Label>
          <Input
            placeholder="Qual data da reserva?"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={booking}
            onChangeText={text => setBooking(text)}
          />

          <Button onPress={handleSubmit}>
            <ButtonText>Solicitar reserva</ButtonText>
          </Button>

          <CancelButton onPress={handleCancel}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </Form>
      </Container>
    </Safe>
  );
}
