import React, { useState } from "react";
import "./search.css";
const SearchLocate = ({ setQuery }) => {
  const [fastSearch, setFastSearch] = useState(true);

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const cities = [
    {
      id: 1,
      title: "Москва",
    },
    {
      id: 2,
      title: "Санкт-Петербург",
    },
    {
      id: 3,
      title: "Тверь",
    },
    {
      id: 4,
      title: "Казань",
    },
    {
      id: 5,
      title: "Сочи",
    },
    {
      id: 6,
      title: "Владивосток",
    },
    {
      id: 7,
      title: "Анапа",
    },
    {
      id: 8,
      title: "Екатеринбург",
    },
    {
      id: 9,
      title: "Конаково",
    },
  ];

  return (
    <div className="searchLocate">
      <div>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="searchLocate_text"
          type="text"
          placeholder="Искать здесь..."
        />

        <svg
          className="searchLocate_btn"
          onClick={handleSearchClick}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="m19.575 21.525-6.4-6.375q-.75.525-1.712.85-.963.325-2.088.325-2.85 0-4.837-1.988Q2.55 12.35 2.55 9.5q0-2.85 1.988-4.838 1.987-1.987 4.837-1.987 2.875 0 4.85 1.987Q16.2 6.65 16.2 9.5q0 1.125-.313 2.075-.312.95-.862 1.675l6.425 6.425Zm-10.2-7.85q1.75 0 2.963-1.213Q13.55 11.25 13.55 9.5q0-1.75-1.212-2.963-1.213-1.212-2.963-1.212-1.725 0-2.95 1.212Q5.2 7.75 5.2 9.5t1.225 2.962q1.225 1.213 2.95 1.213Z" />
        </svg>

        <svg
          className={
            fastSearch ? "buttons versionMB active" : "buttons versionPC"
          }
          onClick={() => setFastSearch(true)}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path d="M2.225 18.525v-2.65h13.65v2.65ZM19.9 17.45 14.45 12l5.45-5.45 1.875 1.85-3.6 3.6 3.6 3.6ZM2.225 13.325v-2.65h10.65v2.65Zm0-5.2v-2.65h13.65v2.65Z" />
        </svg>
      </div>
      <nav className="searchLocate_btn versionPC">
        {cities.map((cities) => (
          <button key={cities.id} onClick={() => setQuery({ q: cities.title })}>
            {cities.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SearchLocate;
