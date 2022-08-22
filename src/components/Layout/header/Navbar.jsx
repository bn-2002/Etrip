import React from 'react';
import LoginBtn from './LoginBtn';
import Dropdown from './Dropdown';
import faveIcon from '../../../assests/images/favicon.png';

const Navbar = () => {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full h-20 px-1 mt-1 bg-transparent sm:px-1 lg:mt-10 xl:mt-12 md:px-1 xl:px-80 lg:px-40">
      <div className="flex items-center justify-around">
        <LoginBtn />
        <Dropdown />
      </div>
      <img src={faveIcon} alt="etrip icon" className="w-20 mr-8 lg:w-28" />
    </div>
  );
};

export default  Navbar;