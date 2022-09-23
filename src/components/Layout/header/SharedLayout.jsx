import React from 'react';
import TopHeader from './TopHeader';
import Header from './Header';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
      {/* <div className='border sticky top-0 relative z-[100] border-black w-min rounded-full p-5 bg-white text-black'>salam</div> */}
      <TopHeader />
      <Header  />
      <Outlet />
    </>
  );
};

export default SharedLayout;
