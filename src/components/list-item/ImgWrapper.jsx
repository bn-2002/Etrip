import React, { useState } from 'react';
import ImageContainer from '../icons/ImageContainer';

const ImgWrapper = ({ imgs }) => {
  const initialImgState = {
    firstImg: {
      order: 1,
    },
    secondImg: {
      order: 2,
    },
    thirdImg: {
      order: 3,
    },
  };

  const [imgState, setImgState] = useState(initialImgState);
  const [imgUrl, setImgUrl] = useState(imgs[0].ImageURL);

  const setImgOrder = (selectedImgOrder, imgOrder) => {
    if (imgOrder === 1) {
      return 1;
    }
    if (imgOrder === 2) {
      if (selectedImgOrder === 3) return 3;
      if (selectedImgOrder === 1) return 1;
    }
    if (imgOrder === 3) {
      return 3;
    }
  };

  const selectFirstImg = () => {
    setImgUrl(imgs[0].ImageURL);
    setImgState((prevImgState) => {
      return {
        firstImg: {
          order: 2,
        },
        secondImg: {
          order: setImgOrder(
            prevImgState.firstImg.order,
            prevImgState.secondImg.order
          ),
        },
        thirdImg: {
          order: setImgOrder(
            prevImgState.firstImg.order,
            prevImgState.thirdImg.order
          ),
        },
      };
    });
  };

  const selectSecondImg = () => {
    setImgUrl(imgs[1].ImageURL);
    setImgState((prevImgState) => {
      return {
        firstImg: {
          order: setImgOrder(
            prevImgState.secondImg.order,
            prevImgState.firstImg.order
          ),
        },
        secondImg: {
          order: 2,
        },
        thirdImg: {
          order: setImgOrder(
            prevImgState.secondImg.order,
            prevImgState.thirdImg.order
          ),
        },
      };
    });
  };

  const selectThirdImg = () => {
    setImgUrl(imgs[2].ImageURL);
    setImgState((prevImgState) => {
      return {
        firstImg: {
          order: setImgOrder(
            prevImgState.thirdImg.order,
            prevImgState.firstImg.order
          ),
        },
        secondImg: {
          order: setImgOrder(
            prevImgState.thirdImg.order,
            prevImgState.secondImg.order
          ),
        },
        thirdImg: {
          order: 2,
        },
      };
    });
  };

  const setImgTopOffset = (order) => {
    switch (order) {
      case 1:
        return 'top-[8%]';
      case 2:
        return 'top-[37.5%]';
      case 3:
        return 'top-[66%]';
    }
  };

  return (
    <div className="box-border rounded-md lg:w-1/3 image-wrapper">
      <div className="relative">
        {' '}
        <img
          src={imgUrl}
          alt=""
          className="box-border w-full h-full mx-auto rounded-md "
        />
        <div className="bg-white px-2 absolute rounded-[3px] bottom-2 left-2">
          سانس خانوادگی
        </div>
        <ImageContainer style={' absolute right-0 top-0'} />
        <div
          onClick={selectFirstImg}
          className={`cursor-pointer transition-all duration-500 absolute right-[2.5%] ${setImgTopOffset(
            imgState.firstImg.order
          )} h-[23%] w-[12%] rounded-full`}
        >
          <img
            src={imgs[0].ThumbnailURL}
            className="w-full h-full rounded-full "
          />
        </div>
        <div
          onClick={selectSecondImg}
          className={`cursor-pointer absolute transition-all duration-500 right-[2.5%] ${setImgTopOffset(
            imgState.secondImg.order
          )}  h-[23%] w-[12%] rounded-full`}
        >
          <img
            src={imgs[1].ThumbnailURL}
            className="w-full h-full rounded-full "
          />
        </div>
        <div
          onClick={selectThirdImg}
          className={`cursor-pointer absolute transition-all duration-500 right-[2.5%] ${setImgTopOffset(
            imgState.thirdImg.order
          )}  h-[23%] w-[12%] rounded-full`}
        >
          <img
            src={imgs[2].ThumbnailURL}
            className="w-full h-full rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default ImgWrapper;
