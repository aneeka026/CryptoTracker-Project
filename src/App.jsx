import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; 
import SearchBar from './components/SearchBar'; 
import CryptoTable from './components/CryptoTable'; 
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import SignUp from './pages/SignUp';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');   
  const [cryptoData, setCryptoData] = useState([]);     //cryptoData -->array , hold cryptocurrency data
  const [searchQuery, setSearchQuery] = useState('');   //searchQuery --> string,stores user's search input
  const selectedCurrency = 'inr'; 

  useEffect(() => { 
    document.body.className = theme === 'light' ? 'light' : ''; 
    localStorage.setItem('theme', theme); 
  }, [theme]); 

  useEffect(() => {
    fetchCryptoData();//initial fetch

    const interval = setInterval(() => {
      fetchCryptoData(); // Fetch data every 60 seconds
    }, 60000); 
    return () => clearInterval(interval); 
  }, []); 

  const fetchCryptoData = async () => {  
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=10&page=1`;

    try {
      const res = await fetch(url); 
      const data = await res.json(); 
      console.log(data);
      
      setCryptoData(data); // Update state -->with fetched data to show in ui
      
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  };

  const handleSearch = async () => {   
    if (!searchQuery) { 
      fetchCryptoData();
      return;
    }

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&ids=${searchQuery}&order=market_cap_desc&per_page=1&page=1&sparkline=false`;

    try {
      const res = await fetch(url); // fetch data based on search query from url
      const data = await res.json(); 
      setCryptoData(data.length ? data : []); 
      // checks if the data array has any items-->If data.length is greater than 0, it is truthy
    } catch (error) {
      console.error('Search error:', error); 
    }
  };

  return (
    <Router>
      <Header toggleTheme={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))} /> 
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
            <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={handleSearch} />
            <CryptoTable data={cryptoData} /> {/* passing the fetched crypto data */}     
          </>
        }/>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    
  );
}

export default App; 

