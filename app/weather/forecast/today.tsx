import {
  formatUnixTimestampToDate,
  setWeatherIconSource,
} from "@/app/utils/utils";
import React from "react";

interface CityDisplayProps {
  data: ApiResponse;
}

const TodayData: React.FC<CityDisplayProps> = ({ data }) => {
  const datestring = formatUnixTimestampToDate(data.dt);
  setWeatherIconSource(data.weather[0].icon);
  return (
    <div
      id="currnetContainer"
      className="w-5/6 h-96 flex flex-col m-4 bg-blue-400 rounded-xl text-white text-center mx-auto justify-center gap-6"
    >
      <h1 className="font-bold text-2xl text-center">{data.name}</h1>
      <h2 className="text-6xl">{data.main.temp} °C</h2>
      <div className="mx-auto">
        <img id="weatherIcon" src="" alt="test" />
      </div>
      <span>{data.weather[0].main}</span>
      <span>{datestring}</span>
    </div>
  );
};

export default TodayData;
