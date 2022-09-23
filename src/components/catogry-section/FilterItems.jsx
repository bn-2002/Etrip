import React from 'react';
import CatogryItem from './CatogryItem';
import styles from './FilterItems.module.css';
import { useList } from '../../store/ListContext';
import { useFilterForm } from '../../store/FilterContext';
import { ShimmerBadge } from 'react-shimmer-effects';
import { useDarkMode } from '../../store/DarkModeContext';
import {BsMoonFill } from 'react-icons/bs';
import {TiWeatherSunny} from 'react-icons/ti'
import { useLocation } from 'react-router-dom';


const FilterItems = () => {
  const { filter } = useFilterForm();
  const list = useList();
  const {darkMode,setDarkMode} = useDarkMode();
  const location = useLocation();

  const currentProductCatogery = list.requestConfig?.ProductCategoryID;

  return (
    <div className="flex items-center h-[50px] justify-start mt-3 ">
      <div
        className={`${styles['catogries-items-filter']} flex gap-2 mr-2 xl:mr-12 overflow-x-scoll flex-row items-center overflow-y-hidden h-[100px] w-auto `}
      >
        {!filter.info &&
          [1, 2, 3, 4, 5, 6, 7].map((element) => {
            return <ShimmerBadge key={element} width={80} />;
          })}

          
      {/* Toggle light/dark button */}
      {location.pathname === '/cart' && filter.info && <div className="duration-500 cursor-pointer" onClick={() => 
      {
        setDarkMode(!darkMode);
        localStorage.setItem('theme', !darkMode);
      }
      }>
        {darkMode && <TiWeatherSunny color="yellow" fontSize="35px" />}
        {!darkMode && <BsMoonFill color="#25316D" fontSize="27px"/> }
      </div>}

        {filter.info && (
          <span className=" whitespace-nowrap">فیلتر دسته بندی</span>
        )}

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
