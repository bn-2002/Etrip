import React from 'react';
import FilterItems from './FilterItems';
import SearchBar from './SearchBar';
import './FilterItems.css';

const Catogries = () => {
  return (
    <div
      className={`catogries-section sticky top-0 border mx-auto bg-white w-full sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[200]  px-2`}
    >
      <div
        id="catogries-section"
        className={`w-full  bg-white duration-700 py-5 transition-all mx-auto   `}
      >
        <SearchBar />
        <FilterItems />
      </div>
    </div>
  );
};

export default Catogries;
