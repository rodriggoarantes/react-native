import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login';
import Spots from '~/pages/Spots';
import Book from '~/pages/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main: {
      screen: createStackNavigator(
        {
          Spots,
          Book,
        },
        {
          defaultNavigationOptions: {
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          },
        }
      ),
    },
  })
);

export default Routes;
