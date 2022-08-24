import React from 'react';
import Navbar from './Navbar';
import Slider from './slider/Slider';

const Header = () => {
  return (
    <div  className="flex flex-col">
      <Navbar />
      <Slider/>
    </div>
  );
};

export default Header;
