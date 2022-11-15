import React from 'react';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <h1>The Best Pizza for The Best Coders in Town</h1>
      <img 
      className='home-image'
      src='./images/homePagePic.jpg'
      alt='people eating pizza'
      />
    </div>
  );
}

export default HomePage;