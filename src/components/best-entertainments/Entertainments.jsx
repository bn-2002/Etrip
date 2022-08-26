import React from 'react';
import Slider from '../UI/slider/Slider';
import { data } from './data';
import Card from './Card';
import SectionTitle from '../UI/typography/SectionTitle';

const Entertainments = () => {
  return (
    <section
      id="entertainments"
      className="py-6 mx-auto sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[19] relative bg-white"
    >
      <SectionTitle
        align={'right'}
        title={'محبوب ترين تفريحات '}
        des={'هر آنچه از بهترين ها و محبوب ترين ها'}
      />
      <Slider data={data} card={Card} />
    </section>
  );
};

export default Entertainments;
