import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-page">
      <h1>💰 Pricing Plans</h1>
      <p className="pricing-description">
        Our app is free for now, but here's what future plans might look like.
      </p>

      <div className="pricing-cards">

        <div className="pricing-card">
          <h2>🧾 Basic</h2>
          <p className="price">₹0 / month</p>
          <ul>
            <li>✔ View top 20 cryptocurrencies</li>
            <li>✔ Light/Dark mode toggle</li>
            <li>✔ Basic search functionality</li>
          </ul>
          <button className="select-btn">Get Started</button>
        </div>

        <div className="pricing-card">
          <h2>🚀 Pro</h2>
          <p className="price">₹199 / month</p>
          <ul>
            <li>✔ Advanced market insights</li>
            <li>✔ Real-time data updates</li>
            <li>✔ Portfolio tracking</li>
          </ul>
          <button className="select-btn">Choose Pro</button>
        </div>

        <div className="pricing-card">
          <h2>🏢 Enterprise</h2>
          <p className="price">₹499 / month</p>
          <ul>
            <li>✔ Team access</li>
            <li>✔ Priority support</li>
            <li>✔ API access</li>
          </ul>
          <button className="select-btn">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
