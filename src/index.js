import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './store/CartContext';
import { ListProvider } from './store/ListContext';
import { FilterProvider } from './store/FilterContext';
import { HomeProvider } from './store/HomeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
      <ListProvider>
        <CartProvider>
          <FilterProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FilterProvider>
        </CartProvider>
      </ListProvider>
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//TODO
//lazy loading
///memoize
///handle api errors
//scroll snapping
///refactor styles and responsives
////add iransans fonts
////fix slider
////animations
///add sass
///learn redux toolkit
///add addToCart and removeFromCart function to CartContext
////get Home data from Api

