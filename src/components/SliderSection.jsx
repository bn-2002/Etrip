import React from 'react';
import Slider from './UI/slider/Slider';
import Card from './UI/card/Card';
import SectionTitle from './UI/typography/SectionTitle';
import { useHomeInfo } from '../store/HomeContext';
import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerSectionHeader,
} from 'react-shimmer-effects';

const SliderSection = ({ sectionId, index }) => {
  const homeInfo = useHomeInfo();

  return (
    <section
      id={sectionId}
      className="py-6 mx-auto sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[19] relative bg-white"
    >
      {/* SHIMMER EFFECT */}
      {!homeInfo && (
        <div className="h-full w-full">
          <ShimmerSectionHeader subTitle={false} />
          <ShimmerText
            line={1}
            gap={10}
            className={'w-[260px] relative bottom-5'}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4].map(() => {
              return <ShimmerThumbnail height={340} rounded />;
            })}
          </div>
        </div>
      )}

      {homeInfo && (
        <>
          <SectionTitle
            align={'right'}
            title={homeInfo.Module[index].Name}
            des={homeInfo.Module[index].Description}
          />
          <Slider data={homeInfo.Module[index].Item} card={Card} />
        </>
      )}
    </section>
  );
};

export default SliderSection;
