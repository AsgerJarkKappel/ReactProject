import React, { useState } from "react";

interface GeoLocationProps {
  onSubmit: (latitude: number, longitude: number) => void;
}

const GeoLocation: React.FC<{
  onSubmit: (latitude: number, longitude: number) => void;
}> = ({ onSubmit }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onSubmit(latitude, longitude);
        },
        (error) => {
          showError(error);
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const showError = (error: GeolocationPositionError) => {
    let errorMessage = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
      default:
        errorMessage = "An error occurred while getting user location.";
        break;
    }
    setErrorMessage(errorMessage);
  };
  return (
    <div>
      <button onClick={getLocation}>GeoLocation</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default GeoLocation;
