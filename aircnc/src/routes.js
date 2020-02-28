import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'AirCNC',
          headerTitleAlign: 'center',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#00838f',
        },
      },
    }
  )
);

export default Routes;
