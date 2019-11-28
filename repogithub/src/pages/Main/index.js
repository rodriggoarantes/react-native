import React, { useState, useEffect } from 'react';
import { Alert, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    async function loadStart() {
      setUsers([...users]);
    }
    loadStart();
  }, []);

  async function handleSubmit() {
    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      };

      setUsers([...users, data]);

      Alert.alert('Usuario', 'Usuario adicionado com sucesso');
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert('Usuario', 'Erro ao adicionar o usuario');
    }
  }

  return (
    <>
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapttalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => setNewUser(text)}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

Main.navigationOptions = {
  title: 'RepoStar',
};
