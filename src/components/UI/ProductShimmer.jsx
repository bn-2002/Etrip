import React from 'react';
import Shimmer from 'react-shimmer-effect';

const ProductShimmer = () => {
  return (
    <section
      className={` my-16 mx-[3rem]  min-h-min sm:mx-16 md:mx-[5rem] lg:mx-[4rem] xl:mx-[12rem] shadow-4xl rounded-md lg:flex-row flex gap-2 flex-col-reverse`}
    >
      {/* PRODUCT INFO SECTION */}
      <div className="flex gap-3 w-full lg:w-2/3 border shadow-6xl p-2 flex-col justify-between">
        <div className=" flex gap-2 h-1/3 flex-col sm:flex-row">
          <Shimmer>
            <div className=" h-[30px] md:h-[37px] w-full sm:w-1/2 rounded-md"></div>
          </Shimmer>
          <Shimmer>
            <div className=" h-[30px] md:h-[37px] w-full sm:w-1/2 rounded-md"></div>
          </Shimmer>
        </div>

        <div className=" flex gap-2 h-1/3 flex-col sm:flex-row ">
          <div className="flex w-full md:w-1/2 gap-2  flex-col md:flex-row">
            <Shimmer>
              <div className=" h-[30px] md:h-[37px] w-full md:w-1/2 rounded-md"></div>
            </Shimmer>
            <Shimmer>
              <div className=" h-[30px] md:h-[37px] w-full md:w-1/2 rounded-md"></div>
            </Shimmer>
          </div>
          <div className="flex w-full md:w-1/2 gap-2 flex-col md:flex-row">
            <Shimmer>
              <div className=" h-[30px] md:h-[37px] w-full md:w-1/2 rounded-md"></div>
            </Shimmer>
            <Shimmer>
              <div className=" h-[30px] md:h-[37px] w-full md:w-1/2 rounded-md"></div>
            </Shimmer>
          </div>
        </div>

        <div className="flex gap-2 justify-between h-1/3 flex-col sm:flex-row">
          <Shimmer>
            <div className="w-full sm:w-1/6 h-[30px] md:h-[40px] rounded-md"></div>
          </Shimmer>
          <Shimmer>
            <div className="w-full sm:w-1/4 h-[30px] md:h-[40px] rounded-md"></div>
          </Shimmer>
        </div>
      </div>

      {/* IMAGE WRAPPER SECTION */}
      <div className="flex justify-between items-end rounded-md shadow-6xl h-[170px] sm:h-[260px] md:h-[340px] lg:h-[170px]  border w-full lg:w-1/3 p-2">
        <div className="flex h-full flex-col gap-1 justify-between">
          <Shimmer>
            <div className="h-[45px] w-[45px] sm:h-[70px] sm:w-[70px]  md:h-[90px] md:w-[90px] lg:h-[45px] lg:w-[45px] rounded-full" />
          </Shimmer>
          <Shimmer>
            <div className="h-[45px] w-[45px] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px] lg:h-[45px] lg:w-[45px] rounded-full" />
          </Shimmer>
          <Shimmer>
            <div className="h-[45px] w-[45px] sm:h-[70px] sm:w-[70px] md:h-[90px] md:w-[90px] lg:h-[45px] lg:w-[45px] rounded-full" />
          </Shimmer>
        </div>
        <div className="flex flex-col justify-between h-full">
          <Shimmer>
            <div className="h-[25px] w-[70px] relative left-2 rounded-md" />
          </Shimmer>
          <Shimmer>
            <div className="h-[25px] w-[100px] rounded-md" />
          </Shimmer>
        </div>
      </div>
    </section>
  );
};

export default ProductShimmer;
