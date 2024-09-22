type CurrentWeatherInfo = {
  name: string;
  localtime: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
};

export default CurrentWeatherInfo;
