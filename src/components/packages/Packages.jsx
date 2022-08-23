import React from 'react';
import {
  PackageImg1,
  PackageImg2,
  PackageImg3,
  PackageImg4,
  PackageImg5,
  PackageImg6,
} from './data';

const Packages = () => {
  return (
    <div className="mx-auto px-1 sm:px-1 md:px-1 xl:px-40 lg:px-30 bg-[#F3F4F6] pt-8 pb-12 flex flex-col gap-10 mt-8">
      <div className="flex flex-col gap-2 text-center title">
        <h1 className="text-3xl text-[#585858] font-bold "> پکیج ها</h1>
        <div className="flex items-center justify-center gap-1 title-des ">
          <div className="h-[1px] w-[20px] bg-red-600"></div>
          <h4 className="text-xl text-red-600">مجموعه ای از پکیج های هیجانی</h4>
          <div className="h-[1px] w-[20px] bg-red-600"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-around gap-3">
        <img src={PackageImg1} alt="" />
        <img src={PackageImg2} alt="" />
        <img src={PackageImg3} alt="" />
        <img src={PackageImg4} alt="" />
        <img src={PackageImg5} alt="" />
        <img src={PackageImg6} alt="" />
      </div>
    </div>
  );
};

export default Packages;
