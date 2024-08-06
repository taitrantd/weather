import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../weatherchart/chart.css'; // Đường dẫn đến file CSS
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

const getWeatherIcon = (weatherCode) => {
  switch (weatherCode) {
    // Các mã thời tiết khác
    default:
      return '../image/weather/code-0.svg';
  }
};

const CallApiWeatherHourly = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState('21.01223639868195');
  const [longitude, setLongitude] = useState('105.84763884544373');
  const [location, setLocation] = useState("Hà Nội");
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.opensearch.vn/v1/weather/forecast/hourly?latitude=${lat}&longitude=${lon}`);
      const data = response.data.data;
      const now = new Date();
      const hours = [];

      for (let i = 0; i < 7; i++) {
        const targetTime = new Date(now.getTime() + i * 2 * 60 * 60 * 1000);
        targetTime.setMinutes(0, 0, 0); // Làm tròn đến giờ gần nhất
        const formattedTime = targetTime.toISOString().substring(0, 13) + ':00';
        const dataPoint = data.values.find(v => v.time.startsWith(formattedTime));
        if (dataPoint) hours.push(dataPoint);
      }

      setWeatherData(hours);
      setLocation(`Vĩ độ: ${lat}, Kinh độ: ${lon}`);
      setNowTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentWeather(data.current_weather); // Lưu dữ liệu current_weather
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  const handleLatitudeChange = (e) => setLatitude(e.target.value);
  const handleLongitudeChange = (e) => setLongitude(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(latitude, longitude);
  };

  if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;
  if (!weatherData) return <div>Đang tải dữ liệu...</div>;

  const labels = weatherData.map((hourly, index) => {
    const now = new Date();
    const targetTime = new Date(now.getTime() + index * 2 * 60 * 60 * 1000);
    targetTime.setMinutes(0, 0, 0); // Làm tròn đến giờ gần nhất
    return targetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  const temperatures = weatherData.map(hourly => hourly.temperature.temperature_2m);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Nhiệt độ (°C)',
      data: temperatures,
      borderColor: '#FFFFFF',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0
    }]
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 20
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}°C`
        }
      },
      datalabels: {
        color: '#FFFFFF',
        align: 'top',
      }
    },
    scales: {
      x: {display: false ,
        grid: { display: false },
        ticks: { color: '#FFFFFF' }
      },
      y: {
        display: false ,
        grid: { display: false },
        ticks: { color: '#FFFFFF' }
      }
    }
  };

  return (
    <div className='chart'>
      <h1>Dự báo 24 giờ</h1>
      <div className="line-chart">
        <Line data={data} options={options} />
      </div>
      <div className="forecast-container">
        {weatherData.map((hourly, index) => (
          <div key={index} className="forecast-item">
            <img className="forecast-icon" src={getWeatherIcon(hourly.weatherCode)} alt="Weather icon" />
            <p className='temp1'>{hourly.wind.windspeed.windspeed_80m}Km/h </p>
            <p className='temp1'>{labels[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallApiWeatherHourly;
