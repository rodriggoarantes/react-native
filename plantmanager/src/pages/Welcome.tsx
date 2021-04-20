import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

import { Container } from '~/shared/Container';

import wateringImg from '~/assets/watering.png';
import colors from '~/styles/colors';

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Text style={styles.title}>
        Gerencia {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image}/>

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
          Go >
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 24,
    marginBottom: 12
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 12,
    height: 56,
    width: 56
  },
  buttonText: {
    color: colors.white
  },
  image: {
    width: 292,
    height: 284
  }

});