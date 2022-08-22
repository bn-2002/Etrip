import React from 'react';
import Slider from '../UI/slider/Slider';
import { data } from './data';
import Card from './Card';

const BestPackages = () => {
  return (
    <div className="py-6 mx-auto sm:px-1 md:px-1 xl:px-80 lg:px-40">
      <div className="flex flex-col items-end gap-2 title">
        <h1 className="text-2xl ">برترین مجموعه ها</h1>
        <div className="flex items-center justify-center gap-1 title-des ">
          <h4 className="text-sm text-red-600">
            بهترین مجموعه های تفریحی و گردشگری
          </h4>
        </div>
        <Slider data={data} card={Card} />
      </div>
    </div>
  );
};

export default BestPackages;
