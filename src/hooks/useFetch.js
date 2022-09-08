import React, { useState, useCallback } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (body) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
            Authorization: '{"Token": "-1"}',
          },
          body: JSON.stringify({
            shopID: 11015,
            CityID: body?.cityID ? body.cityID : -1,
            CollectionCategoryID: body?.collectionCategoryID
              ? body.collectionCategoryID
              : -1,
            CollectionID: body?.collectionID ? body.collectionID : -1,
            ProductCategoryID: body?.productCategoryID
              ? body.productCategoryID
              : -1,
            TagID: body?.tagID ? body.tagID : '-1',
            GenderID: body?.genderID ? body.genderID : '-1',
            FromDate: body?.fromDate ? body.fromDate : '-1',
            ToDate: body?.toDate ? body.toDate : '-1',
            Content: '',
            ProductID: body?.productID ? body.productID : -1,
            Resolution: '500*500',
            Browser: navigator.userAgent,
            IP: '192.168.1.1',
            Host: '192.168.1.1',
            MacAddress: '15:54:21:32:12',
            OS: 'test',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const result = await response.json();

      return result.Product;


    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  });
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;

// const fetchData = async () => {
//   const response = await fetch(
//     'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
//         Authorization: '{"Token": "-1"}',
//       },
//       body: JSON.stringify({
//         shopID: 11015,
//         CityID: 1639,
//         CollectionCategoryID: -1,
//         CollectionID: -1,
//         ProductCategoryID: -1,
//         TagID: '-1',
//         GenderID: '-1',
//         FromDate: '-1',
//         ToDate: '-1',
//         Content: '',
//         ProductID: -1,
//         Resolution: '500*500',
//         Browser: navigator.userAgent,
//         IP: '192.168.1.1',
//         Host: '192.168.1.1',
//         MacAddress: '15:54:21:32:12',
//         OS: 'test',
//       }),
//     }
//   );
//   const result = await response.json();
//   /////create uniqe id for each feature
//   let products = [];
//   result.Product.forEach((product) => {
//     const uniqueID = uuidv4();
//     products.push({
//       ...product,
//       productID: uniqueID,
//     });
//   });
//   products.forEach((item) => {
//     if (item) {
//       let names = [];
//       let dates = [];
//       let times = [];

//       if (item.Feature) {
//         item.Feature.forEach((element) => {
//           names.push(element.Name);
//         });

//         item.Feature[0].DateRang.forEach((feature) => {
//           dates.push(feature.Date);
//         });

//         item.Feature[0].DateRang[0].TimeRange.forEach((feature) => {
//           times.push(feature.Time);
//         });
//       }

//       const itemInfo = {
//         id: item.productID,
//         namesArray: names,
//         timesArray: times,
//         datesArray: dates,
//         selectedName: names && names[0],
//         selectedTime: times && times[0],
//         selectedDate: dates && dates[0],
//         basePrice: item.Feature && item.Feature[0].BasePrice,
//         finalPrice: item.Feature && item.Feature[0].FinalPrice,
//         collectionID: item.CollectionID,
//         cityName: item.cityName,
//       };

//       newState.allItems.push(item);
//       newState.availableItems.push(itemInfo);
//     }
//   });
// };

// fetchData();

// import React, { useState, useEffect } from 'react';

// const useFetch = (body) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);

//   console.log('body : ', body);

//   useEffect(() => {
//     const sendRequest = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
//               Authorization: '{"Token": "-1"}',
//             },
//             body: JSON.stringify({
//               shopID: 11015,
//               CityID: body?.cityID ? body.cityID : -1,
//               CollectionCategoryID: body?.collectionCategoryID
//                 ? body.collectionCategoryID
//                 : -1,
//               CollectionID: body?.collectionID ? body.collectionID : -1,
//               ProductCategoryID: body?.productCategoryID
//                 ? body.productCategoryID
//                 : -1,
//               TagID: body?.tagID ? body.tagID : '-1',
//               GenderID: body?.genderID ? body.genderID : '-1',
//               FromDate: body?.fromDate ? body.fromDate : '-1',
//               ToDate: body?.toDate ? body.toDate : '-1',
//               Content: '',
//               ProductID: body?.productID ? body.productID : -1,
//               Resolution: '500*500',
//               Browser: navigator.userAgent,
//               IP: '192.168.1.1',
//               Host: '192.168.1.1',
//               MacAddress: '15:54:21:32:12',
//               OS: 'test',
//             }),
//           }
//         );

//         if (!response.ok) {
//           throw new Error('Request failed!');
//         }

//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message || 'Something went wrong!');
//       }
//       setIsLoading(false);
//     };
//     console.log('123');
//     sendRequest();
//   }, []);

//   return {
//     isLoading,
//     error,
//     data,
//   };
// };

// export default useFetch;
