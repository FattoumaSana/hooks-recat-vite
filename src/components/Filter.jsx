import React from "react";
import "../assets/styles/Filter.css";

const Filter = ({ setFilterTitle }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="🔍 Rechercher un film..."
        onChange={(e) => setFilterTitle(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
