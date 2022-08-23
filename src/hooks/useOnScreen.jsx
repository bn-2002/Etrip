import React, { useState, useMemo, useEffect } from 'react';

const useOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(true);

  const callBackFunction = (enteries) => {
    const [entry] = enteries;
    setIsVisible(entry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, optionsMemo]);

  return isVisible;
};

export default useOnScreen;
