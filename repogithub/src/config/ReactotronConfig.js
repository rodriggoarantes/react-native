import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  Reactotron.configure({ port: 9090 }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .setAsyncStorageHandler(AsyncStorage)
    .connect() // let's connect!;
    .clear();
}
