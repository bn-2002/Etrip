import React from 'react';
import Navbar from './navbar/Navbar';
import Slider from './slider/Slider';
import styles from './ListHeader.module.css';
import { Outlet } from 'react-router-dom';
import Catogries from '../../catogry-section/Catogries';

const Header = ({ path }) => {
  return (
    <>
      <header id="header">
        {' '}
        <Navbar showDownloadAppIcon={path === '/' ? true : false} />
        {path === '/' ? (
          <Slider />
        ) : (
          <div
            className={`${styles[`list-header-bg`]} relative w-full h-[100px]`}
          >
            <div
              className={`${
                styles[`bg-shadow`]
              } absolute top-0 left-0 w-full h-full `}
            ></div>
          </div>
        )}
        <Catogries
          showSearchbar={path === '/cart' ? false : true}
          iconColor={path === '/' ? 'black' : 'red'}
        />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
