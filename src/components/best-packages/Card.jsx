import React from 'react';

const Card = (props) => {
  return (
    <div className="relative w-[250px] h-full">
      <img src={props.img} at={props.des} className=" w-full rounded-lg" />
    </div>
  );
};

export default Card;
