import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/nav';
import Home from './pages/Home';
import CompanyDetails2024 from './pages/CompanyDetails2024';
import Contact from './pages/contact';
import PlacedStudents from './pages/PlacedStudents';
import Login from './pages/Login';
import Register from './pages/Register';



import Registerplaced from './pages/registerplaced';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <BrowserRouter>
      {isLoggedIn }
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/companydetails/2024"
          element={isLoggedIn ? <CompanyDetails2024 /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
        />
        <Route
          path="/placedstudents/:year"
          element={isLoggedIn ? <PlacedStudents /> : <Navigate to="/login" />}
        />
      
           <Route path="/registerplaced" element={isLoggedIn ? <Registerplaced /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
