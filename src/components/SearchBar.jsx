import React from 'react'

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <section className="search-container">
      {/* Input field for entering search queries */}
      <input
       type="text"
       id="searchInput"
       placeholder="Search crypto..."
       value={query} // Display the current search query
       onChange={(e) => setQuery(e.target.value)} // Update search query as user types
      />
      
      <button onClick={onSearch}>Search</button>
    </section>
  )
}

export default SearchBar
