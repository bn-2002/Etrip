import React,{useState} from 'react';
import LoginBtn from './LoginBtn';
import Dropdown from './Dropdown';
import faveIcon from '../../../../assests/images/favicon.png';
import { Link } from 'react-router-dom';


const Navbar = ({ style, showDownloadAppIcon }) => {

  return (
    <div
      className={`${style} z-[1] transition-all fixed flex items-center justify-between w-full h-20 px-1 mt-1  sm:px-1 lg:mt-1 xl:mt-5 md:px-1 xl:px-60 lg:px-40`}
    >
      <Link to="/">
        <img src={faveIcon} alt="etrip icon" className="mr-14 w-24 xl:w-[7.5rem]" />
      </Link>
      <div className="flex items-center justify-around">

        {showDownloadAppIcon && <Dropdown />}

        <LoginBtn />
      </div>
    </div>
  );
};

export default Navbar;
