import React from 'react';
import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';

const HomeHeader = () => {
  return (
    <header id="header">
      <Navbar showApp={true} />
      <Slider />
    </header>
  );
};

export default HomeHeader;
