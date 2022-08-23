import React from 'react';
import FilterItems from './FilterItems';
import SearchBar from './SearchBar';

const Catogries = (props) => {
  return (
    <div
      id="catogries-section"
      className={`${props.style} bg-white duration-700 py-5 transition-all mx-auto md:container sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[200]`}
    >
      <SearchBar />
      <FilterItems />
    </div>
  );
};

export default Catogries;
