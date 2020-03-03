import React, { useState, useEffect } from 'react';
import { Image, AsyncStorage, Alert } from 'react-native';
import { Container } from '~/components/Container';
import { Label, Form, Input, Button, ButtonText } from './styles';

import api from '~/services/api';

import logo from '~/assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Spots');
      }
    });
  }, []);

  const handleSubmit = async () => {
    if (!email || !techs) {
      Alert.alert('Atenção', 'E-mail e Tecnologias são obrigatórios.');
      return;
    }

    const user = await api.post('/sessions', { email });
    if (user && user.data) {
      const { id } = user.data;

      await AsyncStorage.setItem('user', id);
      await AsyncStorage.setItem('techs', techs);

      Alert.alert('OK', 'Usuário logado com sucesso.');
      navigation.navigate('Spots');
    } else {
      Alert.alert('Atenção', 'Usuário não encontrado.');
    }
  };

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Label>SEU E-MAIL *</Label>
        <Input
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />

        <Label>TECNOLOGIAS *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={text => setTechs(text)}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>Encontrar spots</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
