import WeatherCard from "@/components/WeatherCard";
import { ForecastWeatherRes, RealtimeWeatherRes } from "@/types/weatherInfo";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL;

  const currentWeatherData = await fetch(`${baseUrl}/realtime-weather`);
  const currentWeather: RealtimeWeatherRes = await currentWeatherData.json();

  const forecastWeatherData = await fetch(` ${baseUrl}/forecast-weather/3`);
  const forecastWeather: ForecastWeatherRes = await forecastWeatherData.json();

  return (
    <div className=" flex flex-col justify-center items-center h-screen gap-3 md:flex-row">
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
