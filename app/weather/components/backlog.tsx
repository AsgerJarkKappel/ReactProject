import React from "react";

const Backlog = () => {
  return (
    <div className="bg-white/75 text-black p-10 rounded-xl w-80">
      <h1 className="font-bold">Backlog</h1>
      <span>
        This weather app is currently utilizing openweathermap.org's free
        weather data API, that only returns the current weather data from the
        specified city. <br />
        The application will soon have additional features such as autocomplete
        search (City, Country), and a geolocation button for faster search.
        Lastly, the forecast API will be utilized to provide a 5-day forecast.
        <br />
        <br />
        The UI will be improved to make it visually appealing and improve UX.
      </span>
    </div>
  );
};

export default Backlog;
