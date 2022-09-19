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
  //////////change category id
  if (action.type === 'filter-catogery') {
    return {
      ...state,
      requestConfig: {
        ...state.requestConfig,
        ProductCategoryID: action.payload.value,
      },
    };
  }

  ////initialize context by fetch all items
  if (action.type === 'initialize') {
    return {
      ...action.payload.initialValue,
    };
  }

  ///handle drop down changes in products and filter time and date
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

  ////filter list
  else if (action.type === 'filter-list') {
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

    return {
      ...state,
      allItems: allItems,
      availableItems: availableItems,
      requestConfig: action.payload.newConfig,
      isLoading: false,
    };
  }

  ///set loading to true (it is true exactly the time between asking for new data and fetch new data)
  else if (action.type === 'is-loading') {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === 'load-more-data') {
    console.log('action.payload.newData: ', action.payload.newData);

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

    if (state?.allItems) {
      return {
        ...state,
        allItems: [...state.allItems, ...allItems],
        availableItems: [...state.availableItems, ...availableItems],
      };
    } else {
      return {
        ...state,
        allItems: allItems,
        availableItems: availableItems,
      };
    }
  }
};

export const ListProvider = ({ children }) => {
  const { sendRequest } = useFetch();

  //this function send new request to server with new config
  let data;
  const filterList = useCallback(
    async (requestConfig, type, value) => {
      data = undefined;

      let newConfig;

      if (type === 'change-product-catogery') {
        newConfig = {
          ...requestConfig,
          ProductCategoryID: value,
          CityID: -1,
          CollectionID: -1,
          CollectionCategoryID: -1,
        };
      }

      if (type === 'content') {
        newConfig = {
          ...requestConfig,
          Content: value,
          ProductCategoryID: -1,
        };
      }

      if (type === 'reset-config') {
        newConfig = {
          CityID: -1,
          CollectionID: -1,
          CollectionCategoryID: -1,
          ProductCategoryID: -1,
          TagID: '-1',
          GenderID: '-1',
          FromDate: -1,
          ToDate: -1,
          Content: '',
          ProductID: -1,
        };
      }

      if (type === 'apply-filter') {
        newConfig = value;
      }

      data = await sendRequest(
        'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
        newConfig
      );

      if (data) {
        dispatchList({
          type: 'filter-list',
          payload: {
            newConfig: newConfig,
            newData: data.Product,
          },
        });
      }
    },
    [data]
  );

  const [ListState, dispatchList] = useReducer(listReducer, {});

  ////these use Effect set initial State by snding request to server to get all collectionProducts and filterItems
  const initialValue = {
    allItems: [], ///this array gathers filtered all items
    availableItems: [], ///this array gathers arrays of names and dates of each item and we display them
    requestConfig: {
      CityID: -1,
      CollectionID: -1,
      CollectionCategoryID: -1,
      ProductCategoryID: -1,
      TagID: '-1',
      GenderID: '-1',
      FromDate: -1,
      ToDate: -1,
      Content: '',
      ProductID: -1,
    }, ///this is config that is sent to api call includes {collectionID,cityID,...}
    filterList, ///function that is called when we want to filter products
    isLoading: false,
  };

  ///////////////fetch initial Data and set to initialValue.filterListInfo and initialValue.allItems and initialValue.availableItems
  let result;
  useEffect(async () => {
    result = await sendRequest(
      'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
      initialValue.requestConfig
    );

    if (result) {
      ///set availableItems , allItems
      result.Product.forEach((item) => {
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

          ///This is unique ID for each product
          const productID = `${item.CollectionID}_${item.ID}_${item.Feature?.length}_${item.CityID}`;

          const itemInfo = {
            productID: productID,
            namesArray: names,
            timesArray: times,
            datesArray: dates,
            selectedName: names && names[0],
            selectedTime: times && times[0],
            selectedDate: dates && dates[0],
            basePrice: item?.Feature && item?.Feature[0]?.BasePrice,
            finalPrice: item?.Feature && item?.Feature[0]?.FinalPrice,
            collectionID: item.CollectionID,
          };

          initialValue.allItems.push({
            ...item,
            productID: productID,
          });
          initialValue.availableItems.push(itemInfo);
        }
      });

      ///displatch data to reducer function to set state
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
