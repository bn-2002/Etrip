import React, { useReducer, useContext, createContext } from 'react';

const ListStateContext = createContext();
const ListDispatchContext = createContext();

const listReducer = (state, action) => {
  if (action.type === 'all-products') {
    const initialValue = {
      allItems: [], ///this array gathers filtered all items
      availableItems: [], ///this array gathers filtered available items
      allItemsContainer: [], //this array gathers all all items
      availableItemsContainer: [], ///this array gathers all available items
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
          collectionID: item.CollectionID,
        };

        initialValue.allItems.push(item);
        initialValue.allItemsContainer.push(item);
        initialValue.availableItems.push(itemInfo);
        initialValue.availableItemsContainer.push(itemInfo);
      }
    });

    return initialValue;
  } else if (action.type.startsWith('change')) {
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
  } else if (action.type === 'filter-list') {
    const newAllItemsList = state.allItemsContainer.filter(
      (product) => product.CollectionID === action.payload.collectionID
    );

    const newAvailableItems = state.availableItemsContainer.filter(
      (product) => product.collectionID === action.payload.collectionID
    );
    return {
      ...state,
      availableItems: newAvailableItems,
      allItems: newAllItemsList,
    };
  } else if (action.type === 'show-all-products') {
    const newAvailableItems = state.availableItemsContainer;
    const newAllItemsList = state.allItemsContainer;
    return {
      ...state,
      availableItems: newAvailableItems,
      allItems: newAllItemsList,
    };
  }
};

export const ListProvider = ({ children }) => {
  const initialValue = {
    allItems: [],
    availableItems: [], ///info that we see in screen
  };
  const [ListState, dispatchList] = useReducer(listReducer, initialValue);

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
