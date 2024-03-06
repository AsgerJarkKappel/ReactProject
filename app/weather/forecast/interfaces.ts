interface MainData {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface ForecastEntry {
  main: MainData;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain: Rain | null; // It can be null if there's no rain data
  dt_txt: string;
}

interface ForecastData {
  list: ForecastEntry[];
}
