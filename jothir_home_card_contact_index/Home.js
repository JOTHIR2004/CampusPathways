import React from 'react';
import './home.jpg';
import './Home.css'; 
import NavBar from '../components/nav';

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className="home-container">
      <img src={require('./home.jpg')} alt="Placement Preparation" className="home-image" />
      <div className="home-text">
        <p>Welcome to the App</p>
        <p>This is a placement-related app.Thanks to login</p>
      </div>
    </div>
    </>
  );
};

export default Home;
