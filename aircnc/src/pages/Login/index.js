import React from 'react';
import { Image } from 'react-native';
import { Container } from '~/components/Container';
import { Label, Form, Input, Button, ButtonText } from './styles';

import logo from '~/assets/logo.png';

export default function Login() {
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
        />

        <Label>TECNOLOGIAS *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Button>
          <ButtonText>Encontrar spots</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
