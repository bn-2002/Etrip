import React, { useReducer, useContext, createContext } from 'react';

const cartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const oldState = [...state];
      let newState;

      ////check whether we added this item to the cart list before
      const existingItemIndex = oldState.findIndex(
        (item) => item.uniqueCartItemID === action.payload.item.uniqueCartItemID
      );

      if (existingItemIndex === -1) {
        ////this item is new
        ////add to cart items
        newState = [...oldState, action.payload.item];
      } else {
        ///this item is added to cart before
        ////update existing Item count (plus +1)
        oldState[existingItemIndex] = {
          ...oldState[existingItemIndex],
          count: oldState[existingItemIndex].count + 1,
        };
        newState = [...oldState];
      }

      return newState;
    }

    case 'REMOVE': {
      const oldState = [...state];
      let newState;

      ////find cart item index
      const existingItemIndex = oldState.findIndex(
        (item) => item.uniqueCartItemID === action.payload.item.uniqueCartItemID
      );

      if (oldState[existingItemIndex].count === 1) {
        ///item shold be removed
        oldState.splice(existingItemIndex, 1);
      } else {
        oldState[existingItemIndex] = {
          ///item count shold be decreased
          ...oldState[existingItemIndex],
          count: oldState[existingItemIndex].count - 1,
        };
      }

      newState = [...oldState];
      return newState;
    }

    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
