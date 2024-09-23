import WeatherCard from "@/components/WeatherCard";
import { ForecastWeatherRes, RealtimeWeatherRes } from "@/types/weatherInfo";

export default async function Home() {
  const currentWeatherData = await fetch(
    "http://localhost:3000/realtime-weather"
  );
  const currentWeather: RealtimeWeatherRes = await currentWeatherData.json();

  const forecastWeatherData = await fetch(
    "http://localhost:3000/forecast-weather/3"
  );
  const forecastWeather: ForecastWeatherRes = await forecastWeatherData.json();

  return (
    <div className=" flex justify-center items-center h-screen gap-3">
      <WeatherCard
        currentWeatherInfo={currentWeather.weatherGliwice}
        forecastWeatherInfo={forecastWeather.forecastWeatherGliwice}
      />
      <WeatherCard
        currentWeatherInfo={currentWeather.weatherHamburg}
        forecastWeatherInfo={forecastWeather.forecastWeatherHamburg}
      />
    </div>
  );
}
