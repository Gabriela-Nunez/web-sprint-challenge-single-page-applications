import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';



const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <h2>The Best Pizza for The Best Coders in Town</h2>
      <img 
      className='home-image'
      src='./images/homePagePic.jpg'
      alt='people eating pizza'
      />
    </div>
  );
}

export default HomePage;