import React from 'react';
import SectionTitle from '../UI/typography/SectionTitle';
import { data } from './data';

const Packages = () => {
  return (
    <section
      id="packages"
      className="z-[19] relative mx-auto px-1 sm:px-1 md:px-1 xl:px-40 lg:px-30 bg-[#F3F4F6] pt-8 pb-12 flex flex-col gap-10"
    >
      <SectionTitle
        align={'center'}
        title={'پکیج ها'}
        des={'مجموعه ای از پکیج های هیجانی'}
      />
      <div className="flex flex-wrap justify-center gap-3 items-around">
        {data.map((item) => {
          return (
            <div key={item.id} className="overflow-hidden w-fit rounded-2xl">
              <img
                src={item.img}
                alt={item.des}
                className="transition-all duration-700 hover:scale-110"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Packages;
