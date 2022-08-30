import React from 'react';
import CatogryItem from './CatogryItem';
import { data } from './data';
import './FilterItems.css';

const FilterItems = () => {
  return (
    <div className="flex items-center h-[50px] justify-center mt-3 ">
      <div className="flex gap-2 overflow-x-scoll flex-row items-center overflow-y-hidden catogries-items-filter h-[100px] w-auto ">
        <span className=" whitespace-nowrap">فیلتر دسته بندی</span>
        {data.map((element) => {
          return <CatogryItem name={element.name} key={element.id} />;
        })}
      </div>
    </div>
  );
};

export default FilterItems;
