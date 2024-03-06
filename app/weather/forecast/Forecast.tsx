import React from "react";

interface WeatherForecastProps {
  data: ForecastData;
}

const Forecast: React.FC<WeatherForecastProps> = ({ data }) => {
  const groupedByDate = data.list.reduce((acc, entry) => {
    const date = entry.dt_txt.split(" ")[0]; // Extracting date part from dt_txt
    console.log(date);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(entry);
    return acc;
  }, {} as Record<string, ForecastEntry[]>);

  return (
    <div className="flex flex-col flex-wrap items-center gap-10">
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
              <p>Date/Time: {entry.dt_txt}</p>
              <p>Temperature: {entry.main.temp} °C</p>
              <p>Feels Like: {entry.main.feels_like} °C</p>
              <p>Pressure: {entry.main.pressure} hPa</p>
              <p>Humidity: {entry.main.humidity}%</p>
              <p>Clouds: {entry.clouds.all}%</p>
              <p>Wind Speed: {entry.wind.speed} m/s</p>
              <p>Wind Direction: {entry.wind.deg}°</p>
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
