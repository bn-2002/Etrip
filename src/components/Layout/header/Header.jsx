import React from 'react';
import Navbar from './Navbar';
import Slider from './slider/Slider';

const Header = () => {
  return (
    <header id="header" className="flex flex-col">
      <Navbar />
      <Slider />
    </header>
  );
};

export default Header;
