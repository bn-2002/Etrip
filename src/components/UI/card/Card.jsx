import React from 'react';
import './Card.css';

const Card = ({ img, des, discount, place }) => {
  return (
    <div className="relative h-full w-[250px] card rounded-lg">
      <img src={img} at={des} className="w-full h-full rounded-lg " />
      <div className=" absolute left-0 top-0 h-full w-full">
        {discount !== '0' && (
          <div className=" p-2 text-[17px] text-white bg-[#e92444] rounded-lg w-fit absolute left-[5px] top-[5px]">
            %{discount}
          </div>
        )}
        <div className="card-details absolute bottom-[0px] right-0 w-full flex justify-center gap-2 py-2 px-5 flex-col items-start h-1/3 rounded">
          <div className="text-[18px] px-1 rounded bg-[#ada9a98f]">{place}</div>
          <div className="text-[17px] whitespace-nowrap overflow-hidden text-ellipsis w-[90%] text-right">
            {des}
          </div>
          <div className="w-full h-[2px] bg-white self-center "></div>
        </div>
      </div>
    </div>
  );
};
export default Card;
