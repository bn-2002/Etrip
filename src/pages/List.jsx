import React from 'react';
import Catogries from '../components/catogry-section/Catogries';
import ListHeader from '../components/Layout/header/list-header/ListHeader';
import ListItem from '../components/list-item/ListItem';

const List = () => {
  return (
    <>
      <ListHeader />
      <Catogries />
      <section className="z-[19] relative bg-white mx-auto px-2 sm:px-1 md:px-28 xl:px-60 lg:px-16 mt-4">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </section>
    </>
  );
};

export default List;
