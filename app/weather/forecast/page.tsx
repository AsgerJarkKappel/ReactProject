"use client";
import React, { useState } from "react";
import axios from "axios";
import CityForm from "../components/form";
import Forecast from "./Forecast";
import * as dotenv from "dotenv";
interface ForecastData {
  list: ForecastEntry[];
}

export default function WeatherApp() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  const handleCitySubmit = async (city: string) => {
    try {
      const response = await axios.get<ForecastData>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_FORECAST_KEY}`
      );
      setForecastData(response.data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching forecast data:", error);
    }
  };

  return (
    <div className="text-black ">
      <h1>Next.js TypeScript API Example</h1>
      <CityForm onSubmit={handleCitySubmit} />

      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
}
