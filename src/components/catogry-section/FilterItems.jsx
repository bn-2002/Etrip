import React from 'react';
import CatogryItem from './CatogryItem';
import { data } from './data';
// mt-2 text-[13px] sm:text-base border h-[80px] border-500 border-red-400 flex flex-nowrap flex-row-reverse overflow-scroll
const FilterItems = () => {
  return (
    <div class="flex items-center h-[50px] justify-center">
      <div className="flex overflow-x-scoll flex-row items-center justify-center overflow-y-hidden">
        <span>فیلتر دسته بندی</span>
        {data.map((element) => {
          return <CatogryItem name={element.name} key={element.id} />;
        })}
      </div>
    </div>

    // <div class="container h-[300px] w-full flex flex-row border border-blue-500">
    //   <div class="body relative flex-1 border border-orange-400">
    //     <div class="scrolled-body absolute top-0 left-0 right-0 bottom-0 overflow-y-auto ">
    //       {data.map((element) => {
    //         return <CatogryItem name={element.name} key={element.id} />;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default FilterItems;
// flex w-auto flex-row-reverse items-center justify-center gap-1
