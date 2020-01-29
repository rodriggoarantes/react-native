import React, { useEffect, useState } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { Marker, Callout } from 'react-native-maps';
import { Container } from '~/components/Container';
import { Loading, LoadingContainer, Map, Avatar } from './styled';

export default function Main() {
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
      }
    }
    loadLocation();
  });

  return (
    <Container>
      {!region ? (
        <LoadingContainer>
          <Loading>Loading ...</Loading>
        </LoadingContainer>
      ) : (
        <Map initialRegion={region}>
          <Marker
            coordinate={{ latitude: -16.6831532, longitude: -49.2562319 }}
          >
            <Avatar
              source={{
                uri: 'https://api.adorable.io/avatars/50/adorable.png',
              }}
            />
            <Callout />
          </Marker>
        </Map>
      )}
    </Container>
  );
}
