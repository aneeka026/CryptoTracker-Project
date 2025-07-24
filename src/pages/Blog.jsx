import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog-page">
      <h1>Crypto Insights & Blog</h1>
      <p className="blog-description">
        Stay updated with the latest trends, tips, and insights from the crypto world.
      </p>

      <div className="blog-list">
        <div className="blog-card">
          <h2>🚀 What is Cryptocurrency?</h2>
          <p>
            A beginner-friendly guide explaining what cryptocurrencies are, how they work,
            and why they matter in today’s digital economy.
          </p>
          <a href="#">Read More →</a>
        </div>

        <div className="blog-card">
          <h2>📈 How to Read Crypto Price Charts</h2>
          <p>
            Learn how to understand candlestick charts, market cap, and 24H changes with simple examples.
          </p>
          <a href="#">Read More →</a>
        </div>

        <div className="blog-card">
          <h2>🛡️ Staying Safe While Investing</h2>
          <p>
            Avoid scams, use trusted exchanges, and protect your digital wallet with best practices.
          </p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
