interface ForecastData {
  list: ForecastEntry[];
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface WeatherDataThing {
  main: string;
}

interface ApiResponse {
  weather: { main: string; icon: string }[];
  main: MainData;
  name: string;
  dt: number;
}
