import { currentWeatherMapper } from "@/lib/mappers";
import { CurrentWeatherApiResponse } from "@/types/apiResponse";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.API_KEY) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  try {
    const [resWeatherGliwice, resWeatherHamburg] = await Promise.all([
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Gliwice`,
        { cache: "no-store" }
      ),
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Hamburg`,
        { cache: "no-store" }
      ),
    ]);

    if (!resWeatherGliwice.ok || !resWeatherHamburg.ok) {
      return NextResponse.json(
        { error: "Failed to fetch current weather data" },
        { status: 502 }
      );
    }

    const [weatherGliwice, weatherHamburg]: [
      CurrentWeatherApiResponse,
      CurrentWeatherApiResponse
    ] = await Promise.all([resWeatherGliwice.json(), resWeatherHamburg.json()]);

    const mappedWeatherGliwice = currentWeatherMapper(weatherGliwice);
    const mappedWeatherHamburg = currentWeatherMapper(weatherHamburg);

    return NextResponse.json({
      weatherGliwice: mappedWeatherGliwice,
      weatherHamburg: mappedWeatherHamburg,
    });
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
