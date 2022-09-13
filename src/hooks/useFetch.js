import React, { useState, useCallback } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (url, config) => {
    // console.log('config : ', config);

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
          ...config,
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

///gsap
///react window react virtualize
/////////lazy loading
