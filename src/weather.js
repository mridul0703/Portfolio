import React, { useState, useEffect } from 'react';

const Weather = ({ city }) => {
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'your_api_key_here'; // Replace with your actual API key

  useEffect(() => {
    const fetchWeather = async () => {
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Current Weather in {city}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Weather: {description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default Weather;
