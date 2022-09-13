import React, { useReducer, useContext, createContext } from 'react';

const FilterStateContext = createContext();

const initialValue = {
  city: { name: 'شهر', id: -1 },
  productCategory: { name: 'دسته بندي', id: -1 },
  collection: { name: 'مجموعه', id: -1 },
  collectionCategory: { name: 'زيردسته', id: -1 },
  tags: [],
  genderTypes: [],
  startDate: '-1',
  endDate: '-1',
};

const filterReducer = (state, action) => {
  if (action.type === 'update-filter-form-data') {
    return action.payload;
  }
  if (action.type === 'reset-form') {
    return initialValue;
  }
};

export const FilterProvider = ({ children }) => {
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
