import React, { useState, useEffect } from 'react';
import { search } from '../../helpers/helper';
import { useDarkMode } from '../../store/DarkModeContext';

const FormTag = ({ tag, clickHandler, tags }) => {
  const [, isExists] = search(tag.ID, tags);
  const [clicked, setClicked] = useState(isExists);
  const {darkMode} = useDarkMode();

  useEffect(() => {
    setClicked(() => isExists);
  }, [isExists]);

  const tagclickHandler = () => {
    setClicked((prevState) => !prevState);
    clickHandler(tag.ID);
  };

  return (
    <div
      onClick={tagclickHandler}
      className={`${
        clicked
          ? `text-red-500 border-[#e92444] ${darkMode? 'bg-slate-200' : 'bg-slate-100'}`
          : ''
      } ${darkMode ? 'bg-slate-300' : 'bg-gray-100 border-white text-gray-500'} border cursor-pointer  py-1 px-2 rounded-xl`}
    >
      {tag.Name}
    </div>
  );
};

export default FormTag;
