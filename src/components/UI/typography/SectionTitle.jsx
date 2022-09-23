import React from 'react';
import { useDarkMode } from '../../../store/DarkModeContext';

const SectionTitle = ({ title, des, align }) => {

  const {darkMode} = useDarkMode();

  return (
    <div
      className={`flex flex-col gap-2 title ${
        align === 'center' ? 'text-center' : 'items-start'
      }`}
    >
      <h1
        className={`text-3xl  ${darkMode? 'text-slate-300' :  'text-[#585858]' } font-bold ${
          align === 'right' ? 'pr-2' : ''
        }`}
      >
        {title}
      </h1>
      <div
        className={`flex items-center justify-center gap-1 ${
          align === 'right' ? 'pr-2' : ''
        } title-des`}
      >
        {align === 'center' && (
          <div className="h-[1px] w-[20px] bg-red-600"></div>
        )}
        <h4 className="text-red-600 text-[17px]">{des}</h4>
        {align === 'center' && (
          <div className="h-[1px] w-[20px] bg-red-600"></div>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
