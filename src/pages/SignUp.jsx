import React, { useState } from 'react';
import './SignUp.css'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();// Prevents page reload
    console.log('Form submitted:', formData);
    alert('Sign up successful!');
    setFormData({ name: '', email: '', password: '' }); // Clears the form
  };

  return (
    <section className="signup-page">
      <h1>Sign Up</h1>
      <p className="signup-description">Create your free account to get started with tracking cryptos.</p>
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </section>
  );
};

export default SignUp;
