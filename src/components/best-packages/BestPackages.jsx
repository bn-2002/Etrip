import React from 'react';
import Slider from '../UI/slider/Slider';
import { data } from './data';
import Card from './Card';
import SectionTitle from '../UI/typography/SectionTitle';

const BestPackages = () => {
  return (
    <section
      id="best-packages"
      className="py-6 mx-auto sm:px-1 md:px-1 xl:px-60 lg:px-40 z-[19] relative bg-white"
    >
      <SectionTitle
        align={'right'}
        title={'برترین مجموعه ها'}
        des={' بهترین مجموعه های تفریحی و گردشگری'}
      />
      <Slider data={data} card={Card} />
    </section>
  );
};

export default BestPackages;
