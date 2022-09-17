import React, { useReducer, useContext, createContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const FilterStateContext = createContext();

const filterReducer = (state, action) => {
  if (action.type === 'update-filter-form-data') {
    return {
      ...state,
      isOpen: true,
      form: action.payload,
    };
  }
  if (action.type === 'reset-form') {
    return {
      ...state,
      isOpen: true,
      form: {
        city: { name: 'شهر', id: -1 },
        productCategory: { name: 'دسته بندي', id: -1 },
        collection: { name: 'مجموعه', id: -1 },
        collectionCategory: { name: 'زيردسته', id: -1 },
        tags: [],
        genderTypes: [],
        startDate: '-1',
        endDate: '-1',
      },
    };
  }
};

export const FilterProvider = ({ children }) => {
  const { sendRequest } = useFetch();

  const initialValue = {
    info: undefined,
    form: {
      city: { name: 'شهر', id: -1 },
      productCategory: { name: 'دسته بندي', id: -1 },
      collection: { name: 'مجموعه', id: -1 },
      collectionCategory: { name: 'زيردسته', id: -1 },
      tags: [],
      genderTypes: [],
      startDate: '-1',
      endDate: '-1',
    },
  };

  ///////////get filterInfo from server
  let filterListInfo;
  useEffect(async () => {
    filterListInfo = await sendRequest(
      'http://webapi.ep7.ir/TourismAPI/GetFilterInfo/',
      {}
    );

    if (filterListInfo) {
      initialValue.info = filterListInfo;
    }
  }, [filterListInfo]);

  const [filter, dispatchFilterForm] = useReducer(filterReducer, initialValue);

  return (
    <FilterStateContext.Provider value={{ filter, dispatchFilterForm }}>
      {children}
    </FilterStateContext.Provider>
  );
};

export const useFilterForm = () => useContext(FilterStateContext);
