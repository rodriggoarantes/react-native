import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
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

import { DevContext } from '~/services/context';

export default function Main({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [devs, setDevs] = useState([]);
  const [region, setRegion] = useState(null);

  const onDevsCallback = list => {
    setDevs(list);
  };

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
        <DevContext.Provider
          value={{
            latitude: region.latitude,
            longitude: region.longitude,
            callback: onDevsCallback,
          }}
        >
          <Map initialRegion={region}>
            {devs.map(dev => (
              <Marker
                key={dev.id}
                coordinate={{
                  latitude: dev.location.geopoint._latitude,
                  longitude: dev.location.geopoint._longitude,
                }}
              >
                <Avatar
                  source={{
                    uri: dev.avatarUrl,
                  }}
                />
                <Callout
                  onPress={() => {
                    const username = dev.githubUsername;
                    navigation.navigate('Profile', {
                      github_username: username,
                    });
                  }}
                >
                  <Ballon>
                    <DevName>{dev.name}</DevName>
                    <DevBio>{dev.bio}</DevBio>
                    <DevTechs>{dev.techs && dev.techs.join(',')}</DevTechs>
                  </Ballon>
                </Callout>
              </Marker>
            ))}
          </Map>
          <Form />
        </DevContext.Provider>
      )}
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
