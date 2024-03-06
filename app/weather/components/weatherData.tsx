import React from "react";

interface CityDisplayProps {
  data: {
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    name: string;
  };
}

const WeatherData: React.FC<CityDisplayProps> = ({ data }) => {
  return (
    <div className="flex flex-col bg-slate-200/50 rounded-xl p-10">
      <h2 className="font-bold">Weather Date for {data.name}:</h2>
      <span>Temperature: {data.main.temp} °C</span>
      <span>Feels Like: {data.main.feels_like} °C</span>
      <span>Min Temperature: {data.main.temp_min} °C</span>
      <span>Max Temperature: {data.main.temp_max} °C</span>
      <span>Pressure: {data.main.pressure} hPa</span>
      <span>Humidity: {data.main.humidity}%</span>
    </div>
  );
};

export default WeatherData;
