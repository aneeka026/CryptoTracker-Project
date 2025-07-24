import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-page">
      <h1>App Features</h1>
      <p className="features-intro">Explore what our crypto tracker app offers:</p>

      <div className="feature-list">
        <div className="feature-card">
          🔍 <h2>Live Price Tracking</h2>
          <p>Get real-time updates of top cryptocurrencies from CoinGecko API.</p>
        </div>

        <div className="feature-card">
          💡 <h2>Light & Dark Mode</h2>
          <p>Switch themes instantly and keep your preference saved using localStorage.</p>
        </div>

        <div className="feature-card">
          🔎 <h2>Search Coins</h2>
          <p>Search for specific cryptocurrencies by name and get instant results.</p>
        </div>

        <div className="feature-card">
          📊 <h2>Detailed Crypto Table</h2>
          <p>View prices, market cap, and 24H price change in a clean table format.</p>
        </div>

        <div className="feature-card">
          ⚙️ <h2>Built with React</h2>
          <p>Made using functional components and React hooks like useState & useEffect.</p>
        </div>

        <div className="feature-card">
          📱 <h2>Responsive Design</h2>
          <p>Optimized layout that works smoothly on mobile, tablet, and desktop.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
