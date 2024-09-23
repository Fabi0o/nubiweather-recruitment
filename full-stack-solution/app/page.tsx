import WeatherCard from "@/components/WeatherCard";
import { ForecastWeatherRes, RealtimeWeatherRes } from "@/types/weatherInfo";

async function fetchJSON(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`
    );
    const text = await response.text(); // To inspect if it's HTML
    console.log(text); // Log the HTML or error message
    return null;
  }
  return await response.json();
}

export default async function Home() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_URL}`;
  if (!baseUrl || baseUrl === "https://undefined") {
    console.error("Invalid baseUrl:", baseUrl);
    return null;
  }

  const currentWeather: RealtimeWeatherRes = await fetchJSON(
    `${baseUrl}/realtime-weather`
  );
  if (!currentWeather) return <div>Error loading current weather</div>;

  const forecastWeather: ForecastWeatherRes = await fetchJSON(
    `${baseUrl}/forecast-weather/3`
  );
  if (!forecastWeather) return <div>Error loading forecast weather</div>;

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
