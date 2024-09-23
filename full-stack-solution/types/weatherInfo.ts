import { WeatherCondition } from "./apiResponse";

type CurrentWeatherInfo = {
  name: string;
  localtime: string;
  temp_c: number;
  temp_f: number;
  condition: WeatherCondition;
};

type ForecastDay = {
  date: string;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  condition: WeatherCondition;
};

type ForecastWeatherInfo = CurrentWeatherInfo & {
  forecast: ForecastDay[];
};

type RealtimeWeatherRes = {
  weatherGliwice: CurrentWeatherInfo;
  weatherHamburg: CurrentWeatherInfo;
};

export type { CurrentWeatherInfo, ForecastWeatherInfo, RealtimeWeatherRes };
