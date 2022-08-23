import React from 'react';

const CatogryItem = (props) => {
  return (
    <div className="mr-2 p-2 border rounded-full inline-block w-fit h-[50px]">
      {props.name}
    </div>
  );
};

export default CatogryItem;
// p-2 border rounded-full d-500 mx-2  w-max max-h-min