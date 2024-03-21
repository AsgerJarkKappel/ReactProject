import {
  formatdt_text_dateTimestampToDate,
  formatUnixTimestampToDate,
  importantDateCheckMethod,
  isToday,
  setForecastIconSource,
  setWeatherIconSource,
  unixTimestampToHourStamp,
} from "@/app/utils/utils";
import React, { useEffect } from "react";
import DateLabel from "./DateLabel";
import TimeLabel from "./TimeLabel";

interface WeatherForecastProps {
  data: ForecastData;
}

const Forecast: React.FC<WeatherForecastProps> = ({ data }) => {
  const groupedByDate = data.list.reduce((acc, entry) => {
    const dateString = importantDateCheckMethod(entry.dt, data.city.timezone);
    if (!acc[dateString]) {
      acc[dateString] = [];
    }
    acc[dateString].push(entry);
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
          className="flex overflow-x overflow-y-hidden snap-x whitespace-nowrap rounded-xl w-5/6 gap-2 bg-blue-300 items-center p-2 pb-0 border-8 border-solid border-blue-300"
          style={{
            boxShadow:
              "-0px -0px 5px rgba(96, 165, 250, 1), 0px 0px 5px rgba(147, 197, 253, 1)",
          }}
        >
          <DateLabel date={date} />
          {entries.map((entry) => (
            <div
              key={entry.dt_txt}
              className="flex-shrink-1 h-36 border-2 bg-white border-purple-200 rounded-2xl text-center p-2"
            >
              <TimeLabel dt={entry.dt} offset={data.city.timezone} />
              <p className="">{entry.main.temp.toFixed(1)} °C</p>
              <img
                style={{ height: "50px", width: "50px" }}
                id={`forecastIcon_${date}_${entry.dt_txt}`}
                src=""
                alt="Weather Icon"
              />
              <div className="text-xs">
                {entry.rain ? <p>{entry.rain["3h"]} mm</p> : <p>Dry</p>}
              </div>
              {/* Additional forecast details... */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Forecast;
