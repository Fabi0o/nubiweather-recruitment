import { forecastWeatherMapper } from "@/lib/mappers";
import { ForecastWeatherApiResponse } from "@/types/apiResponse";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { days: string } }
) {
  const { days } = params;

  if (!process.env.API_KEY) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  try {
    const [resWeatherGliwice, resWeatherHamburg] = await Promise.all([
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=Gliwice&days=${days}`
      ),
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=Hamburg&days=${days}`
      ),
    ]);

    if (!resWeatherGliwice.ok || !resWeatherHamburg.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weather data" },
        { status: 502 }
      );
    }

    const [weatherGliwice, weatherHamburg]: [
      ForecastWeatherApiResponse,
      ForecastWeatherApiResponse
    ] = await Promise.all([resWeatherGliwice.json(), resWeatherHamburg.json()]);

    const mappedWeatherGliwice = forecastWeatherMapper(weatherGliwice);
    const mappedWeatherHamburg = forecastWeatherMapper(weatherHamburg);

    return NextResponse.json({
      forecastWeatherGliwice: mappedWeatherGliwice,
      forecastWeatherHamburg: mappedWeatherHamburg,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
