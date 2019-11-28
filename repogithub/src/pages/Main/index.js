import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as HomeActions from '../../store/modules/home/actions';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const [count, setCount] = useState([]);

  const counter = useSelector(state => state.counter);

  useEffect(() => {
    async function loadStart() {
      setCount(1000);
    }
    loadStart();
  }, []);

  function handlePlusCount() {
    dispatch(HomeActions.updateAmountRequest(1));
  }

  return (
    <>
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapttalize="none"
            placeholder="Adicionar usuário"
          />
          <SubmitButton onClick={() => handlePlusCount()}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
          <Text>{counter}</Text>
          <Text>{count}</Text>
        </Form>
      </Container>
    </>
  );
}

Main.navigationOptions = {
  title: 'RepoStar',
};
