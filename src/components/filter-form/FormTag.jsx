import React, { useState } from 'react';

const FormTag = ({ tag }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((prevState) => !prevState);
  };
  
  return (
    <div
      onClick={clickHandler}
      className={` ${
        clicked
          ? 'text-[#e92444] border-[#e92444]'
          : 'border-white text-gray-500'
      } border cursor-pointer  bg-gray-100 py-1 px-2 rounded-xl`}
    >
      {tag.Name}
    </div>
  );
};

export default FormTag;
