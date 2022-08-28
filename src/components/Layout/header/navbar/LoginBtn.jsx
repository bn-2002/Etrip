import React from 'react';
import UserIcon from '../../../icons/UserIcon';

const LoginBtn = () => {
  return (
    <button className=" px-5 py-[.4rem] text-sm flex items-center rounded-[100px] justify-center bg-white mx-2">
      <span className="hidden gap-2 mx-2 mb-1 text-base font-main md:block ">
        ورود / ثبت نام
      </span>
      <UserIcon />
    </button>
  );
};

export default LoginBtn;