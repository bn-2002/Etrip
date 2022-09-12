import React, { useRef } from 'react';

const useDebounce = () => {
  const timeout = useRef();
  const debounce = (func, delay) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      func();
    }, delay);
  };
  return debounce;
};

export default useDebounce;
