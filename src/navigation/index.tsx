import TabBar from './TabBar';
import * as React from 'react';
import {Routes} from './enums';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.TabBar} component={TabBar} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Navigation;
