import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userData from "../usersData/users.json";
import { setFilteredUsers , setNoData} from '../components/DataSlice';

const Filtering = () => {
  const [university, setUniversity] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [minCost, setMinCost] = useState('');
  const [maxCost, setMaxCost] = useState('');
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [uniqueDurations, setUniqueDurations] = useState([]);
  const [uniqueUniversities, setUniqueUniversities] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [noResults, setNoResults] = useState(false); 

  console.log(noResults);

  const dispatch = useDispatch();

    //this is  list the option elements in select, from a to z or from smallest to largest. and checks to data

  useEffect(() => {
    const countries = userData.map(user => user.country);
    const uniqueCountries = [...new Set(countries)];
    setUniqueCountries(uniqueCountries);

    const durations = userData.map(user => user.year);
    const uniqueDurations = [...new Set(durations)];
    setUniqueDurations(uniqueDurations);

    const universities = userData.map(user => user.university);
    const uniqueUniversities = [...new Set(universities)];
    setUniqueUniversities(uniqueUniversities);

        //check users data if no reuslts add store this boolean value

    if (noResults) {
      dispatch(setNoData(true));
    } else {
      dispatch(setNoData(false)); 
    }

  }, [noResults, dispatch]);

    //get datas from inputs

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
    setYear(e.target.value);
  };

  const handleMinCostChange = (e) => {
    setMinCost(e.target.value);
  };

  const handleMaxCostChange = (e) => {
    setMaxCost(e.target.value);
  };

    //click button and see filter results

  const handleFilterClick = () => {
        //here compares  data in the json with the data I filtered. if inclued same value set on filteredUsers variable

    let filteredUsers = userData.filter(user =>
      user.university.toLowerCase().includes(university.toLowerCase()) &&
      user.language.toLowerCase().includes(language.toLowerCase()) &&
      user.country.toLowerCase().includes(country.toLowerCase()) &&
      user.year.toLowerCase().includes(year.toLowerCase())
    );


            //money compares

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
            //advanced sort procces, lwoest to high price, deadline..

    if (sortBy === 'minCost') {
      filteredUsers.sort((a, b) => parseFloat(a.price.replace(' TL', '').replace(',', '')) - parseFloat(b.price.replace(' TL', '').replace(',', '')));
    } else if (sortBy === 'maxCost') {
      filteredUsers.sort((a, b) => parseFloat(b.price.replace(' TL', '').replace(',', '')) - parseFloat(a.price.replace(' TL', '').replace(',', '')));
    } else if (sortBy === 'deadline') {
      filteredUsers.sort((a, b) => new Date(a.başvuruSonTarihi) - new Date(b.başvuruSonTarihi));
    }

    //if no results set noresult and they go redux store

    if (filteredUsers.length === 0) {
      setNoResults(true); 
      
    } else {
      setNoResults(false); 
    }


    //they are valueS go to UserTAble.js with the help of this

    dispatch(setFilteredUsers(filteredUsers));
  };

  return (
    <div className='flex space-x-3 items-center'>



      <select value={university} onChange={handleUniversityChange} className="block py-1  w-2/6 text-sm text-gray bg-transparent border-b-2 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All Universities</option>
        {uniqueUniversities.map((university, index) => (
          <option key={index} value={university}>{university}</option>
        ))}
      </select>


      <select value={language} onChange={handleLanguageChange} id="underline_select" className="block py-1 px-0 w-2/6  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All languages</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Turkish">Turkish</option>
      </select>

      <select value={country} onChange={handleCountryChange} id="underline_select" className="block py-1 px-0 w-2/6 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All Countries</option>
        {uniqueCountries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>


      <select value={year} onChange={handleDurationChange} id="underline_select" className="block py-1 px-0 w-2/6  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="">All Time</option>
        {uniqueDurations.map((year, index) => (
          <option key={index} value={year}>{year} Year</option>
        ))}
      </select>



      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} id="underline_select" className="block py-1 px-0 w-2/6  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
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
