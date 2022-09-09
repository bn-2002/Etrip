import React from 'react';
import Catogries from '../components/catogry-section/Catogries';
import ListHeader from '../components/Layout/header/list-header/ListHeader';
import Product from '../components/product/Product';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useList } from '../store/ListContext';

const List = () => {
  const list = useList();

  function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
  }

  return (
    <>
      <ListHeader />
      <Catogries />
      {isEmptyObject(list) && <LoadingSpinner />}
      {!isEmptyObject(list) && (
        <section className="z-[19] relative bg-white mx-auto text-black px-2 sm:px-1 md:px-28 xl:px-60 lg:px-16 mt-4">
          {list.allItems.length === 0 && (
            <p className=" text-lg">هیچ موردی یافت نشد! 🙁 </p>
          )}
          {list.allItems.map((item) => {
            return <Product key={item.productID} item={item} />;
          })}
        </section>
      )}
    </>
  );
};

export default List;
