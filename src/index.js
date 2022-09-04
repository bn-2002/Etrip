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
//lazy loading
// render list by catogries
///filter by filter Form
///login and sign up page
////Cart page (pardakht)
///memoize
///handle api errors
////reame files
//scroll snapping
///refactor styles and responsives
////add iransans fonts
////fix slider
////animations
///add sass
///create useFetch hook
///learn redux toolkit
///add addToCart and removeFromCart function to CartContext


///CollectionID: 100
//CollectionName: "کلوپ تفریحات دریایی و غواصی نگین فارس"

// CollectionID: 102
// CollectionName: "تور تفریحی"

// CollectionID: 103
// CollectionName: "پدیده شاندیز"