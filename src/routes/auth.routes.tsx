import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen } from 'screens/SplashScreen';
import { Home } from 'screens/Home';

export const AuthRoutes = () => {
  const BottomTabNavigator = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator initialRouteName="SplashScreen">
        <BottomTabNavigator.Screen
          component={SplashScreen}
          name="SplashScreen"
        />
        <BottomTabNavigator.Screen component={Home} name="Home" />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};
