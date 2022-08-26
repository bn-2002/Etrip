import React from 'react';

const Service = ({ service }) => {
  return (
    <div
      className="relative mx-auto mt-4 transition-all cursor-pointer group"
      key={service.id}
    >
      <div className="relative z-[19]">
        <img src={service.img} alt="" className="shadow-xl rounded-[10px]" />
        <div className="absolute flex flex-col h-[90%] justify-around top-2 left-3">
          <p className="text-[#575757] text-[17px] sm:text-[20px] font-bold">
            {service.title}
          </p>
          <div className="w-[100px]">
            <span className="text-[13px] sm:text-[16px] text-[#626161]">
              {service.des}
            </span>
          </div>
          <button className="px-3 py-1 text-white bg-[#E92444] rounded-2xl text-[13px] sm:text-[16px] hover:bg-[##CA213D] w-20">
            « مشاهده
          </button>
        </div>
      </div>
      <div>
        <div className="transition-all duration-500 ease-in-out absolute top-0 left-0 w-full h-full bg-gray-200 rounded-[10px] rotate-6 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-105"></div>
        <div className="transition-all duration-500 ease-in-out absolute top-0 left-0 w-full h-full bg-gray-300 rounded-[10px] rotate-[10deg]  opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"></div>
        <div className="transition-all duration-500 ease-in-out absolute top-0 left-0 w-full h-full bg-gray-200 -rotate-[10deg] rounded-[10px] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"></div>
      </div>
    </div>
  );
};

export default Service;
