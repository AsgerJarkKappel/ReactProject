"use client";
import React, { useState } from "react";
import * as dotenv from "dotenv";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import CityForm from "./components/form";
import WeatherData from "./components/weatherData";
import Backlog from "./components/backlog";
import TodayData from "./forecast/today";

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
    <div className="w-screen h-screen flex justify-center items-center gap-10 flex-wrap">
      <div className="flex flex-col content-around gap-12 text-black rounded-2xl bg-gradient-to-r from-teal-300 to-yellow-200 p-24">
        <h1 className="font-bold">Next.js TypeScript API Example</h1>
        <CityForm onSubmit={handleCitySubmit} />

        {data && <TodayData data={data} />}
      </div>
      <Backlog />
    </div>
  );
}
