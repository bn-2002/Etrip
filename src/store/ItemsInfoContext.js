import React, { useReducer, useContext, createContext } from 'react';

const ItemsInfoStateContext = createContext();
const ItemsInfoDispatchContext = createContext();

const infoReducer = (state, action) => {
  if (action.type === 'all-products') {
    const initialValue = {
      allItems: [],
      availableITems: [],
    };

    action.payload.products.forEach((item) => {
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

        const itemInfo = {
          id: item.productID,
          namesArray: names,
          timesArray: times,
          datesArray: dates,
          selectedName: names && names[0],
          selectedTime: times && times[0],
          selectedDate: dates && dates[0],
          basePrice: item.Feature && item.Feature[0].BasePrice,
          finalPrice: item.Feature && item.Feature[0].FinalPrice,
        };

        initialValue.allItems.push(item);
        initialValue.availableITems.push(itemInfo);
      }
    });

    return initialValue;
  } else {
    const newState = { ...state };

    ///find product index
    const productIndex = newState.allItems.findIndex(
      (item) => item.productID === action.payload.productID
    );

    if (action.type === 'change-name') {
      //// set new selected name
      newState.availableITems[productIndex].selectedName = action.payload.name;

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
      newState.availableITems[productIndex].basePrice =
        newState.allItems[productIndex].Feature[featureIndex].BasePrice;
      newState.availableITems[productIndex].finalPrice =
        newState.allItems[productIndex].Feature[featureIndex].FinalPrice;
      newState.availableITems[productIndex].selectedDate = dates[0];
      newState.availableITems[productIndex].datesArray = dates;
      newState.availableITems[productIndex].selectedTime = times[0];
      newState.availableITems[productIndex].timesArray = times;
    }

    if (action.type === 'change-date') {
      ////set selected date
      newState.availableITems[productIndex].selectedDate = action.payload.date;

      ///find feature index
      const featureIndex = newState.allItems[productIndex].Feature.findIndex(
        (item) =>
          item.Name === newState.availableITems[productIndex].selectedName
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
      newState.availableITems.selectedTime = times[0];
      newState.availableITems.timesArray = times;
    }

    if (action.type === 'change-time') {
      ///update selected Time
      newState.availableITems[productIndex].selectedTime = action.payload.time;
    }
    return { ...newState };
  }
};

export const ItemsInfoProvider = ({ children }) => {
  const initialValue = {
    allItems: [],
    availableITems: [],
  };
  const [infoState, dispatchInfo] = useReducer(infoReducer,initialValue);

  return (
    <ItemsInfoDispatchContext.Provider value={dispatchInfo}>
      <ItemsInfoStateContext.Provider value={infoState}>
        {children}
      </ItemsInfoStateContext.Provider>
    </ItemsInfoDispatchContext.Provider>
  );
};

export const useItemsInfo = () => useContext(ItemsInfoStateContext);
export const useDispatchItemsInfo = () => useContext(ItemsInfoDispatchContext);
