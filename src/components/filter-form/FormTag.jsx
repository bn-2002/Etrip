import React, { useState, useEffect } from 'react';
import { search } from '../../helpers/helper';

const FormTag = ({ tag, clickHandler, tags }) => {
  const [, isExists] = search(tag.ID, tags);
  const [clicked, setClicked] = useState(isExists);

  useEffect(() => {
    setClicked(() => isExists);
  }, [isExists]);

  const tagclickHandler = () => {
    setClicked((prevState) => !prevState);
    clickHandler(tag.ID);
  };

  return (
    <div
      onClick={tagclickHandler}
      className={`  ${
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
