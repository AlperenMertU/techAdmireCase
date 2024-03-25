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

  const dispatch = useDispatch();

  useEffect(() => {
    const countries = userData.map(user => user.ülke);
    const uniqueCountries = [...new Set(countries)];
    setUniqueCountries(uniqueCountries);

    const durations = userData.map(user => user.süre);
    const uniqueDurations = [...new Set(durations)];
    setUniqueDurations(uniqueDurations);

    const universities = userData.map(user => user.univercity);
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
      user.univercity.toLowerCase().includes(university.toLowerCase()) &&
      user.dil.toLowerCase().includes(language.toLowerCase()) &&
      user.ülke.toLowerCase().includes(country.toLowerCase()) &&
      user.süre.toLowerCase().includes(duration.toLowerCase())
    );

    if (minCost !== '' && !isNaN(parseFloat(minCost))) {
      filteredUsers = filteredUsers.filter(user =>
        parseFloat(user.maliyet.replace(' TL', '').replace(',', '')) >= parseFloat(minCost)
      );
    }

    if (maxCost !== '' && !isNaN(parseFloat(maxCost))) {
      filteredUsers = filteredUsers.filter(user =>
        parseFloat(user.maliyet.replace(' TL', '').replace(',', '')) <= parseFloat(maxCost)
      );
    }

    dispatch(setFilteredUsers(filteredUsers));
  };

  return (
    <div>

    
    <select value={university} onChange={handleUniversityChange}>
    <option value="">Tüm Üniversiteler</option>
    {uniqueUniversities.map((university, index) => (
      <option key={index} value={university}>{university}</option>
    ))}
  </select>

      <select value={language} onChange={handleLanguageChange}>
        <option value="">Tüm Diller</option>
        <option value="İngilizce">İngilizce</option>
        <option value="Fransızca">Fransızca</option>
        <option value="Türkçe">Türkçe</option>
      </select>

      <select value={country} onChange={handleCountryChange}>
        <option value="">Tüm Ülkeler</option>
        {uniqueCountries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>

      <select value={duration} onChange={handleDurationChange}>
        <option value="">Tüm Süreler</option>
        {uniqueDurations.map((duration, index) => (
          <option key={index} value={duration}>{duration} Yıl</option>
        ))}
      </select>

      <input type="number" placeholder="Min Maliyet" value={minCost} onChange={handleMinCostChange} />
      <input type="number" placeholder="Max Maliyet" value={maxCost} onChange={handleMaxCostChange} />

      <button onClick={handleFilterClick}>Filtrele</button>
    </div>
  );
}

export default Filtering;
