import React from 'react';
import SectionTitle from './UI/typography/SectionTitle';
import { useHomeInfo } from '../store/HomeContext';
import { useDarkMode } from '../store/DarkModeContext';
import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerSectionHeader,
} from 'react-shimmer-effects';

const Packages = () => {
  const homeInfo = useHomeInfo();
  const {darkMode} = useDarkMode();

  return (
    <section
      id="packages"
      className={`${
        homeInfo ? `${darkMode? 'bg-slate-900' : 'bg-[#F3F4F6]'}`  : 'bg-white'
      } z-[19] relative mx-auto px-1 sm:px-1 md:px-1 xl:px-40 lg:px-20  pt-8 pb-12 flex flex-col gap-10`}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((element) => {
              return <ShimmerThumbnail key={element} height={240} rounded />;
            })}
          </div>
        </div>
      )}

      {homeInfo && (
        <>
          <SectionTitle
            align={'center'}
            title={homeInfo.Module[4].Name}
            des={homeInfo.Module[4].Description}
          />
          <div className="flex flex-wrap justify-center gap-3 items-around">
            {homeInfo.Module[4].Item.map((item) => {
              return (
                <div
                  key={`${item.Alt}${item.ImageURL}`}
                  className="overflow-hidden w-fit rounded-2xl"
                >
                  <img
                    src={item.ImageURL}
                    alt={item.Description}
                    className="transition-all duration-700 hover:scale-110"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Packages;
