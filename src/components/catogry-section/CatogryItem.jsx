import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatchList } from '../../store/ListContext';
import { useList } from '../../store/ListContext';

const CatogryItem = ({ name, collectionID }) => {
  const dispatchList = useDispatchList();
  const list = useList();

  const filterList = () => {
    if (collectionID === 1) {
      dispatchList({
        type: 'show-all-products',
      });
    } else {
      dispatchList({
        type: 'filter-list',
        payload: {
          collectionID: collectionID,
        },
      });
    }
  };

  return (
    <div
      onClick={filterList}
      className=" py-1 px-2 h-auto rounded-full border-[#e5e5ea] border relative  w-auto inline text-center "
    >
      <Link to="/list">
        <span className="whitespace-nowrap">{name}</span>
      </Link>
    </div>
  );
};

export default CatogryItem;
