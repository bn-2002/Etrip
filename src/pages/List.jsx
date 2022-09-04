import React from 'react';
import Catogries from '../components/catogry-section/Catogries';
import ListHeader from '../components/Layout/header/list-header/ListHeader';
import Product from '../components/product/Product';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useList } from '../store/ListContext';

const List = () => {
  const list = useList();

  const content =
    list.allItems.length === 0 ? (
      <LoadingSpinner />
    ) : (
      <>
        <section className="z-[19] relative bg-white mx-auto px-2 sm:px-1 md:px-28 xl:px-60 lg:px-16 mt-4">
          {list.length === 0 && <LoadingSpinner />}
          {list &&
            list.allItems.map((item) => {
              return (
                <Product key={item.productID} id={item.productID} item={item} />
              );
            })}
        </section>
      </>
    );
  return (
    <>
      <ListHeader />
      <Catogries />
      {content}
    </>
  );
};

export default List;
