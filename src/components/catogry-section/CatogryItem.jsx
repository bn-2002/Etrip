import React from 'react';
import { Link } from 'react-router-dom';
import { useList, useDispatchList } from '../../store/ListContext';

const CatogryItem = ({ name, productCatogeryID, currentProductCatogeryID }) => {
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
        currentProductCatogeryID === productCatogeryID ? 'bg-gray-200' : ''
      } py-1 px-2 h-auto  rounded-full border  border-gray-300 relative  w-auto inline text-center `}
    >
      <Link to="/list">
        <span className="whitespace-nowrap ">{name}</span>
      </Link>
    </div>
  );
};

export default CatogryItem;
