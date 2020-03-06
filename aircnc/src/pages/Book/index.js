import React, { useState } from 'react';
import { AsyncStorage, Alert } from 'react-native';

import { Safe, Logo } from '~/components/Container';
import { Form, Label, Button, ButtonText } from '~/components/Form';

import DateInput from '~/components/DateInput';

import { Container, Info, CancelButton } from './styles';

import { format } from 'date-fns';
import api from '~/services/api';

export default function Book({ navigation }) {
  const [booking, setBooking] = useState(new Date());
  const spotId = navigation.getParam('id');

  const handleSubmit = async () => {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(
      `/spots/${spotId}/bookings`,
      { date: format(booking, 'yyyy-MM-dd') },
      { headers: { user_id } }
    );

    Alert.alert('Solicitação de reserva realizada com sucesso');
    navigation.navigate('Spots');
  };

  const handleCancel = () => {
    navigation.navigate('Spots');
  };

  return (
    <Safe>
      <Logo />
      <Container>
        <Form>
          <Label>DATA DE INTERESSE *</Label>
          <Info>Escolha a data da reserva</Info>
          <DateInput date={booking} onChange={setBooking} />

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
