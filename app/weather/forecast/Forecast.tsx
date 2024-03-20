import {
  dateToHourStamp,
  formatdt_text_dateTimestampToDate,
  isToday,
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
    //console.log(date);
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
    <div className="flex flex-col flex-wrap items-center gap-2 w-full">
      {Object.entries(groupedByDate).map(([date, entries]) => (
        <div
          key={date}
          className="flex overflow-x-auto snap-x whitespace-nowrap rounded-xl w-5/6 gap-2 bg-blue-300 items-center p-2 pb-0 border-8 border-solid border-blue-300"
        >
          <h3 className="text-white font-bold">
            {isToday(date) ? "Today" : date}
          </h3>
          {entries.map((entry) => (
            <div
              key={entry.dt_txt}
              className="flex-shrink-1 h-36 border-2 bg-white border-purple-200 rounded-2xl text-center p-2"
            >
              <p>{dateToHourStamp(entry.dt_txt)}</p>
              <p className="">{entry.main.temp} °C</p>
              <img
                id={`forecastIcon_${date}_${entry.dt_txt}`}
                src=""
                alt="Weather Icon"
              />
              {entry.rain && <p>{entry.rain["3h"]} mm</p>}
              {/* Additional forecast details... */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forecast;
