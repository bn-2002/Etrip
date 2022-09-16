import React from 'react';
import { useLocation } from 'react-router-dom';
import Catogries from '../../catogry-section/Catogries';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <section id="top-header-section" className="sticky top-0 z-[21]">
        <Catogries
          showSearchbar={location.pathname === '/cart' ? false : true}
          iconColor={location.pathname === '/' ? 'black' : 'red'}
        />
      </section>
    </>
  );
};

export default Header;
