import React, { useContext, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import ListContext from './store/ListContext';
import { v4 as uuidv4 } from 'uuid';
import { useDispatchItemsInfo } from './store/ItemsInfoContext';

function App() {
  const { setList } = useContext(ListContext);
  const dispatchItemsInfo = useDispatchItemsInfo();

  const fetchData = useCallback(async () => {
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

    /////create uniqe id for each feature
    let products = [];
    result.Product.forEach((product) => {
      const uniqeId = uuidv4();
      products.push({
        ...product,
        productID: uniqeId,
      });
    });

    setList({ type: 'all-products', payload: { products: products } });
    dispatchItemsInfo({
      type: 'all-products',
      payload: { products: products },
    });
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//scroll snapping

