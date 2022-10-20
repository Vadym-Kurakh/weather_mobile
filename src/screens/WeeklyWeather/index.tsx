import moment from 'moment';
import styles from './styles';
import Wind from '../../icons/Wind';
import {useDispatch} from 'react-redux';
import {IWeatherDataItem} from './types';
import {Colors} from '../../styles/colors';
import Humidity from '../../icons/Humidity';
import Pressure from '../../icons/Pressure';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, SectionList, Text, View} from 'react-native';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WeatherListItem} from '../../components/WeatherListItem';
import {fetchWeeklyWeather} from '../../store/actions/weeklyWeatherActions';

const WeeklyWeather = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const s = styles({insets});
  const {weeklyWeatherList} = useTypedSelector(({weeklyWeather}) => ({
    weeklyWeatherList: weeklyWeather?.list,
  }));

  const [activeItem, setActiveItem] = useState<IWeatherDataItem>(
    weeklyWeatherList[0]?.data[0],
  );

  useEffect(() => {
    dispatch(fetchWeeklyWeather());
  }, [dispatch]);

  useEffect(() => {
    setActiveItem(weeklyWeatherList[0]?.data[0]);
  }, [weeklyWeatherList]);

  const renderSectionHeader = ({section: {title}}: any) => {
    return <Text style={s.sectionTitle}>{title}</Text>;
  };

  const renderItem = ({item}: any) => {
    const {dt_txt, weather, main} = item;

    return (
      <WeatherListItem
        date={dt_txt}
        icon={weather[0].icon}
        title={weather[0].main}
        temperature={main?.temp}
        onPress={() => setActiveItem(item)}
      />
    );
  };

  return (
    <View style={s.container}>
      <LinearGradient
        style={s.header}
        end={{x: 0, y: 1}}
        start={{x: 0, y: 0}}
        colors={[Colors.lightBlue, Colors.blue]}>
        <Text style={s.title}>5 days</Text>
        <View style={s.headerRow}>
          <Image
            style={s.headerIcon}
            source={{
              uri: `https://openweathermap.org/img/wn/${activeItem?.weather[0]?.icon}@4x.png`,
            }}
          />
          <View>
            <View style={s.date}>
              <Text style={s.headerTime}>
                {moment(activeItem?.dt_txt).calendar(null, {
                  sameDay: '[Today]',
                  nextDay: '[Tomorrow]',
                  nextWeek: 'dddd',
                })}
              </Text>
              <Text style={s.headerTime}>
                {moment(activeItem?.dt_txt).format('HH:mm')}
              </Text>
            </View>
            <Text style={s.headerTemp}>
              {activeItem?.main?.temp > 0 ? '+' : '-'}
              {Math.round(activeItem?.main?.temp)}°
            </Text>
            <Text style={s.weatherDesc}>
              {activeItem?.weather[0]?.description}
            </Text>
          </View>
        </View>
        <View style={s.weatherDetails}>
          <View style={s.detailsBlock}>
            <Wind style={s.descIcon} />
            <Text style={s.value}>{activeItem?.wind?.speed} m/s</Text>
            <Text style={s.label}>Wind</Text>
          </View>
          <View style={s.detailsBlock}>
            <Humidity style={s.descIcon} />
            <Text style={s.value}>{activeItem?.main?.humidity} %</Text>
            <Text style={s.label}>Humidity</Text>
          </View>
          <View style={s.detailsBlock}>
            <Pressure style={s.descIcon} />
            <Text style={s.value}>{activeItem?.main?.pressure} hPa</Text>
            <Text style={s.label}>Pressure</Text>
          </View>
        </View>
      </LinearGradient>
      <SectionList
        style={s.list}
        renderItem={renderItem}
        sections={weeklyWeatherList}
        keyExtractor={item => item?.dt}
        contentContainerStyle={s.listContainer}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};
export default WeeklyWeather;
