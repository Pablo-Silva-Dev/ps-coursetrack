import { NavigationContainer } from '@react-navigation/native';

import { InitialScreen } from '@screens/InitialScreen';
import { SplashScreen } from 'screens/SplashScreen';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

type TAuthRoutes = {
  SplashScreen: undefined;
  InitialScreen: undefined;
};

export type TAuthRoutesBottomTabs = StackNavigationProp<TAuthRoutes>;

const AuthRoutes = () => {
  const StackNavigator = createStackNavigator<TAuthRoutes>();

  const screensConfig = {
    headerShown: false,
    tabBarStyle: {
      display: 'none',
    },
  };

  const authRoutes = [
    {
      name: 'SplashScreen',
      component: SplashScreen,
      options: screensConfig,
    },
    {
      name: 'InitialScreen',
      component: InitialScreen,
      options: screensConfig,
    },
  ];

  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="SplashScreen">
        {authRoutes.map(route => (
          <StackNavigator.Screen
            key={route.name}
            name={route.name as never}
            component={route.component}
            options={route.options as never}
          />
        ))}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
