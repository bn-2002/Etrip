import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './store/CartContext';
import { ListProvider } from './store/ListContext';

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//TODO
//add shared layout catogries items
////fix filter form drop doen issue
////bring api call to context
////add new reducers function to get handle dispatcheds for filtering(city,type,gender,..)
///in all these steps take care od Cart!!!

///search bar section 
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
///create useFetch hook
///learn redux toolkit
///add addToCart and removeFromCart function to CartContext
///....
