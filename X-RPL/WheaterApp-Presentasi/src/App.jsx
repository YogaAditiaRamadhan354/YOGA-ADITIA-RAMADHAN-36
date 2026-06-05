import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "a1e31b59558f9a9fbe6088d4ad5c356f";

  const getWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        setError("Kota tidak ditemukan. Coba nama lain.");
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch {
      setError("Gagal mengambil data. Periksa koneksimu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">🌤 WeatherApp</h1>
        <p className="app-subtitle">Cari cuaca kota mana saja</p>
      </div>

      <SearchBar onSearch={getWeather} loading={loading} />

      {error && (
        <div className="error-message">
          <span>⚠️</span> {error}
        </div>
      )}

      {loading && (
        <div className="loading-container">
          <div className="spinner" />
          <span>Mengambil data cuaca...</span>
        </div>
      )}

      {weather && !loading && <WeatherCard data={weather} />}
    </div>
  );
}
