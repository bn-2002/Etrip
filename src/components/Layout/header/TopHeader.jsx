import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import styles from './ListHeader.module.css';
import Slider from './slider/Slider';

const TopHeader = () => {
  const location = useLocation();

  return (
    <>
      <Navbar showDownloadAppIcon={location.pathname === '/' ? true : false} />
      {location.pathname === '/' ? (
        <Slider />
      ) : (
        <div
          className={`${styles['list-header-bg']} relative w-full h-[100px]`}
        >
          <div
            className={`${styles['bg-shadow']} absolute top-0 left-0 w-full h-full `}
          ></div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
