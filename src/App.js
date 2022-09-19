import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Error from './pages/Error';
import SharedLayout from './components/Layout/header/SharedLayout';

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
  );
}

export default App;

///////handle error :/  happen when scroll thumbnail is not up //BUG

////////why filter doesnt work properly for scrolling ?
////////ask for amount that should add to ProductId
/////////////lazy loading doest work in search and mabye filter

///////some product items has same key!
///////Close filterr form by click on apply filter button
///////////minimize count of choose ofeach product :/ 1000?//TODO

///react intersection to make products empty div

////////////go to list page after filter

///memoize
///handle api errors

////fix slider(scroll snapping)
///////////////Animations(gsap)
///add sass

