import axios from "axios";
import { useState } from "react";

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

interface ApiResponse {
  main: MainData;
  name: string;
}
//Responsible for fetching data only and indirecetly calling the setter functions.
const fetchData = async (
  city: string,
  setForecastData: (data: ForecastData) => void,
  setCurrentData: (data: ApiResponse) => void
) => {
  try {
    const responseForecast = await axios.get<ForecastData>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_FORECAST_KEY}`
    );
    const responseCurrent = await axios.get<ApiResponse>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );

    setForecastData(responseForecast.data);
    setCurrentData(responseCurrent.data); //.data is to extract the data we want from response
  } catch (error) {
    // Handle errors
    console.error("Error fetching forecast data:", error);
  }
};

export default fetchData;
