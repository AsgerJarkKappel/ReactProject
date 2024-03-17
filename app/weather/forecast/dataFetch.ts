import axios from "axios";

//Responsible for fetching data only and indirecetly calling the setter functions.
const fetchData = async (
  city: string,
  setForecastData: (data: ForecastData) => void,
  setCurrentData: (data: ApiResponse) => void
) => {
  try {
    const responseForecast = await axios.get<ForecastData>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_FORECAST_KEY}`
    );
    const responseCurrent = await axios.get<ApiResponse>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );

    setForecastData(responseForecast.data);
    setCurrentData(responseCurrent.data); //.data is to extract the data we want from response
    console.log(responseCurrent);
  } catch (error) {
    // Handle errors
    console.error("Error fetching forecast data:", error);
  }
};

export default fetchData;
