import React, { useEffect, useState } from 'react';
import Search from './Search';
import './Navbar.css'; // Import CSS file
import logo from '../images/logo.png';

const Navbar = ({ onCitySelect, initialWeatherData, onTempUnitChange }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [tempUnit, setTempUnit] = useState('celsius'); // State to hold temperature unit

  useEffect(() => {
    if (initialWeatherData) {
      setSelectedCity({ name: initialWeatherData.name, country: initialWeatherData.sys.country });
    }
  }, [initialWeatherData]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    onCitySelect(city); // Pass city data (including coordinates) to the parent component
  };

  const handleTempUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setTempUnit(selectedUnit);
    onTempUnitChange(selectedUnit); // Pass selected unit to parent component
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="app-name">Weather App</span>
      </div>
      <div className="navbar-mid">
        <Search onCitySelect={handleCitySelect} />
      </div>
      <div className="navbar-right">
        <span className="country-code">
          {selectedCity ? selectedCity.country : 'NN'}
        </span>
        <select className="temp-unit-select" value={tempUnit} onChange={handleTempUnitChange}>
          <option value="celsius">C</option>
          <option value="fahrenheit">F</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
