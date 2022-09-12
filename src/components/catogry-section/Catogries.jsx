import React from 'react';
import FilterItems from './FilterItems';
import SearchBar from './SearchBar';
import './FilterItems.css';

const Catogries = ({ iconColor, showSearchbar }) => {
  return (
    <section
      id="catogries"
      className={`catogries-section sticky top-0 border mx-auto bg-white w-full sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[20]  px-2`}
    >
      <div
        id="catogries-section"
        className={`w-full  bg-white duration-700 py-1 transition-all mx-auto   `}
      >
        {showSearchbar && <SearchBar iconColor={iconColor} />}
        <FilterItems />
      </div>
    </section>
  );
};

export default Catogries;
