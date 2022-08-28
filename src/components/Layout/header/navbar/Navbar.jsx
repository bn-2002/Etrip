import React from 'react';
import LoginBtn from './LoginBtn';
import Dropdown from './Dropdown';
import faveIcon from '../../../../assests/images/favicon.png';

const Navbar = (props) => {
  return (
    <div
      className={`${props.style} z-[1] transition-all fixed flex items-center justify-between w-full h-20 px-1 mt-1 bg-transparent sm:px-1 lg:mt-1 xl:mt-5 md:px-1 xl:px-60 lg:px-40`}
    >
      <img src={faveIcon} alt="etrip icon" className="w-20 mr-8 lg:w-28" />
      <div className="flex items-center justify-around">
        {props.showApp && <Dropdown />}
        <LoginBtn />
      </div>
    </div>
  );
};

export default Navbar;
