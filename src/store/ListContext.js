import React, {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react';
import useFetch from '../hooks/useFetch';

const ListStateContext = createContext();
const ListDispatchContext = createContext();

const listReducer = (state, action) => {
  ////INITIALIZE CONTEXT VALUE BY FETCH ALL DATA
  if (action.type === 'initialize') {
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

  ////FILTER LIST
  else if (action.type === 'filter-list') {
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

        ///This is unique ID for each each product
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

    if (!action.payload.search) {
      console.log('we are just filter :)');
      newState.allItems = allItems;
      newState.availableItems = availableItems;
      newState.filterList = state.filterList;
    }


    if (action.payload.search) {
      console.log('we want to also search :)');
      console.log('allItems : ' , allItems)
      const newAllItems = allItems.filter((product) =>
        product.Name.includes(action.payload.keyword)
      );
      
      const newAvailableItems = [];

      newAllItems.forEach((item) => {
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

          ///This is unique ID for each each product
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
          newAvailableItems.push(itemInfo);
        }
      });
      console.log('newAvailableItems : ', newAvailableItems);
      console.log('newAllItems : ', newAllItems);

      newState.allItems = newAllItems;
      newState.availableItems = newAvailableItems;
      newState.filterList = state.filterList;
    }

    return { ...newState };
  }

  // ///SEARCH FOR SPECIFIC PRODUCT OR KEYWORD
  else if (action.type === 'search-list') {
    console.log('we search for :', action.payload.keyword);

    const newAllItems = state.allItems.filter((product) =>
      product.Name.includes(action.payload.keyword)
    );

    const newAvailableItems = [];

    newAllItems.forEach((item) => {
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

        ///This is unique ID for each each product
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

        newAvailableItems.push(itemInfo);
      }
    });

    console.log('newAvailableItems : ', newAvailableItems);

    return {
      ...state,
      allItems: newAllItems,
      availableItems: newAvailableItems,
    };
  }
};

export const ListProvider = ({ children }) => {
  const { isLoading, error, sendRequest } = useFetch();

  const filterList = useCallback(async (filteredItems, type, value) => {
    let newConfig;
    if (type === 'collection') {
      newConfig = {
        ...filteredItems,
        collectionID: value,
      };
    }

    if (type === 'city') {
      newConfig = {
        ...filteredItems,
        cityID: value,
      };
    }

    if (type === 'start-date') {
      newConfig = {
        ...filteredItems,
        fromDate: value,
      };
    }

    if (type === 'end-date') {
      newConfig = {
        ...filteredItems,
        toDate: value,
      };
    }

    if (type === 'reset-config' || type === 'reset-and-search') {
      console.log('salam');
      newConfig = {
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
    }

    const data = await sendRequest(newConfig);

    if (type === 'reset-and-search') {
      console.log('salam');

      dispatchList({
        type: 'filter-list',
        payload: {
          search: true,
          newConfig: newConfig,
          newData: data,
          keyword : value,
        },
      });
    } else {
      dispatchList({
        type: 'filter-list',
        payload: {
          search: false,
          newConfig: newConfig,
          newData: data,
        },
      });
    }
  }, []);

  const initialValue = {
    allItems: [], ///this array gathers filtered all items and use them to show (filtered)
    availableItems: [], ///this array gathers arrays of names and dates of each item
    filteredItems: {},
    filterList: filterList,
  };

  const [ListState, dispatchList] = useReducer(listReducer, {});
  let result;

  useEffect(async () => {
    result = await sendRequest({});

    if (result) {
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

          ///This is unique ID for each each product
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
      initialValue.fetch = sendRequest;
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
