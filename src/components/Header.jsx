import React from 'react'

const Header = ({toggleTheme}) => {
  return (
    <header>
      <div><strong>Cryptoplace</strong></div>
      <nav>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
        <a href="#signup">Sign up</a>
      </nav>

      {/* Theme toggle button: when clicked, it toggles between light and dark modes */}
      <button className="btn-toggle" onClick={toggleTheme}>
        🌙 Toggle Mode
      </button>
    </header>
  )
}

export default Header
