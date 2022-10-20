import {EdgeInsets} from 'react-native-safe-area-context';

export interface IStylesProps {
  insets: EdgeInsets;
}

export interface IWeatherDataItem {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<IWeather>;
}

interface IWeather {
  description: string;
}
