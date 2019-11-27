import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';

import Routes from './src/routes';

export default function App() {
  Reactotron.log('ReposGitHub');
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
