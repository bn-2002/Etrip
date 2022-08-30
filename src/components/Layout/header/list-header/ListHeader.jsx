import React from 'react';
import Navbar from '../navbar/Navbar';
import './ListHeader.css';

const ListHeader = () => {
  return (
    <header className="list-header-wrapper">
      <Navbar showApp={false} />
      <div className="relative w-full h-[100px] list-header-bg">
        <div className="absolute top-0 left-0 w-full h-full bg-shadow"></div>
      </div>
    </header>
  );
};

export default ListHeader;
