import React from 'react';
import { data } from './data';
import Service from './Service';
import SectionTitle from '../UI/typography/SectionTitle';

const Services = (props) => {
  return (
    <section
      id="services"
      className={`${props.style} mx-auto px-2 sm:px-1 md:px-1 xl:px-60 lg:px-40 bg-[#F3F4F6] pt-8 pb-12 flex flex-col gap-10 relative z-[19]`}
    >
      <SectionTitle
        align={'center'}
        title={'خدمات و تفریحات'}
        des={'هر آن چه در سفر مورد نیاز شماست'}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
