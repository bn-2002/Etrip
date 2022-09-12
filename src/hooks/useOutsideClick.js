import React,{useCallback,useEffect} from "react";

const useOutsideClick = (callback) => {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref;
  };

  export default useOutsideClick;