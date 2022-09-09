import React, { useReducer, useContext, createContext } from 'react';

const FilterStateContext = createContext();

const filterReducer = (state, action) => {
  if (action.type === 'city') {
    return {
      ...state,
      city: action.payload.value,
    };
  }
  if (action.type === 'collection') {
    return {
      ...state,
      collection: action.payload.value,
    };
  }
  if (action.type === 'start-date') {
    return {
      ...state,
      startDate: action.payload.value,
    };
  }
  if (action.type === 'end-date') {
    return {
      ...state,
      endDate: action.payload.value,
    };
  }
  if (action.type === 'reset-form') {
    return {
      city: 'شهر',
      collection: 'تمام موارد',
      startDate: '-1',
      endDate: '-1',
    };
  }
};

export const FilterProvider = ({ children }) => {
  const initialValue = {
    city: 'شهر',
    collection: 'تمام موارد',
    startDate: '-1',
    endDate: '-1',
  };
  const [filterState, dispatchFilterForm] = useReducer(
    filterReducer,
    initialValue
  );

  return (
    <FilterStateContext.Provider value={{ filterState, dispatchFilterForm }}>
      {children}
    </FilterStateContext.Provider>
  );
};

export const useFilterForm = () => useContext(FilterStateContext);
