import React, { useReducer } from 'react';

const ListContext = React.createContext();

export const ListProvider = (props) => {
  const dispatcher = (state, action) => {
    if (action.type === 'all-products') {
      return {
        items: action.payload.products,
      };
    }
  };

  const initialValue = {
    items: [],
  };

  let [list, setList] = useReducer(dispatcher, initialValue);

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
