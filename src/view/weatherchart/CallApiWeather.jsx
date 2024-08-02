import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../weatherchart/chart.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CallApiWeatherHourly = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState('21.01223639868195');
  const [longitude, setLongitude] = useState('105.84763884544373');
  const [location, setLocation] = useState("Hà Nội");
  const [nowTime, setNowTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.opensearch.vn/v1/weather/forecast/hourly?latitude=${lat}&longitude=${lon}`);
      const data = response.data.data;
      const now = new Date();
      const hours = [];

      // Lọc dữ liệu theo giờ bắt đầu từ bây giờ và 6 giờ tiếp theo mỗi 2 giờ
      for (let i = 0; i < 7; i++) {
        const targetTime = new Date(now.getTime() + i * 2 * 60 * 60 * 1000);
        const formattedTime = targetTime.toISOString().substring(0, 13) + ':00';
        const dataPoint = data.values.find(v => v.time.startsWith(formattedTime));
        if (dataPoint) hours.push(dataPoint);
      }

      setWeatherData(hours);
      setLocation(`Vĩ độ: ${lat}, Kinh độ: ${lon}`);
      setNowTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
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

  // Cập nhật dữ liệu cho biểu đồ
  const labels = weatherData.map(hourly => new Date(hourly.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const temperatures = weatherData.map(hourly => hourly.temperature.temperature_2m);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Nhiệt độ theo giờ',
      data: temperatures,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      pointRadius: 0 // Ẩn các điểm dữ liệu
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false // Ẩn thanh đổi (legend)
      },
      tooltip: {
        callbacks: {
          label: (context) => `Nhiệt độ: ${context.raw}°C` // Tùy chỉnh nội dung của tooltip
        }
      }
    },
    elements: {
      point: {
        radius: 0 // Ẩn các điểm dữ liệu
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Giờ'
        },
        ticks: {
          callback: (value) => value // Hiển thị giờ trên trục X
        }
      },
      y: {
        title: {
          display: true,
          text: 'Nhiệt độ (°C)'
        }
      }
    }
  };

  return (
    <div className='chart'>
      <h1>Dự báo thời tiết theo giờ</h1>
      <form onSubmit={handleSubmit} className="coordinate-form">
        <label>
          Vĩ độ:
          <input type="text" value={latitude} onChange={handleLatitudeChange} />
        </label>
        <label>
          Kinh độ:
          <input type="text" value={longitude} onChange={handleLongitudeChange} />
        </label>
        <button type="submit">Xem thời tiết</button>
      </form>
      <Line data={data} options={options} />
      <div className="chart-info">
        <p><strong>Địa điểm:</strong> {location}</p>
        <p><strong>Ngày:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>Bây giờ là:</strong> {nowTime}</p>
      </div>
    </div>
  );
};

export default CallApiWeatherHourly;
