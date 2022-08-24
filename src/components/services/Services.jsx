import React from 'react';
import { data } from './data';
import Service from './Service';
const Services = (props) => {
  return (
    <div
      className={`${props.style} mx-auto px-2 sm:px-1 md:px-1 xl:px-60 lg:px-40 bg-[#F3F4F6] pt-8 pb-12 flex flex-col gap-10 z-[20]`}
    >
      <div className="flex flex-col gap-2 text-center title">
        <h1 className="text-3xl text-[#585858] font-bold">خدمات و تفریحات</h1>
        <div className="flex items-center justify-center gap-1 title-des ">
          <div className="h-[1px] w-[20px] bg-red-600"></div>
          <h4 className="text-xl text-red-600">
            هرآنچه در سفر مورد نیاز شماست
          </h4>
          <div className="h-[1px] w-[20px] bg-red-600"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
