import React from 'react';
import CatogryItem from './CatogryItem';

const catogries = [
  {
    name: 'مجتمع های اقامتی',
    id : 1,
  },
  {
    name: 'تور های تفریحی',
    id : 2,
  },
  {
    name: 'پکیج',
    id : 3,
  },
  {
    name: 'َشاتل',
    id : 4,
  },
  {
    name: 'غواصی',
    id : 5,
  },
  {
    name: 'قایق تفریحی',
    id : 6,
  },
  {
    name: 'فلای بورد',
    id : 7,
  },
  {
    name: 'پدل بورد',
    id : 8,
  },
  {
    name: 'ّبنانا',

    id : 9,
  },
  {
    name: 'پاراسل',
    id : 10,
  },
  {
    name:'خدمات تفریحی',
    id : 11,
  }
];

const FilterItems = () => {
  return (
    <div className='flex flex-row-reverse flex-wrap items-center justify-center gap-1 mt-2  text-[10px] sm:text-[12.5px]'>
          <span>فیلتر دسته بندی</span>
      {catogries.map((element) => {
        return <CatogryItem name={element.name} key={element.id} />;
      })}
    </div>
  );
};

export default FilterItems;
