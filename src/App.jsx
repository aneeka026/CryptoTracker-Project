import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; 
import SearchBar from './components/SearchBar'; 
import CryptoTable from './components/CryptoTable'; 
import './App.css'; 

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');   //theme --> Holds the current theme of the app (light or dark). It initializes with the value from localStorage or defaults to 'dark'.
  const [cryptoData, setCryptoData] = useState([]);     //cryptoData --> An array that will hold the cryptocurrency data fetched from the API.
  const [searchQuery, setSearchQuery] = useState('');   //searchQuery --> A string that stores the user's search input.
  const selectedCurrency = 'usd'; 

  useEffect(() => { 
    document.body.className = theme === 'light' ? 'light' : ''; // Set body class based on the theme 
    localStorage.setItem('theme', theme); // Save the current theme in localStorage 
  }, [theme]); // runs whenever the 'theme' value changes

  useEffect(() => {
    fetchCryptoData(); //fetch crypto data when the component is first loaded 
  }, []); // runs only once 

  const fetchCryptoData = async () => {  // Function to fetch cryptocurrency data from an external API (CoinGecko)
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

    try {
      const res = await fetch(url); // Fetch data from the url & wait until data comes back
      const data = await res.json(); // take response & change it into usable data/JSON format ( js object)
      setCryptoData(data); // Update the state with fetched data to show in ui
    } catch (error) { // this block run only if there is a problem in try
      console.error('Error fetching data:', error); 
    }
  };

  const handleSearch = async () => {   // Function to handle search functionality
    if (!searchQuery) { // If search query is empty, fetch the default data
      fetchCryptoData();
      return;
    }

    // Define the API URL with the search query (crypto name) to get matching results
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&ids=${searchQuery}&order=market_cap_desc&per_page=1&page=1&sparkline=false`;

    try {
      const res = await fetch(url); // Fetch data based on the search query from url
      const data = await res.json(); // convert response into JSON format
      setCryptoData(data.length ? data : []); // If data found, update state; otherwise, display no results(empty list)
    } catch (error) {
      console.error('Search error:', error); // it Handle any errors during the search
    }
  };

  return (
    <>
      <Header toggleTheme={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))} /> 
      <HeroSection />
      <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={handleSearch} />
      <CryptoTable data={cryptoData} /> {/* passing the fetched crypto data */}      
    </>
  );
}

export default App; // Export App component for use in index.js