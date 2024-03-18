import React, { useState } from "react";

interface CityFormProps {
  onSubmit: (city: string) => void;
}

const CityForm: React.FC<CityFormProps> = ({ onSubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <div className="bg-blue-400 mx-auto w-5/6 rounded-2xl text-white text-center p-2 m-4">
      <form onSubmit={handleSubmit} className="">
        <label>
          <input
            className="m-2 max-size-full text-black rounded-md pl-2"
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button
          className="p-2 bg-blue-300 rounded-2xl hover:bg-blue-200/35 hover:text-black "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default CityForm;
