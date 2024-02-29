"use client";
import React, { useState } from "react";
import * as dotenv from "dotenv";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

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

export default function WeatherApp() {
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      setData(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Next.js TypeScript API Example</h1>

      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div className="text-black">
          <h2>Data from API:</h2>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Feels Like: {data.main.feels_like} °C</p>
          <p>Min Temperature: {data.main.temp_min} °C</p>
          <p>Max Temperature: {data.main.temp_max} °C</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
