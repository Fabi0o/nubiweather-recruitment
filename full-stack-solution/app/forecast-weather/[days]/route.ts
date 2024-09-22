import { forecastWeatherMapper } from "@/lib/mappers";
import { ForecastWeatherApiResponse } from "@/types/apiResponse";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { days: string } }
) {
  const { days } = params;

  const resWeatherGliwice = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=Gliwice&days=${days}`
  );
  const resWeatherHamburg = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=Hamburg&days=${days}`
  );

  const weatherGliwice: ForecastWeatherApiResponse =
    await resWeatherGliwice.json();
  const weatherHamburg: ForecastWeatherApiResponse =
    await resWeatherHamburg.json();

  const mappedWeatherGliwice = forecastWeatherMapper(weatherGliwice);
  const mappedWeatherHamburg = forecastWeatherMapper(weatherHamburg);

  return NextResponse.json({
    forecastWeatherGliwice: mappedWeatherGliwice,
    forecastWeatherHamburg: mappedWeatherHamburg,
  });
}
