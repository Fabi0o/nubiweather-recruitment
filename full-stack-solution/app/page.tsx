import WeatherCard from "@/components/WeatherCard";
import { ForecastWeatherRes, RealtimeWeatherRes } from "@/types/weatherInfo";

export const dynamic = "force-dynamic";

async function fetchJSON(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      console.error(
        `Failed to fetch ${url}: ${response.status} ${response.statusText}`
      );
      const errorText = await response.text();
      console.log("Error response:", errorText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error while fetching ${url}:`, error);
    return null;
  }
}

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    console.error("Missing NEXT_PUBLIC_BASE_URL environment variable.");
    return <div>Error: Missing base URL for API.</div>;
  }

  const currentWeather: RealtimeWeatherRes | null = await fetchJSON(
    `${baseUrl}/realtime-weather`
  );
  if (!currentWeather) return <div>Error loading current weather data.</div>;

  const forecastWeather: ForecastWeatherRes | null = await fetchJSON(
    `${baseUrl}/forecast-weather/3`
  );
  if (!forecastWeather) return <div>Error loading forecast weather data.</div>;

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3 md:flex-row">
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
