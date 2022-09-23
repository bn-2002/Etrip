import React from 'react';
import UserIcon from '../../../icons/UserIcon';
import { useDarkMode } from '../../../../store/DarkModeContext';

const LoginBtn = () => {
  const {darkMode} = useDarkMode();
  return (
    <button className={` px-5 py-[.4rem] text-sm flex items-center rounded-[100px] justify-center  mx-2 border duration-500 ${darkMode ? 'bg-slate-800 border-slate-500' : 'bg-white border-white'}`}>
      <span className={`hidden gap-2 mx-2 mb-1 text-base font-main md:block ${darkMode ? 'text-white' : 'text-black'}`}>
        ورود / ثبت نام
      </span>
      <UserIcon />
    </button>
  );
};

export default LoginBtn;

