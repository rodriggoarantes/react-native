import React, { useState, useEffect, useCallback } from 'react';
import { Alert, Keyboard, ActivityIndicator, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    async function loadStart() {
      setUsers([]);
    }
    loadStart();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleSubmit = useCallback(async () => {
    if (newUser && newUser !== '') {
      const exist = users.filter(u => u && u.login && u.login === newUser)
        .length;

      if (exist > 0) {
        Alert.alert(
          'Usuario Existente',
          'Usuario informado já existe na listagem'
        );
        return;
      }

      setLoading(true);

      try {
        const response = await api.get(`/users/${newUser}`);

        if (response.data && response.data.name) {
          const data = {
            name: response.data.name || '<Não Informado>',
            login: response.data.login,
            bio: response.data.bio || '<Não Informado>',
            avatar: response.data.avatar_url,
          };

          setUsers([...users, data]);
          setLoading(false);

          Alert.alert('Usuario', 'Usuario adicionado com sucesso');
          Keyboard.dismiss();
        } else {
          setLoading(false);
          Alert.alert('Erro', 'Usuario NAO encontrado');
        }

        setNewUser('');
      } catch (error) {
        Alert.alert('Erro', 'Erro ao adicionar o usuario');
      } finally {
        setLoading(false);
      }
    }
  }, [users, newUser]);

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
          <SubmitButton loading={loading} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#FFF" />
            )}
          </SubmitButton>
        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    </>
  );
}

Main.navigationOptions = {
  title: 'RepoStar',
};
