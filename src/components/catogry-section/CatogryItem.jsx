import React from 'react';

const CatogryItem = (props) => {
  return (
    <div className=" p-2 h-auto rounded-full border-[#e5e5ea] border relative  w-auto inline text-center ">
      <span className=" whitespace-nowrap">{props.name}</span>
    </div>
  );
};

export default CatogryItem;
