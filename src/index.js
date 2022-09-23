import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './store/CartContext';
import { ListProvider } from './store/ListContext';
import { FilterProvider } from './store/FilterContext';
import { HomeProvider } from './store/HomeContext';
import { DarkModeProvider } from './store/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
      <ListProvider>
        <CartProvider>
          <FilterProvider>
              <DarkModeProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter> 
              </DarkModeProvider>
          </FilterProvider>
        </CartProvider>
      </ListProvider>
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

