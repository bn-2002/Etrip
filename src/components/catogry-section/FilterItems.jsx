import React from 'react';
import CatogryItem from './CatogryItem';
import { data } from './data';

const FilterItems = () => {
  return (
    <div className='flex flex-row-reverse flex-wrap items-center justify-center gap-1 mt-2  text-[13px] sm:text-base'>
          <span>فیلتر دسته بندی</span>
      {data.map((element) => {
        return <CatogryItem name={element.name} key={element.id} />;
      })}
    </div>
  );
};

export default FilterItems;
