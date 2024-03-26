import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userData from "../usersData/users.json";
import { setFilteredUsers } from '../components/DataSlice';

const Filtering = () => {
  const [university, setUniversity] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState('');
  const [minCost, setMinCost] = useState('');
  const [maxCost, setMaxCost] = useState('');
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [uniqueDurations, setUniqueDurations] = useState([]);
  const [uniqueUniversities, setUniqueUniversities] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const countries = userData.map(user => user.country);
    const uniqueCountries = [...new Set(countries)];
    setUniqueCountries(uniqueCountries);

    const durations = userData.map(user => user.time);
    const uniqueDurations = [...new Set(durations)];
    setUniqueDurations(uniqueDurations);

    const universities = userData.map(user => user.university);
    const uniqueUniversities = [...new Set(universities)];
    setUniqueUniversities(uniqueUniversities);
  }, []);

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleMinCostChange = (e) => {
    setMinCost(e.target.value);
  };

  const handleMaxCostChange = (e) => {
    setMaxCost(e.target.value);
  };

  const handleFilterClick = () => {
    let filteredUsers = userData.filter(user =>
      user.university.toLowerCase().includes(university.toLowerCase()) &&
      user.language.toLowerCase().includes(language.toLowerCase()) &&
      user.country.toLowerCase().includes(country.toLowerCase()) &&
      user.time.toLowerCase().includes(duration.toLowerCase())
    );

    if (minCost !== '' && !isNaN(parseFloat(minCost))) {
      filteredUsers = filteredUsers.filter(user =>
        parseFloat(user.price.replace(' TL', '').replace(',', '')) >= parseFloat(minCost)
      );
    }

    if (maxCost !== '' && !isNaN(parseFloat(maxCost))) {
      filteredUsers = filteredUsers.filter(user =>
        parseFloat(user.price.replace(' TL', '').replace(',', '')) <= parseFloat(maxCost)
      );
    }
    if (sortBy === 'minCost') {
      filteredUsers.sort((a, b) => parseFloat(a.price.replace(' TL', '').replace(',', '')) - parseFloat(b.price.replace(' TL', '').replace(',', '')));
    } else if (sortBy === 'maxCost') {
      filteredUsers.sort((a, b) => parseFloat(b.price.replace(' TL', '').replace(',', '')) - parseFloat(a.price.replace(' TL', '').replace(',', '')));
    } else if (sortBy === 'deadline') {
      filteredUsers.sort((a, b) => new Date(a.başvuruSonTarihi) - new Date(b.başvuruSonTarihi));
    }


    dispatch(setFilteredUsers(filteredUsers));
  };

  return (
    <div className='flex space-x-3 items-center'>



      <select value={university} onChange={handleUniversityChange} class="block py-1  w-2/6 text-sm text-gray bg-transparent border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All Universities</option>
        {uniqueUniversities.map((university, index) => (
          <option key={index} value={university}>{university}</option>
        ))}
      </select>


      <select value={language} onChange={handleLanguageChange} id="underline_select" class="block py-1 px-0 w-2/6  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All languages</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Turkish">Turkish</option>
      </select>

      <select value={country} onChange={handleCountryChange} id="underline_select" class="block py-1 px-0 w-2/6 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All Countries</option>
        {uniqueCountries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>


      <select value={duration} onChange={handleDurationChange} id="underline_select" class="block py-1 px-0 w-2/6  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All Time</option>
        {uniqueDurations.map((duration, index) => (
          <option key={index} value={duration}>{duration} Yıl</option>
        ))}
      </select>



      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} id="underline_select" class="block py-1 px-0 w-2/6  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">Advanced Sorting</option>
        <option value="minCost">Lowest to highest cost</option>
        <option value="maxCost">Highest to lowest cost</option>
        <option value="deadline">Application Deadline</option>
      </select>



      <input type="number" className="w-3/12 outline-none" placeholder="Min price" value={minCost} onChange={handleMinCostChange} />
      <input type="number" className="w-3/12 outline-none align-baseline justify-center text-center align-baseline border-r-2 border-gray-300 pr-2" placeholder="Max price" value={maxCost} onChange={handleMaxCostChange} />
      <i type="button" onClick={handleFilterClick} className="fa-solid fa-filter text-2xl justify-center text-center align-baseline border-gray-300 pl-2 cursor-pointer "></i>

      </div>
  );
}

export default Filtering;
