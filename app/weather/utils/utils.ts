import axios from "axios";
import { useState } from "react";

const [data, setData] = useState<ApiResponse | null>(null);

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface ApiResponse {
  main: MainData;
}

export const handleCitySubmit = (city: string): void => {
  fetchData(city);
  console.log(`Selected city: ${city}`);
};

const fetchData = async (city: string) => {
  try {
    const response = await axios.get<ApiResponse>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
    setData(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
};
