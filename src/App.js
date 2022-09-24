import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Cart from './pages/Cart';
import Error from './pages/Error';
import SharedLayout from './components/Layout/header/SharedLayout';
import { useDarkMode } from 'usehooks-ts';

function App() {

  const {darkMode} = useDarkMode();

  return (
    <div className = {`${darkMode? 'bg-slate-800' : '' }`}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;



///////Close filterr form by click on apply filter button

///react intersection to make products empty div

////////////go to list page after filter

///memoize
///handle api errors

////fix slider(scroll snapping)
///////////////Animations(gsap)
///add sass

