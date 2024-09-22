import CurrentWeatherApiResponse from "@/types/apiResponse";
import CurrentWeatherInfo from "@/types/weatherInfo";

const currentWeatherMapper = (
  apiRes: CurrentWeatherApiResponse
): CurrentWeatherInfo => {
  return {
    name: apiRes.location.name,
    localtime: apiRes.location.localtime,
    temp_c: apiRes.current.temp_c,
    temp_f: apiRes.current.temp_f,
    condition: apiRes.current.condition,
  };
};

export { currentWeatherMapper };
