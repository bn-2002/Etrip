import React, { useContext } from 'react';
import Catogries from '../components/catogry-section/Catogries';
import ListHeader from '../components/Layout/header/list-header/ListHeader';
import ListItem from '../components/list-item/ListItem';
import ListContext from '../store/ListContext';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useItemsInfo } from '../store/ItemsInfoContext';

const List = () => {
  const { list, setList } = useContext(ListContext);
  const itemsInfo = useItemsInfo();

  const content =
    list.length === 0 || itemsInfo.allItems.length === 0 ? (
      <LoadingSpinner />
    ) : (
      <>
        <section className="z-[19] relative bg-white mx-auto px-2 sm:px-1 md:px-28 xl:px-60 lg:px-16 mt-4">
          {(list.items.length === 0 || itemsInfo.length === 0) && (
            <LoadingSpinner />
          )}
          {list.items &&
            itemsInfo &&
            list.items.map((item) => {
              return (
                <ListItem
                  key={item.productID}
                  id={item.productID}
                  item={item}
                />
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
