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
          return <img src={item.img} alt={item.des} />;
        })}
      </div>
    </section>
  );
};

export default Packages;
