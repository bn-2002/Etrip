import React from 'react';
import FilterItems from './FilterItems';
import SearchBar from './SearchBar';

const Catogries = () => {
  return (
    <div className="mx-auto md:container sm:px-1 md:px-1 xl:px-60 lg:px-40">
      <SearchBar />
      <FilterItems />
    </div>
  );
};

export default Catogries;
