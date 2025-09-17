import logo from "./images/logo.png";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./App.css";

const Navbar = ({
  onInputChange,
  onChange,
  options,
  selectedCity,
  countryCode,
  temperatureUnit,
  onUnitChange,
}) => {
  const [userLocation, setUserLocation] = useState({
    temp: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    // Fetch user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1fb9b7430ade9dc72614f3f70d323ea3`
          )
            .then((response) => response.json())
            .then((data) => {
              setUserLocation({
                temp: Math.floor(data.main.temp - 273.15),
                city: data.name,
                country: data.sys.country,
              });
            })
            .catch((error) => console.error("Error fetching weather:", error));
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "500px",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "center",
      width: "100%",
      color: "black",
    }),
    control: (provided) => ({
      ...provided,
      opacity: 0.89,
      borderRadius: "20px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "blue" : "white",
      color: state.isSelected ? "white" : "black",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="app-title">Weather App</span>
        </div>
        <div className="navbar-center">
          <Select
            value={selectedCity}
            onChange={onChange}
            onInputChange={onInputChange}
            options={options}
            placeholder="Search for a city"
            className="city-select"
            styles={customStyles}
          />
        </div>
        <div className="navbar-right">
          <span className="country-code">{countryCode}</span>
          <select
            value={temperatureUnit}
            onChange={onUnitChange}
            className="temperature-unit"
          >
            <option value="metric">°C</option>
            <option value="imperial">°F</option>
          </select>
        </div>
      </div>
      <div className="user-location-info"
      style={{
        fontSize: "1.3rem",
        color : "white",
      }}>
        <span>
          Current Temprature - {userLocation.temp}°C
        </span>
        <span> {userLocation.city}</span>
        <span>, {userLocation.country}</span>
      </div>
      
    </>
  );
};

export default Navbar;
