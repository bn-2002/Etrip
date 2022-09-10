import React, { useState, useCallback } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (url, body) => {
    /////this object will pass to fetch function if url is set for getting collection Products
    let bodyInfo = {};
    if (url.endsWith('GetCollectionsProducts/')) {
      bodyInfo = {
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
        Content: body?.content ? body.content : '',
        ProductID: body?.productID ? body.productID : -1,
      };
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
          Authorization: '{"Token": "-1"}',
        },
        body: JSON.stringify({
          shopID: 11015,
          Resolution: '500*500',
          Browser: navigator.userAgent,
          IP: '192.168.1.1',
          Host: '192.168.1.1',
          MacAddress: '15:54:21:32:12',
          OS: 'test',
          ...bodyInfo,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      const result = await response.json();
      return result;
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
