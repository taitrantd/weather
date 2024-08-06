import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SunFilled } from '@ant-design/icons';


const getWeatherIcon = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return '../image/weather/code-0.svg';
    case 1:
    case 2:
    case 3:
      return '../image/weather/code-1,2,3.svg';
    case 45:
    case 48:
      return '../image/weather/code-45,48.svg';
    case 51:
    case 53:
    case 55:
      return '../image/weather/code-51,53,55.svg';
    case 56:
    case 57:
      return '../image/weather/code-56,57.svg';
    case 61:
    case 63:
      return '../image/weather/code-61,63.svg';
    case 65:
      return '../image/weather/code-65.svg';
    case 66:
    case 67:
      return '../image/weather/code-66,67.svg';
    case 71:
    case 73:
    case 75:
      return '../image/weather/code-71,73,75.svg';
    case 77:
      return '../image/weather/code-77.svg';
    case 80:
    case 81:
    case 82:
      return '../image/weather/code-80,81,82.svg';
    case 85:
    case 86:
      return '../image/weather/code-85,86.svg';
    case 95:
      return '../image/weather/code-95.svg';
    case 96:
    case 99:
      return '../image/weather/code-96,99.svg';
    default:
      return '../image/weather/code-0.svg';
  }
};

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.opensearch.vn/v1/weather/forecast/daily?latitude=21.01223639868195&longitude=105.84763884544373'
        );
        setWeatherData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (!weatherData) return <div>Không có dữ liệu</div>;

  const todayWeather = weatherData.data.values[0];
  const weatherIconSrc = getWeatherIcon(todayWeather.weatherCode);

  return (
    <div className="weather-container">
      <div className="current-weather">
   
        <img src={weatherIconSrc} alt="Weather icon" />
        <p>Nhiệt độ: {todayWeather.apparent_temperature_2m.min}°C</p>
      </div>
    </div>
  );
};

const NearbyPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          'https://geocoder.openmap.dev/v1/reverse', {
            params: {
              'point.lat': 21.0244716,
              'point.lon': 105.8369039,
              'boundary.circle.radius': 1,
              size: 1
            }
          }
        );
        setPlaces(response.data.features);
      } catch (err) {
        setError(err);
      }
    };

    fetchPlaces();
  }, []);

  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (places.length === 0) return <div>Đang tải dữ liệu...</div>;

  return (
    <div>
   
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <h3>{place.properties.name}</h3>
            
            {/* <p>{place.properties.label}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>  
      <NearbyPlaces />
      <WeatherForecast />
    
    </div>
  );
};

export default App;
