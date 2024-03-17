"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CityForm from "../components/form";
import Forecast from "./Forecast";
import * as dotenv from "dotenv";
import WeatherData from "../components/weatherData";
import fetchData from "./dataFetch";
import TodayData from "./today";

export default function WeatherApp() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [currentData, setCurrentData] = useState<ApiResponse | null>(null);

  const handleSubmit = async (city: string) => {
    await fetchData(city, setForecastData, setCurrentData); // Call the function to fetch data
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="text-black flex flex-col items-center mx-auto overflow-hidden max-w-2xl w-full">
        <h1>Next.js TypeScript API Example</h1>
        <CityForm onSubmit={handleSubmit} />
        {currentData && <TodayData data={currentData} />}
        {forecastData && <Forecast data={forecastData} />}
      </div>
    </div>
  );
}
