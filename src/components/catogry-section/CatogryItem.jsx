import React from 'react';
import { Link } from 'react-router-dom';
import { useList } from '../../store/ListContext';

const CatogryItem = ({ name, collectionID, currentCollectionID }) => {
  const list = useList();

  const onClickHandler = async () => {
    list.filterList(list.filteredItems, 'collection', collectionID);
  };

  return (
    <div
      onClick={onClickHandler}
      className={` ${
        currentCollectionID === collectionID ? 'bg-gray-200' : ''
      } py-1 px-2 h-auto  rounded-full border  border-gray-300 relative  w-auto inline text-center `}
    >
      <Link to="/list">
        <span className="whitespace-nowrap ">{name}</span>
      </Link>
    </div>
  );
};

export default CatogryItem;
