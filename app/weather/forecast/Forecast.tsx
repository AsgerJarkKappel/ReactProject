import {
  dateToHourStamp,
  formatdt_text_dateTimestampToDate,
  setForecastIconSource,
  setWeatherIconSource,
} from "@/app/utils/utils";
import React, { useEffect } from "react";

interface WeatherForecastProps {
  data: ForecastData;
}

const Forecast: React.FC<WeatherForecastProps> = ({ data }) => {
  const groupedByDate = data.list.reduce((acc, entry) => {
    const date = entry.dt_txt.split(" ")[0]; // Extracting date part from dt_txt
    const datestring = formatdt_text_dateTimestampToDate(date);
    console.log(date);
    if (!acc[datestring]) {
      acc[datestring] = [];
    }
    acc[datestring].push(entry);
    return acc;
  }, {} as Record<string, ForecastEntry[]>);

  useEffect(() => {
    Object.entries(groupedByDate).forEach(([date, entries]) => {
      entries.forEach((entry) => {
        setForecastIconSource(date, entry.dt_txt, entry.weather[0].icon);
      });
    });
  }, [groupedByDate]);

  return (
    <div className="flex flex-col flex-wrap items-center gap-10 w-full">
      <h2>Weather Forecast:</h2>
      {Object.entries(groupedByDate).map(([date, entries]) => (
        <div
          key={date}
          className="flex overflow-x-auto snap-x whitespace-nowrap rounded w-5/6 gap-8 bg-gray-300"
        >
          <h3>{date}</h3>
          {entries.map((entry) => (
            <div
              key={entry.dt_txt}
              className="flex-shrink-0 border-2 bg-white border-purple-200"
            >
              <p>Date/Time: {dateToHourStamp(entry.dt_txt)}</p>
              <p>Temperature: {entry.main.temp} °C</p>
              <img
                id={`forecastIcon_${date}_${entry.dt_txt}`}
                src=""
                alt="Weather Icon"
              />
              {entry.rain && (
                <p>Rain in the Last 3 Hours: {entry.rain["3h"]} mm</p>
              )}
              {/* Additional forecast details... */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forecast;
