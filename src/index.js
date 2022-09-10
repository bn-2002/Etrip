import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './store/CartContext';
import { ListProvider } from './store/ListContext';
import { FilterProvider } from './store/FilterContext';

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <CartProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CartProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//TODO
//lazy loading
///login and sign up page
////Cart page (pardakht)
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
///....

