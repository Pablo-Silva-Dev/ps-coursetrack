import { NavigationContainer } from '@react-navigation/native';
import { InitialScreen } from '@screens/InitialScreen';
import { SecureAuthenticationScreen } from '@screens/SecureAuthenticationScreen';
import { SignUp } from '@screens/SignUp';
import { SplashScreen } from '@screens/SplashScreen';
import { PasswordRecovery } from '@screens/PasswordRecovery';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

export type TAuthRoutes = {
  SplashScreen: undefined;
  InitialScreen: undefined;
  SecureAuthenticationScreen: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
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
    {
      name: 'SecureAuthenticationScreen',
      component: SecureAuthenticationScreen,
      options: screensConfig,
    },
    {
      name: 'SignUp',
      component: SignUp,
      options: screensConfig,
    },
    {
      name: 'PasswordRecovery',
      component: PasswordRecovery,
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
