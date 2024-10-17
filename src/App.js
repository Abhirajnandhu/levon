import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import WelcomePage from './components/WelcomePage';
import './App.css';


function App() {
  const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '', operator: '' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration setUserDetails={setUserDetails} />} />
        <Route path="/login" element={<Login userDetails={userDetails} />} />
        <Route path="/welcome" element={<WelcomePage userDetails={userDetails} />} />
      </Routes>
    </Router>
  );
}

export default App;
