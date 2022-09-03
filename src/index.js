import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ListProvider } from './store/ListContext';
import { CartProvider } from './store/CartContext';
import { ItemsInfoProvider } from './store/ItemsInfoContext';

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <ItemsInfoProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ItemsInfoProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

