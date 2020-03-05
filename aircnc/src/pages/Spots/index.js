import React, { useState, useEffect } from 'react';
import { AsyncStorage, ScrollView } from 'react-native';

import { Safe, Logo } from '~/components/Container';
import SpotList from '~/components/SpotList';

import { parseStringToArray } from '~/services/utils';

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
      <Logo />
      <ScrollView>
        {techs && techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </Safe>
  );
}
