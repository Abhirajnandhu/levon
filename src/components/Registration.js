import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration({ setUserDetails }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [operator, setOperator] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({ name, email, password, operator });
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div>
          <label htmlFor="operator">Choose Operator (Select box)</label>
          <select
            id="operator"
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            required
          >
            <option value="">Select Operator</option>
            <option value="Addition">+</option>
            <option value="Subtraction">-</option>
            <option value="Multiplication">*</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
