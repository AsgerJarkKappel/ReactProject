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
  };
}

const WeatherData: React.FC<CityDisplayProps> = ({ data }) => {
  return (
    <div>
      <h2>City Data:</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Feels Like: {data.main.feels_like} °C</p>
      <p>Min Temperature: {data.main.temp_min} °C</p>
      <p>Max Temperature: {data.main.temp_max} °C</p>
      <p>Pressure: {data.main.pressure} hPa</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherData;
