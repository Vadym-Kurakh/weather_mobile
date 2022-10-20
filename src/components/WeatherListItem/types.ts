export interface IWeatherListItemProps {
  date: string;
  icon: string;
  title: string;
  onPress(): void;
  temperature: number;
}
