import React, { useReducer, useContext, createContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const HomeInfoStateContext = createContext();

const homeInfoReducer = (state,action) => {
  if (action.type === 'initialize') {
    return {
      ...action.payload.initialValue,
    };
  }
};

export const HomeProvider = ({ children }) => {
  const { sendRequest } = useFetch();

  let initialValue = undefined;
  ///////////get filterInfo from server
  let homeInfo;
  useEffect(async () => {
    homeInfo = await sendRequest(
      'http://webapi.ep7.ir/TourismAPI/GetHomePageInfo',
      {}
    );

    if (homeInfo) {
      initialValue = homeInfo;

      
      
      ///displatch data to reducer function to set state
      dispatch({
        type: 'initialize',
        payload: {
          initialValue: initialValue,
        },
      });
    }
  }, [homeInfo]);

  const [homeInfoState, dispatch] = useReducer(homeInfoReducer, initialValue);

  return (
    <HomeInfoStateContext.Provider value={homeInfoState}>
      {children}
    </HomeInfoStateContext.Provider>
  );
};

export const useHomeInfo = () => useContext(HomeInfoStateContext);
