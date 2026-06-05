import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Masukkan nama kota..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button
        className="search-button"
        onClick={handleSearch}
        disabled={loading}
        aria-label="Cari cuaca"
      >
        🔍
      </button>
    </div>
  );
}
