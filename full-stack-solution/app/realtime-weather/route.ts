import { currentWeatherMapper } from "@/lib/mappers";
import WeatherApiResponse from "@/types/apiResponse";

export async function GET() {
  const resWeatherGliwice = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Gliwice`
  );
  const resWeatherHamburg = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Hamburg`
  );

  const weatherGliwice: WeatherApiResponse = await resWeatherGliwice.json();
  const weatherHamburg: WeatherApiResponse = await resWeatherHamburg.json();

  const mappedWeatherGliwice = currentWeatherMapper(weatherGliwice);
  const mappedWeatherHamburg = currentWeatherMapper(weatherHamburg);

  return Response.json({
    weatherGliwice: mappedWeatherGliwice,
    weatherHamburg: mappedWeatherHamburg,
  });
}
