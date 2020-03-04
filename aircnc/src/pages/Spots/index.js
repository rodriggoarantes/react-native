import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { Safe } from '~/components/Container';
import SpotList from '~/components/SpotList';

import { parseStringToArray } from '~/services/utils';

import { Logo } from './styles';
import logo from '~/assets/logo.png';

export default function Spots() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTech => {
      const techsArray = parseStringToArray(storagedTech);
      setTechs(techsArray);
    });
  }, []);

  return (
    <Safe>
      <Logo source={logo} />
      {techs && techs.map(tech => <SpotList key={tech} tech={tech} />)}
    </Safe>
  );
}
