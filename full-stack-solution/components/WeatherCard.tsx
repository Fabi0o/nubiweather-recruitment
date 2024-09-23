import { CurrentWeatherInfo } from "@/types/weatherInfo";

type Props = {
  weatherInfo: CurrentWeatherInfo;
};

export default function WeatherCard({ weatherInfo }: Props) {
  return (
    <div className="w-72 h-96 rounded-lg bg-white dark:bg-slate-800 p-3">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold m-5">{weatherInfo.name}</div>
        <div className="text-lg">{weatherInfo.temp_c}C</div>
        <div>
          <img src={`https:${weatherInfo.condition.icon}`} alt="weather icon" />
        </div>
        <div>{weatherInfo.condition.text}</div>
      </div>
      <div></div>
    </div>
  );
}
