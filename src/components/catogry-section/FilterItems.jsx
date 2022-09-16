import React from 'react';
import CatogryItem from './CatogryItem';
import styles from './FilterItems.module.css';
import { useList } from '../../store/ListContext';
import { useFilterForm } from '../../store/FilterContext';
import { ShimmerBadge } from 'react-shimmer-effects';

const FilterItems = () => {
  const { filter } = useFilterForm();
  const list = useList();

  const currentProductCatogery = list.requestConfig?.ProductCategoryID;
  return (
    <div className="flex items-center h-[50px] justify-start mt-3 ">
      <div
        className={`${styles['catogries-items-filter']} flex gap-2 overflow-x-scoll flex-row items-center overflow-y-hidden h-[100px] w-auto `}
      >
        <span className=" whitespace-nowrap">فیلتر دسته بندی</span>
        {!filter.info &&
          [1, 2, 3, 4, 5, 6].map(() => {
            return <ShimmerBadge width={80} />;
          })}

        {filter.info &&
          filter.info.ProductCategory.map((element) => {
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
