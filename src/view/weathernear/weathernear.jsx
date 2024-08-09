import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../weathernear/weathernear.css'; // Đảm bảo đường dẫn này đúng
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Cấu hình dayjs với các plugin
dayjs.extend(weekday);
dayjs.extend(localizedFormat);

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

// Hàm ánh xạ mã thời tiết thành mô tả trạng thái thời tiết
const getWeatherDescription = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return 'Clear sky';
    case 1:
    case 2:
    case 3:
      return 'Partly cloudy';
    case 45:
    case 48:
      return 'Fog';
    case 51:
    case 53:
    case 55:
      return 'Light rain';
    case 56:
    case 57:
      return 'Freezing rain';
    case 61:
    case 63:
      return 'Showers';
    case 65:
      return 'Heavy showers';
    case 66:
    case 67:
      return 'Snow showers';
    case 71:
    case 73:
    case 75:
      return 'Snowfall';
    case 77:
      return 'Snow grains';
    case 80:
    case 81:
    case 82:
      return 'Rain showers';
    case 85:
    case 86:
      return 'Snow showers';
    case 95:
      return 'Thunderstorms';
    case 96:
    case 99:
      return 'Severe thunderstorms';
    default:
      return 'Unknown weather';
  }
};

// Hàm định dạng ngày giờ với tên tháng bằng tiếng Anh
const formatDateWithDay = () => {
  const now = dayjs();
  const dayOfWeek = now.format('dddd'); // Lấy tên ngày trong tuần
  const formattedDate = now.format('DD MMM YYYY'); // MMM để lấy tên tháng bằng tiếng Anh
  return `${dayOfWeek} | ${formattedDate}`;
};

const CallApiWeatherCurrent = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState('21.01223639868195');
  const [longitude, setLongitude] = useState('105.84763884544373');

  // Hàm lấy dữ liệu thời tiết hiện tại
  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.opensearch.vn/v1/weather/forecast/hourly?latitude=${lat}&longitude=${lon}`);
      const data = response.data.data;

      // Cập nhật dữ liệu thời tiết hiện tại
      setCurrentWeather(data.current_weather);
    } catch (err) {
      setError(err);
    }
  };

  // Hàm lấy dữ liệu vị trí
  const fetchLocationData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://geocoder.openmap.dev/v1/reverse?point.lat=${lat}&point.lon=${lon}&boundary.circle.radius=100&size=12`);
      const locationData = response.data.features;

      if (locationData.length > 0) {
        // Tìm đối tượng có khoảng cách nhỏ nhất
        const nearestFeature = locationData.reduce((closest, feature) => {
          return feature.properties.distance < closest.properties.distance ? feature : closest;
        });

        // Lấy giá trị của localadmin
        const localAdmin = nearestFeature.properties.localadmin;
        setLocation(localAdmin ? localAdmin : 'Không tìm thấy thông tin vị trí.');
      } else {
        setLocation('Không tìm thấy thông tin vị trí.');
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchWeatherData(latitude, longitude);
    fetchLocationData(latitude, longitude);
  }, [latitude, longitude]);

  const handleLatitudeChange = (e) => setLatitude(e.target.value);
  const handleLongitudeChange = (e) => setLongitude(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(latitude, longitude);
    fetchLocationData(latitude, longitude);
  };

  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (!currentWeather || !location) return <div>Đang tải dữ liệu... <br/> </div>;

  return (
    <div className='current-weather-container'>
      <img className="current-weather-iconpro" src={getWeatherIcon(currentWeather.weathercode)} alt="Biểu tượng thời tiết hiện tại" />
      <div className='textpro1'>
        <h1 className='pro1'><i className="fa-solid fa-location-dot"> </i> {location}</h1> 
        <h1 className='pro1'>{getWeatherDescription(currentWeather.weathercode)}</h1> {/* Thêm phần mô tả thời tiết */}
<br />
        <h1 className='pro13'>{currentWeather.temperature}°C</h1>
        <h2 className='pro12'>{formatDateWithDay()}</h2>
      </div>
    </div>
  );
};

export default CallApiWeatherCurrent;
