import React, { useState, useEffect, useCallback } from 'react';
import { Alert, Keyboard, ActivityIndicator, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import Reactotron from 'reactotron-react-native';

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

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    async function loadStart() {
      const usersStore = await AsyncStorage.getItem('users');
      if (usersStore) {
        setUsers(JSON.parse(usersStore));
      }
    }
    loadStart();
  }, []);

  useEffect(() => {
    Reactotron.log('effect-users-call');
    if (users && users.length > 0) {
      Reactotron.log('effect-users-has');
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  const verifyUserValidForAdd = () => {
    if (newUser && newUser !== '') {
      const exist = users.filter(u => u && u.login && u.login === newUser)
        .length;

      if (exist > 0) {
        Alert.alert(
          'Usuario Existente',
          'Usuario informado já existe na listagem'
        );
        return false;
      }
    } else {
      Alert.alert('Usuario obrigatorio', 'Informe um nome de usuário válido');
      return false;
    }
    return true;
  };
  const handleSubmit = useCallback(async () => {
    Reactotron.log('handleSubmit');

    if (!verifyUserValidForAdd()) {
      return;
    }

    try {
      setLoading(true);
      const response = await api.get(`/users/${newUser}`);

      if (response.data && response.data.name) {
        const data = {
          name: response.data.name || '<Não Informado>',
          login: response.data.login,
          bio: response.data.bio || '<Não Informado>',
          avatar: response.data.avatar_url,
        };

        setUsers([...users, data]);
        Keyboard.dismiss();
      } else {
        Alert.alert('Erro', 'Usuario NAO encontrado');
      }

      setLoading(false);
      setNewUser('');
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Erro ao adicionar o usuario');
    }
  }, [users, newUser]);

  const handleNavigate = user => {
    navigation.navigate('User', { user });
  };

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

              <ProfileButton
                onPress={() => {
                  handleNavigate(item);
                }}
              >
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    </>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Main.navigationOptions = {
  title: 'RepoStar',
};
