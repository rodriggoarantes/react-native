import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User, { navigationOptions } from './pages/User';

const AppNavigator = createStackNavigator(
  {
    Main,
    User: {
      screen: User,
      navigationOptions,
    },
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#FFF',
    },
  }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
