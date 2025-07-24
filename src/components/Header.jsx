import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({toggleTheme}) => {
  return (
    <header>
      <div><strong>Cryptoplace</strong></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/signup">Sign up</Link>
      </nav>

      <button className="btn-toggle" onClick={toggleTheme}>
        🌙 Toggle Mode
      </button>
    </header>
  )
}

export default Header
