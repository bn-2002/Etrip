import React from 'react';
import UserIcon from '../../icons/UserIcon';

const LoginBtn = () => {
  return (
    <button className=" px-5 py-3 text-sm flex items-center rounded-[100px] justify-center bg-white mx-2">
      <span className="mx-2 mb-1 text-xs font-main gap-2 hidden md:block ">
        ورود / ثبت نام
      </span>
      <UserIcon />
    </button>
  );
};

export default LoginBtn;
