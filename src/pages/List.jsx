import React from 'react';
import Product from '../components/product/Product';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useList } from '../store/ListContext';
import { isEmptyObject } from '../helpers/helper';

const List = () => {
  const list = useList();

  return (
    <div className="relative h-auto z-[19] bg-white border border-white">
      {isEmptyObject(list) && <LoadingSpinner />}
      {!isEmptyObject(list) && (
        <section className="z-[19] relative bg-white mx-auto text-black px-2 sm:px-1 md:px-28 xl:px-60 lg:px-16">
          {list.allItems.length === 0 && (
            <p className=" text-lg">هیچ موردی یافت نشد! 🙁 </p>
          )}
          {list.allItems.map((item) => {
            return <Product key={item.productID} item={item} />;
          })}
        </section>
      )}
    </div>
  );
};

export default List;
