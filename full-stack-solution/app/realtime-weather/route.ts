import { currentWeatherMapper } from "@/lib/mappers";
import { CurrentWeatherApiResponse } from "@/types/apiResponse";
import { NextResponse } from "next/server";

export async function GET() {
  const resWeatherGliwice = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Gliwice`
  );
  const resWeatherHamburg = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Hamburg`
  );

  const weatherGliwice: CurrentWeatherApiResponse =
    await resWeatherGliwice.json();
  const weatherHamburg: CurrentWeatherApiResponse =
    await resWeatherHamburg.json();

  const mappedWeatherGliwice = currentWeatherMapper(weatherGliwice);
  const mappedWeatherHamburg = currentWeatherMapper(weatherHamburg);

  return NextResponse.json({
    weatherGliwice: mappedWeatherGliwice,
    weatherHamburg: mappedWeatherHamburg,
  });
}
