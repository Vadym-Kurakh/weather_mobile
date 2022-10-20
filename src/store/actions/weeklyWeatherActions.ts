import {WeeklyWeatherTypes} from '../enums';

export const saveWeeklyWeather = val => ({
  type: WeeklyWeatherTypes.SAVE_WEEKLY_WEATHER,
  payload: val,
});

export const fetchWeeklyWeather = () => ({
  type: WeeklyWeatherTypes.FETCH_WEEKLY_WEATHER,
});
