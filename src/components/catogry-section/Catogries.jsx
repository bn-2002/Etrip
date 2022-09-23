import React from 'react';
import FilterItems from './FilterItems';
import SearchBar from './SearchBar';
import styles from './FilterItems.module.css';
import { useDarkMode } from '../../store/DarkModeContext';

const Catogries = ({ iconColor, showSearchbar }) => {

  const {darkMode} = useDarkMode();

  return (
    <section
      id="catogries"
      className={`${styles['catogries-section']} sticky top-0 ${darkMode?'bg-slate-800' : 'bg-white'} duration-500 w-full sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[20]  px-2`}
    >
      <div
        id="catogries-section"
        className={`w-full ${darkMode?'bg-slate-800 text-slate-300' : 'bg-white text-black'} duration-500 py-1 mx-auto  `}
      >
        {showSearchbar && <SearchBar iconColor={iconColor} />}
        <FilterItems />
      </div>
    </section>
  );
};

export default Catogries;
