"use client";
import React, { useState } from "react";
import * as dotenv from "dotenv";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import CityForm from "./components/form";
import WeatherData from "./components/weatherData";

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

  const handleCitySubmit = (city: string) => {
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

  return (
    <div className="text-black">
      <h1>Next.js TypeScript API Example</h1>
      <CityForm onSubmit={handleCitySubmit} />

      {data && <WeatherData data={data} />}
    </div>
  );
}
