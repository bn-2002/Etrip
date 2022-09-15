import React from 'react';
import TopHeader from './TopHeader';
import Header from './Header';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
