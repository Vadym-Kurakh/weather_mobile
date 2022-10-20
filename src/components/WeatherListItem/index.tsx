import moment from 'moment';
import styles from './styles';
import React, {FC} from 'react';
import {IWeatherListItemProps} from './types';
import {Image, Pressable, Text, View} from 'react-native';

export const WeatherListItem: FC<IWeatherListItemProps> = ({
  date,
  icon,
  title,
  onPress,
  temperature,
}: IWeatherListItemProps) => {
  const s = styles();

  return (
    <Pressable onPress={onPress} style={s.container}>
      <Text style={s.time}>{moment(date).format('HH:mm')}</Text>
      <View style={s.wrapper}>
        <Image
          style={s.icon}
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}@4x.png`,
          }}
        />
        <Text style={s.title}>{title}</Text>
      </View>

      <Text style={s.temperature}>
        {temperature > 0 ? '+' : '-'}
        {Math.round(temperature)}°
      </Text>
    </Pressable>
  );
};
