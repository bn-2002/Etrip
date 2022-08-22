import React from 'react';
import Slider from '../UI/slider/Slider';
import { data } from './data';
import Card from './Card';

const Entertainments = () => {
  return (
    <div className="py-6 mx-auto sm:px-1 md:px-1 xl:px-80 lg:px-40">
      <div className="flex flex-col items-end gap-2 title">
        <h1 className="text-2xl ">محبوب ترين تفريحات</h1>
        <div className="flex items-center justify-center gap-1 title-des ">
          <h4 className="text-sm text-red-600">
            هر آنچه از بهترين ها و محبوب ترين ها
          </h4>
        </div>
        <Slider data={data} card={Card} />
      </div>
    </div>
  );
};

export default Entertainments;
