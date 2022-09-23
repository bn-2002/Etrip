import React from 'react';
import { Link } from 'react-router-dom';
import { useList, useDispatchList } from '../../store/ListContext';
import { useDarkMode } from '../../store/DarkModeContext'

const CatogryItem = ({ name, productCatogeryID, currentProductCatogeryID }) => {

  
  const {darkMode} = useDarkMode();
  const list = useList();
  const dispatchList = useDispatchList();

  const onClickHandler = () => {
    /////////it changes vatogry id in requestConfig
    dispatchList({
      type: 'filter-catogery',
      payload: {
        value: productCatogeryID,
      },
    });

    ///////////set loading true
    dispatchList({
      type: 'is-loading',
    });

    ////it sends request to get new data
    list.filterList(
      list.requestConfig,
      'change-product-catogery',
      productCatogeryID
    );
  };

  return (
    <div
      onClick={onClickHandler}
      className={` ${
        currentProductCatogeryID === productCatogeryID ? `${darkMode?'bg-slate-500 border-slate-500 text-white' : 'bg-gray-200'}` : `${darkMode?'bg-slate-600 border-slate-600' : 'border-gray-300'}`
      } py-1 px-2 h-auto rounded-full relative w-auto inline text-center border`}
    >
      <Link to="/list">
        <span className="whitespace-nowrap ">{name}</span>
      </Link>
    </div>
  );
};

export default CatogryItem;
