import React, { useState } from 'react';
import userJson from "../usersData/users.json";

const UserFilter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    university: "",
    country: "",
    language: ""
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">University:</label>
      <input
        type="text"
        name="university"
        value={filters.university}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded px-3 py-1 mb-2"
      />
      <button onClick={handleApplyFilters} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply Filters</button>
    </div>
  );
}

export default UserFilter;
