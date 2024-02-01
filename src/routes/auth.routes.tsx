import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen } from 'screens/SplashScreen';
import { InitialScreen } from '@screens/Home';

type AuthRoutes = {
  SplashScreen: undefined;
  InitialScreen: undefined;
};

const AuthRoutes = () => {
  const BottomTabNavigator = createBottomTabNavigator<AuthRoutes>();

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
      <BottomTabNavigator.Navigator initialRouteName="SplashScreen">
        {authRoutes.map(route => (
          <BottomTabNavigator.Screen
            key={route.name}
            name={route.name as never}
            component={route.component}
            options={route.options as never}
          />
        ))}
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
