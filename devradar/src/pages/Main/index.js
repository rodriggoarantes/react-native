import React, { useEffect, useState } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import PropTypes from 'prop-types';

import { Marker, Callout } from 'react-native-maps';
import Container from '~/components/Container';
import Form from '~/components/Form';

import {
  Loading,
  Map,
  Avatar,
  Ballon,
  DevName,
  DevBio,
  DevTechs,
} from './styles';

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    async function loadLocation() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setLoading(false);
      }
    }
    loadLocation();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Map initialRegion={region}>
            <Marker
              coordinate={{ latitude: -16.6831532, longitude: -49.2562319 }}
            >
              <Avatar
                source={{
                  uri: 'https://api.adorable.io/avatars/50/adorable.png',
                }}
              />
              <Callout
                onPress={() => {
                  navigation.navigate('Profile', {
                    github_username: 'rodriggoarantes',
                  });
                }}
              >
                <Ballon>
                  <DevName>Rodrigo Arantes</DevName>
                  <DevBio>
                    CTO R1 Tec, apaixonado por cerveja e tecnologia
                  </DevBio>
                  <DevTechs>ReactJS, React Native, Java</DevTechs>
                </Ballon>
              </Callout>
            </Marker>
          </Map>
          <Form />
        </>
      )}
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
