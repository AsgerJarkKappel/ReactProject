"use client";
import React, { useEffect, useState } from "react";
import CityForm from "../components/form";
import Forecast from "./Forecast";
import * as dotenv from "dotenv";
import fetchData from "./dataFetch";
import TodayData from "./today";

export default function WeatherApp() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [currentData, setCurrentData] = useState<ApiResponse | null>(null);

  const handleSubmit = async (city: string) => {
    await fetchData(city, setForecastData, setCurrentData); // Call the function to fetch data
  };

  return (
    <div className="w-full overflow-hidden p-6">
      <div className="text-black flex flex-col items-center mx-auto overflow-hidden max-w-2xl w-full bg-white rounded-2xl p-4">
        <h1>Five day weather forecast App</h1>
        <CityForm onSubmit={handleSubmit} />
        {currentData && <TodayData data={currentData} />}
        {forecastData && <Forecast data={forecastData} />}
      </div>
    </div>
  );
}
