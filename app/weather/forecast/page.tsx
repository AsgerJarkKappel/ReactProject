"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CityForm from "../components/form";
import Forecast from "./Forecast";
import * as dotenv from "dotenv";
import WeatherData from "../components/weatherData";
import fetchData from "./dataFetch";
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

export default function WeatherApp() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [currentData, setCurrentData] = useState<ApiResponse | null>(null);

  const handleSubmit = async (city: string) => {
    await fetchData(city, setForecastData, setCurrentData); // Call the function to fetch data
  };

  return (
    <div className="text-black ">
      <h1>Next.js TypeScript API Example</h1>
      <CityForm onSubmit={handleSubmit} />
      {currentData && <WeatherData data={currentData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
}
