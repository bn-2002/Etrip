import React from 'react';
import parse from 'html-react-parser';
import { useDarkMode } from '../../store/DarkModeContext';

const Description = ({ showDetails, description }) => {

  const {darkMode} = useDarkMode();

  description = description
    .replace(`background:white;`, '')
    .replace('<o:p></o:p>', ' ');

  return (
    <div
      className={` ${
        showDetails
          ? 'max-h-[400px] scale-y-1 opacity-1 my-2'
          : 'max-h-0 scale-y-0 opacity-0 '
      }  overflow-hidden transition-all duration-500 ease origin-top rounded-lg ${darkMode? 'bg-slate-700 text-white' : 'bg-[#f6f6f6] text-black'} `}
    >
      <div className={`px-4 py-3 leading-6 ${darkMode? 'bg-slate-700 text-white' : 'bg-[#f6f6f6] text-black'}  `}>
        <ul>{parse(description)}</ul>
      </div>
    </div>
  );
};

export default Description;

