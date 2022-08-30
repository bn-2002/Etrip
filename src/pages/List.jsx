import React, { useContext, useEffect } from 'react';
import Catogries from '../components/catogry-section/Catogries';
import ListHeader from '../components/Layout/header/list-header/ListHeader';
import ListItem from '../components/list-item/ListItem';
import ListContext from '../store/ListContext';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const List = () => {
  const { list, setList } = useContext(ListContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
            Authorization: '{"Token": "-1"}',
          },
          body: JSON.stringify({
            shopID: 11015,
            CityID: -1,
            CollectionCategoryID: -1,
            CollectionID: -1,
            ProductCategoryID: -1,
            TagID: '-1',
            GenderID: '-1',
            FromDate: '-1',
            ToDate: '-1',
            Content: '',
            ProductID: -1,
            Resolution: '500*500',
            Browser: navigator.userAgent,
            IP: '192.168.1.1',
            Host: '192.168.1.1',
            MacAddress: '15:54:21:32:12',
            OS: 'test',
          }),
        }
      );
      const result = await response.json();
      setList({ type: 'all-products', payload: result });
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <ListHeader />
      <Catogries />
      <section className="z-[19] relative bg-white mx-auto px-2 sm:px-1 md:px-28 xl:px-60 lg:px-16 mt-4">
        {list.items.length === 0 && <LoadingSpinner />}
        {list.items.map((item) => (
          <ListItem item={item} />
        ))}
      </section>
    </>
  );
};

export default List;
