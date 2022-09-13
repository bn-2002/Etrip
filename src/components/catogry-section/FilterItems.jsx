import React from 'react';
import CatogryItem from './CatogryItem';
import './FilterItems.css';
import { useList } from '../../store/ListContext';

const FilterItems = () => {
  const list = useList();
  const currentProductCatogery = list.requestConfig?.ProductCategoryID;
  return (
    <div className="flex items-center h-[50px] justify-start mt-3 ">
      <div className="flex gap-2 overflow-x-scoll flex-row items-center overflow-y-hidden catogries-items-filter h-[100px] w-auto ">
        <span className=" whitespace-nowrap">فیلتر دسته بندی</span>
        {list.filterListInfo &&
          list.filterListInfo.ProductCategory.map((element) => {
            return (
              <CatogryItem
                currentProductCatogeryID={currentProductCatogery}
                productCatogeryID={element.ID}
                name={element.Name}
                key={element.ID}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FilterItems;
