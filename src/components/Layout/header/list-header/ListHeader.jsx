import React from 'react';
import Navbar from '../navbar/Navbar';
import './ListHeader.css';

const ListHeader = () => {
  return (
    <header class="list-header-wrapper">
      <Navbar showApp={false} />
      <div className="relative w-full h-[100px] list-header-bg">
        <div className="bg-shadow absolute top-0 left-0 h-full w-full"></div>
      </div>
    </header>
  );
};

export default ListHeader;
