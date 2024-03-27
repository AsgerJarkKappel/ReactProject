import React, { useState } from "react";
import GeoLocation from "./GeoLocation";

interface CityFormProps {
  onSubmit: (city: string) => void;
}

const CityForm: React.FC<CityFormProps> = ({ onSubmit }) => {
  const [city, setCity] = useState("");
  const [manualCityInput, setManualCityInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualCityInput.trim() !== "") {
      // Submit manually inputted city
      setCity(manualCityInput);
    } else {
      alert("Please enter a city name.");
    }
  };

  /**
   *
   * @param latitude fed as props by the geolocation component when that button is pressed
   * @param longitude
   */
  const handleLocationSubmit = async (latitude: number, longitude: number) => {
    try {
      const cityData = await fetchCityFromCoordinates(latitude, longitude);
      const cityName = cityData[0]?.name; // Get the name property from the first object in the array
      console.log(cityName);
      if (cityName) {
        setCity(cityName);
        onSubmit(cityName); // Trigger form submission with the city obtained from geolocation
      } else {
        throw new Error("City name not found in the API response.");
      }
    } catch (error) {
      console.error("Error fetching city name:", error);
    }
  };

  const fetchCityFromCoordinates = async (
    latitude: number,
    longitude: number
  ): Promise<any[]> => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=7354412952e5537e687ecd7c89e1f533`
    );
    const data = await response.json();
    return data;
  };

  return (
    <div className="bg-blue-400 mx-auto w-5/6 rounded-2xl text-white text-center p-2 m-4">
      <form onSubmit={handleSubmit} className="">
        <label>
          <input
            className="m-2 max-size-full text-black rounded-md pl-2"
            type="text"
            placeholder="Enter City Name"
            value={manualCityInput}
            onChange={(e) => setManualCityInput(e.target.value)}
          />
        </label>
        <button
          className="p-2 bg-blue-300 rounded-2xl hover:bg-blue-200/35 hover:text-black "
          type="submit"
        >
          Search
        </button>
      </form>

      <GeoLocation onSubmit={handleLocationSubmit} />
    </div>
  );
};

export default CityForm;
