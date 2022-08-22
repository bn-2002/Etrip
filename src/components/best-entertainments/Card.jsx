import React from 'react';

const Card = (props) => {
  return (
    <div className="relative w-[250px] h-full">
      <img src={props.img} at={props.des} className=" w-full rounded-lg" />
      {/* <div>%{props.off}</div>
        <h5>{props.place}</h5>
        <span>{props.des}</span> */}
    </div>
  );
};

export default Card;
