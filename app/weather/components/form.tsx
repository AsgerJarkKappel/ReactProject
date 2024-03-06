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
    <form onSubmit={handleSubmit}>
      <label>
        Enter City:
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default CityForm;
