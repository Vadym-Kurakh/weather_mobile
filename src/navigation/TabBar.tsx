import * as React from 'react';
import {Routes} from './enums';
import List from '../icons/List';
import Calendar from '../icons/Calendar';
import WeeklyWeather from '../screens/WeeklyWeather';
import WeatherCalendar from '../screens/WeatherCalendar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const getTabBarIcon = (route, {color}) => {
    switch (route.name) {
      case Routes.Calendar:
        return <Calendar fill={color} />;
      case Routes.Weekly:
        return <List fill={color} />;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: params => getTabBarIcon(route, params),
      })}>
      <Tab.Screen name={Routes.Weekly} component={WeeklyWeather} />
      <Tab.Screen name={Routes.Calendar} component={WeatherCalendar} />
    </Tab.Navigator>
  );
}
