import { CurrentWeatherInfo, ForecastWeatherInfo } from "@/types/weatherInfo";

type Props = {
  currentWeatherInfo: CurrentWeatherInfo;
  forecastWeatherInfo: ForecastWeatherInfo;
};

export default function WeatherCard({
  currentWeatherInfo,
  forecastWeatherInfo,
}: Props) {
  return (
    <div className="w-72 h-96 rounded-lg bg-white dark:bg-slate-800 p-3 flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold m-5">{currentWeatherInfo.name}</div>
        <div className="text-lg">{currentWeatherInfo.temp_c}C</div>
        <div>
          <img
            src={`https:${currentWeatherInfo.condition.icon}`}
            alt="weather icon"
          />
        </div>
        <div>{currentWeatherInfo.condition.text}</div>
      </div>
      <div className="flex">
        {forecastWeatherInfo.forecast.map((forecast) => (
          <div className="grow flex flex-col items-center" key={forecast.date}>
            <div className="font-bold"> {forecast.date.substring(5)}</div>
            <div>
              <img
                src={`https:${forecast.condition.icon}`}
                alt="weather icon"
                height={40}
                width={40}
              />
            </div>
            <div className="text-sm">Max: {forecast.maxtemp_c}C</div>
            <div className="text-sm">Min: {forecast.mintemp_c}C</div>
          </div>
        ))}
      </div>
    </div>
  );
}
