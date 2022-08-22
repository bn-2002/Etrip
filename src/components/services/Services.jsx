import React from 'react';
import { data } from './data';

const Services = () => {
  return (
    <div className="mx-auto sm:px-1 md:px-1 xl:px-80 lg:px-40 bg-[#F3F4F6] pt-8 pb-12 flex flex-col gap-10 mt-8">
      <div className="flex flex-col gap-2 text-center title">
        <h1 className="text-2xl ">خدمات و تفریحات</h1>
        <div className="flex items-center justify-center gap-1 title-des ">
          <div className="h-[1px] w-[20px] bg-red-600"></div>
          <h4 className="text-sm text-red-600">
            هرآنچه در سفر مورد نیاز شماست
          </h4>
          <div className="h-[1px] w-[20px] bg-red-600"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 border border-blue-800 border-none">
        {data.map((service) => {
          return (
            <div className="relative mt-4">
              <div className="relative z-50">
                <img
                  src={service.img}
                  alt=""
                  className="shadow-xl rounded-[10px]"
                />
                <div className="absolute flex flex-col gap-2 top-4 left-3">
                  <p className="text-[#575757] text-[16px] font-bold">
                    {service.title}
                  </p>
                  <div className="w-[100px]">
                    <span className="text-[13px] text-[#626161]">
                      {service.des}
                    </span>
                  </div>
                  <button className="px-3 py-1 text-white bg-[#E92444] rounded-2xl text-[11px] hover:bg-[##CA213D] w-20">
                    « مشاهده
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-[10px] scale-105 rotate-6"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-[10px] rotate-[10deg]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 -rotate-[10deg] rounded-[10px]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
