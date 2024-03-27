import {
  formatUnixTimestampToDate,
  setWeatherIconSource,
} from "@/app/utils/utils";
import React, { useEffect } from "react";

interface CityDisplayProps {
  data: ApiResponse;
}

const TodayData: React.FC<CityDisplayProps> = ({ data }) => {
  const timezone = data.timezone;
  const datestring = formatUnixTimestampToDate(data.dt, timezone);
  useEffect(() => {
    setWeatherIconSource(data.weather[0].icon);
  }, [data.weather[0].icon]);
  return (
    <div
      id="currnetContainer"
      className="w-5/6 p-4 flex flex-wrap flex-col m-4 bg-blue-400 rounded-xl text-white text-center mx-auto justify-center shadow-lg sm:flex-row h-2/6 items-center gap-6 sm:gap-y-0"
      style={{
        boxShadow:
          "-0px -0px 20px rgba(96, 165, 250, 1), 0px 0px 20px rgba(96, 165, 250, 1)",
      }}
    >
      <span>
        <h1 className="font-bold text-2xl text-center">{data.name}</h1>
        <span>{datestring}</span>
      </span>
      <h2 className="text-6xl">{data.main.temp.toFixed(1)} °C</h2>
      <div>
        <img id="weatherIcon" src="" alt="test" />
      </div>
      <span>{data.weather[0].description}</span>
    </div>
  );
};

export default TodayData;
