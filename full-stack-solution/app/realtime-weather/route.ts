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

  return Response.json({ weatherGliwice, weatherHamburg });
}
