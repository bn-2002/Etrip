import React from 'react';
import parse from 'html-react-parser';

const Description = ({ showDetails, description }) => {
  description = description
    .replace('background:white;', '')
    .replace('<o:p></o:p>', ' ');

  return (
    <div
      className={` ${
        showDetails
          ? 'max-h-[400px] scale-y-1 opacity-1 my-2'
          : 'max-h-0 scale-y-0 opacity-0 '
      }  overflow-hidden transition-all duration-500 ease origin-top bg-[#f6f6f6] text-black rounded-lg`}
    >
      <div className="px-4 py-3 leading-6  bg-[#f6f6f6]">
        <ul>{parse(description)}</ul>
      </div>
    </div>
  );
};

export default Description;
