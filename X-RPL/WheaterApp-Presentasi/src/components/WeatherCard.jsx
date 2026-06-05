export default function WeatherCard({ data }) {
  const icon = data.weather[0].icon;
  const desc = data.weather[0].description;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          {data.name}, {data.sys.country}
        </h2>
        <p className="weather-desc">{desc}</p>
      </div>

      <div className="weather-main">
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={desc}
        />
        <div className="temperature-wrapper">
          <span className="temperature">{temp}</span>
          <span className="temp-unit">°C</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <div className="detail-info">
            <span className="detail-label">Kelembaban</span>
            <span className="detail-value">{data.main.humidity}%</span>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <div className="detail-info">
            <span className="detail-label">Terasa seperti</span>
            <span className="detail-value">{feelsLike}°C</span>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <div className="detail-info">
            <span className="detail-label">Angin</span>
            <span className="detail-value">{data.wind.speed} m/s</span>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">👁️</span>
          <div className="detail-info">
            <span className="detail-label">Visibilitas</span>
            <span className="detail-value">
              {data.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
