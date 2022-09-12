import React, { useReducer, useContext, createContext } from 'react';

const FilterStateContext = createContext();

const initialValue = {
  city: 'شهر',
  productCategory: 'دسته بندي',
  collection: 'مجموعه',
  collectionCategory: 'زيردسته',
  tags: [],
  genderTypes: [],
  startDate: 'از تاريخ',
  endDate: 'تا تاريخ',
};

const filterReducer = (state, action) => {
  if (action.type === 'update-filter-form-data') {
    console.log('action.payload : ', action.payload);
    return action.payload;
  }
  if (action.type === 'reset-form') {
    return initialValue
  };
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
