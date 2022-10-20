import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

const WeatherCalendar = () => {
  const s = styles();

  return (
    <View style={s.container}>
      <Text>Calendar!</Text>
    </View>
  );
};
export default WeatherCalendar;
