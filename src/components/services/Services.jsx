import React ,{useRef , useEffect}from 'react';
import Service from './Service';
import SectionTitle from '../UI/typography/SectionTitle';
import { useHomeInfo } from '../../store/HomeContext';
import { useList, useDispatchList } from '../../store/ListContext';
import { useDarkMode } from '../../store/DarkModeContext';
// import { gsap } from "gsap";


import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerSectionHeader,
} from 'react-shimmer-effects';

const Services = ({ style }) => {
  const homeInfo = useHomeInfo();
  const list = useList();
  const dispatchList = useDispatchList();
  const {darkMode} = useDarkMode();
  // const serviceRef = useRef();

  // useEffect(() => {
  //   gsap.from(serviceRef.current, {
  //     // duration: 1,
  //     scale:2,
  //   });

  //   gsap.to(serviceRef.current, {
  //     // duration: 1,
  //     scale:1,
  //   });

  // });


  const applyFiltersHandler = (service) => {
    /////////it changes vatogry id in requestConfig
    dispatchList({
      type: 'filter-catogery',
      payload: {
        value: service.ProductCategoryID,
      },
    });

    ///////////set loading true
    dispatchList({
      type: 'is-loading',
    });

    // //////////////change config in list context
    list.filterList(list.requestConfig, 'apply-filter', {
      CityID: service.CityID,
      CollectionID: service.CollectionID,
      CollectionCategoryID: service.CollectionCategoryID,
      ProductCategoryID: service.ProductCategoryID,
      TagID: '-1',
      GenderID: '-1',
      FromDate: -1,
      ToDate: -1,
      Content: '',
      ProductID: -1,
    });
  };

  return (

    <section
      // ref={serviceRef}
      id="services"
      className={` serivce ${style} ${
        homeInfo ? `${darkMode ? 'bg-slate-900' : 'bg-[#F3F4F6]'}` : 'bg-white'
      } mx-auto duration-500 px-2 sm:px-1 md:px-1 xl:px-60 lg:px-40 pt-8 pb-12 flex flex-col gap-10 relative z-[19]`}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element) => {
              return <ShimmerThumbnail key={element} height={175} rounded />;
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
            {homeInfo.Module[2].Item.map((service,i) => {
              return (
                <Service
                 index={i}
                  key={`${service.Alt}${service.ImageURL}`}
                  service={service}
                  onClickHandler={applyFiltersHandler}
                />
              );
            })}
          </div>
        </>
      )}
    </section>

  );
};

export default Services;
