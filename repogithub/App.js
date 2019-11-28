import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';

import store from './src/store';
import Routes from './src/routes';

export default function App() {
  Reactotron.log('ReposGitHub');
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
