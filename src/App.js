import React from 'react';
// import Example from './components/UserProfiler';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Error from './pages/Error';
import SharedLayout from './components/Layout/header/SharedLayout';

// const recentCart = localStorage.getItem('cart');
// console.log('cart : ', recentCart);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    // <Example/>
  );
}

export default App;

