import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatchList, useList } from '../../store/ListContext';
import useFetch from '../../hooks/useFetch';

const CatogryItem = ({ name, collectionID, currentCollectionID }) => {
  const { isLoading, error, sendRequest } = useFetch();
  const list = useList();
  const dispatchList = useDispatchList();

  const onClick = async () => {
    const newConfig = {
      ...list.filteredItems,
      collectionID: collectionID,
    };
    const data = await sendRequest(newConfig);
    dispatchList({
      type: 'filter-list',
      payload: {
        collectionID: collectionID,
        newConfig: newConfig,
        newData: data,
      },
    });
  };

  const filterList = () => {
    onClick();
  };

  return (
    <div
      onClick={filterList}
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
