import React from 'react';
import { useLocation } from 'react-router-dom';
import Catogries from '../../catogry-section/Catogries';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header id="header" className="sticky top-0 z-[100]">
        <Catogries
          showSearchbar={location.pathname === '/cart' ? false : true}
          iconColor={location.pathname === '/' ? 'black' : 'red'}
        />
      </header>
    </>
  );
};

export default Header;
