import React from 'react';

const Card = (props) => {
  return (
    <div className="relative w-[250px] h-full">
      <img
        src={props.img}
        at={props.des}
        className="z-50 w-full border border-red-800 rounded-lg "
      />
      <div className="absolute p-2 text-[17px] text-white bg-[#e92444] rounded-md top-2 left-2">
        %{props.off}
      </div>
      <div className="absolute top-[100px] right-0 text-sm ">
        <h5>{props.place}</h5>
        <span>{props.des}</span>
        <div className="w-[90%] h-[2px] bg-white"></div>
      </div>
    </div>
  );
};

export default Card;
