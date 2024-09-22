import {
  CurrentWeatherApiResponse,
  ForecastWeatherApiResponse,
} from "@/types/apiResponse";
import { CurrentWeatherInfo, ForecastWeatherInfo } from "@/types/weatherInfo";

const currentWeatherMapper = (
  apiRes: CurrentWeatherApiResponse
): CurrentWeatherInfo => {
  return {
    name: apiRes.location.name,
    localtime: apiRes.location.localtime,
    temp_c: apiRes.current.temp_c,
    temp_f: apiRes.current.temp_f,
    condition: apiRes.current.condition,
  };
};

const forecastWeatherMapper = (
  apiRes: ForecastWeatherApiResponse
): ForecastWeatherInfo => {
  return {
    ...currentWeatherMapper(apiRes),
    forecast: apiRes.forecast.forecastday.map((el) => {
      return {
        date: el.date,
        maxtemp_c: el.day.maxtemp_c,
        maxtemp_f: el.day.maxtemp_f,
        mintemp_c: el.day.mintemp_c,
        mintemp_f: el.day.mintemp_f,
        condition: el.day.condition,
      };
    }),
  };
};

export { currentWeatherMapper, forecastWeatherMapper };
