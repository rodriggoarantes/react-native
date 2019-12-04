import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';

import Routes from './src/routes';

export default function App() {
  Reactotron.log('Blank - App');
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
