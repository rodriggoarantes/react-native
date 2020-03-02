import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login';
import Spots from '~/pages/Spots';
import Book from '~/pages/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator(
      { Spots, Book },
      {
        defaultNavigationOptions: {
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#00838f',
          },
        },
      }
    ),
  })
);

export default Routes;
