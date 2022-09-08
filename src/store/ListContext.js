import React, { useReducer, useContext, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFetch from '../hooks/useFetch';

const ListStateContext = createContext();
const ListDispatchContext = createContext();

const listReducer = (state, action) => {
  ////INITIALIZE CONTEXT VALUE BY FETCH ALL DATA
  if (action.type === 'initialize') {
    console.log('action.payload.initialValue : ', action.payload.initialValue);
    return { ...action.payload.initialValue };
  }

  ///HANDLE DROPDOWN CHANGES IN PRODUCT
  if (action.type.startsWith('change')) {
    const newState = { ...state };

    ///find product index
    const productIndex = newState.allItems.findIndex(
      (item) => item.productID === action.payload.productID
    );

    if (action.type === 'change-name') {
      //// set new selected name
      newState.availableItems[productIndex].selectedName = action.payload.name;

      /////find feature index
      const featureIndex = newState.allItems[productIndex].Feature.findIndex(
        (feature) => feature.Name === action.payload.name
      );

      ////set new dates array based on new feature name
      let dates = [];
      newState.allItems[productIndex].Feature[featureIndex].DateRang.forEach(
        (dateRange) => {
          dates.push(dateRange.Date);
        }
      );

      ////set newtimes array based on new feature (selected name) first time array of first dates array item
      let times = [];

      newState.allItems[productIndex].Feature[
        featureIndex
      ].DateRang[0].TimeRange.forEach((item) => {
        times.push(item.Time);
      });

      /////change selected datesArray and timesArray and date array and prices
      newState.availableItems[productIndex].basePrice =
        newState.allItems[productIndex].Feature[featureIndex].BasePrice;
      newState.availableItems[productIndex].finalPrice =
        newState.allItems[productIndex].Feature[featureIndex].FinalPrice;
      newState.availableItems[productIndex].selectedDate = dates[0];
      newState.availableItems[productIndex].datesArray = dates;
      newState.availableItems[productIndex].selectedTime = times[0];
      newState.availableItems[productIndex].timesArray = times;
    }

    if (action.type === 'change-date') {
      ////set selected date
      newState.availableItems[productIndex].selectedDate = action.payload.date;

      ///find feature index
      const featureIndex = newState.allItems[productIndex].Feature.findIndex(
        (item) =>
          item.Name === newState.availableItems[productIndex].selectedName
      );

      /////find date range index
      const dateRangeIndex = newState.allItems[productIndex].Feature[
        featureIndex
      ].DateRang.findIndex((item) => item.Date === action.payload.date);

      /////set new times array based on new selected date
      let times = [];
      newState.allItems[productIndex].Feature[featureIndex].DateRang[
        dateRangeIndex
      ].TimeRange.forEach((item) => {
        times.push(item.Time);
      });

      /////change selected time and times array
      newState.availableItems.selectedTime = times[0];
      newState.availableItems.timesArray = times;
    }

    if (action.type === 'change-time') {
      ///update selected Time
      newState.availableItems[productIndex].selectedTime = action.payload.time;
    }
    return { ...newState };
  }

  ////FILTER LIST BY CHOOSE FROM CATOGRIES SECTION
  else if (action.type === 'filter-list') {

    console.log('payload : ' , action.payload)

    const newState = {};

    newState.filteredItems = action.payload.newConfig;

    const availableItems = [];
    const allItems = [];

    action.payload.newData.forEach((item) => {
      if (item) {
        let names = [];
        let dates = [];
        let times = [];

        if (item.Feature) {
          item.Feature?.forEach((element) => {
            names.push(element.Name);
          });

          item?.Feature[0]?.DateRang.forEach((feature) => {
            dates.push(feature.Date);
          });

          item?.Feature[0]?.DateRang[0]?.TimeRange?.forEach((feature) => {
            times.push(feature.Time);
          });
        }

        const productID = `${item.CollectionID}_${item.ID}_${item.Feature?.length}_${item.CityID}`;

        const itemInfo = {
          productID: productID,
          namesArray: names,
          timesArray: times,
          datesArray: dates,
          selectedName: names && names[0],
          selectedTime: times && times[0],
          selectedDate: dates && dates[0],
          basePrice: item?.Feature && item?.Feature[0].BasePrice,
          finalPrice: item?.Feature && item?.Feature[0].FinalPrice,
          collectionID: item.CollectionID,
        };

        allItems.push({
          ...item,
          productID: productID,
        });
        availableItems.push(itemInfo);
      }
    });

    newState.allItems = allItems;
    newState.availableItems = availableItems;

    return { ...newState };
  }
};

export const ListProvider = ({ children }) => {
  const initialValue = {
    allItems: [], ///this array gathers filtered all items and use them to show (filtered)
    availableItems: [], ///this array gathers arrays of names and dates of each item
    filteredItems: {},
  };

  const [ListState, dispatchList] = useReducer(listReducer, {});
  const { isLoading, error, sendRequest } = useFetch();
  let result;

  useEffect(async () => {
    console.log('it runs for once');
    result = await sendRequest({});

    if (isLoading) {
      console.log('i am loading ... ');
    } else {
      console.log('result : ', result);

      result.forEach((item) => {
        if (item) {
          let names = [];
          let dates = [];
          let times = [];

          if (item.Feature) {
            item.Feature.forEach((element) => {
              names.push(element.Name);
            });

            item.Feature[0].DateRang.forEach((feature) => {
              dates.push(feature.Date);
            });

            item.Feature[0].DateRang[0].TimeRange.forEach((feature) => {
              times.push(feature.Time);
            });
          }

          const productID = `${item.CollectionID}_${item.ID}_${item.Feature?.length}_${item.CityID}`;

          const itemInfo = {
            productID: productID,
            namesArray: names,
            timesArray: times,
            datesArray: dates,
            selectedName: names && names[0],
            selectedTime: times && times[0],
            selectedDate: dates && dates[0],
            basePrice: item?.Feature && item?.Feature[0].BasePrice,
            finalPrice: item?.Feature && item?.Feature[0].FinalPrice,
            collectionID: item.CollectionID,
          };

          initialValue.allItems.push({
            ...item,
            productID: productID,
          });
          initialValue.availableItems.push(itemInfo);
        }
        initialValue.filteredItems = {
          cityID: -1,
          collectionCategoryID: -1,
          collectionID: -1,
          productCategoryID: -1,
          tagID: '-1',
          genderID: '-1',
          fromDate: '-1',
          toDate: '-1',
          productID: -1,
        };
      });
      console.log('result : ', result);
      console.log('initialVAlue : ', initialValue);
      dispatchList({
        type: 'initialize',
        payload: {
          initialValue: initialValue,
        },
      });
    }
  }, [result]);

  return (
    <ListDispatchContext.Provider value={dispatchList}>
      <ListStateContext.Provider value={ListState}>
        {children}
      </ListStateContext.Provider>
    </ListDispatchContext.Provider>
  );
};

export const useList = () => useContext(ListStateContext);
export const useDispatchList = () => useContext(ListDispatchContext);
