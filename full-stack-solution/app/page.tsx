import WeatherCard from "@/components/WeatherCard";
import { RealtimeWeatherRes } from "@/types/weatherInfo";

export default async function Home() {
  const data = await fetch("http://localhost:3000/realtime-weather");
  const currentWeather: RealtimeWeatherRes = await data.json();

  return (
    <div className=" flex justify-center items-center h-screen gap-3">
      <WeatherCard weatherInfo={currentWeather.weatherGliwice} />
      <WeatherCard weatherInfo={currentWeather.weatherHamburg} />
    </div>
  );
}
