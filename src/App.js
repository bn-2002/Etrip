import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Error from './pages/Error';
import { useLocation } from 'react-router-dom';
import Header from './components/Layout/header/Header';

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Header path={location.pathname}></Header>}>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

