import React from 'react';
import Service from './Service';
import SectionTitle from '../UI/typography/SectionTitle';
import { useHomeInfo } from '../../store/HomeContext';
import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerSectionHeader,
} from 'react-shimmer-effects';

const Services = ({ style }) => {
  const homeInfo = useHomeInfo();

  return (
    <section
      id="services"
      className={`${style} ${
        homeInfo ? 'bg-[#F3F4F6]' : 'bg-white'
      } mx-auto px-2 sm:px-1 md:px-1 xl:px-60 lg:px-40  pt-8 pb-12 flex flex-col gap-10 relative z-[19]`}
    >
      {/* SHIMMER EFFECT */}
      {!homeInfo && (
        <div className="h-full mx-auto w-full">
          <ShimmerSectionHeader subTitle={false} center />
          <ShimmerText
            line={1}
            gap={10}
            className={'w-[260px] mx-auto relative bottom-5'}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
              return <ShimmerThumbnail height={175} rounded />;
            })}
          </div>
        </div>
      )}

      {homeInfo && (
        <>
          <SectionTitle
            align={'center'}
            title={homeInfo.Module[2].Name}
            des={homeInfo.Module[2].Description}
          />
          <div className="grid gap-4  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {homeInfo.Module[2].Item.map((service) => {
              return <Service key={service.Alt} service={service} />;
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Services;
