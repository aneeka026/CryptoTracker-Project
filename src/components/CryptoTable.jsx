import React from 'react';

function CryptoTable({ data }) {
  return (
    <section>
      <table>
        <thead>
          {/* Table header */}
          <tr>
            <th>#</th>
            <th>Coins</th>
            <th>Price</th>
            <th>24H Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the data and display each cryptocurrency's details */}
          {data.length > 0 ? (
            data.map((coin, index) => (
              <tr key={coin.id}>
                <td>{index + 1}</td>
                {/* Display cryptocurrency's name, symbol, and image */}
                <td>
                  <img src={coin.image} width="20" style={{ verticalAlign: 'middle' }} /> 
                  {coin.name} - {coin.symbol}
                </td>
                {/* Display current price */}
                <td>${coin.current_price.toLocaleString()}</td>
                {/* Display the 24-hour change percentage */}
                <td className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                {/* Display market cap */}
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            // If no data is available, display a message saying no results were found
            <tr><td colSpan="5">No results found</td></tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default CryptoTable;
