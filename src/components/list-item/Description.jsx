import React from 'react';
import Paragraph from './Paragraph';

const Description = ({ showDetails, description }) => {
  let parser = new DOMParser();
  let htmlDoc;

  htmlDoc = parser.parseFromString(
    `<html><head><title>titleTest</title></head><body>${description}</body></html>`,
    'text/html'
  );

  const list = Array.from(htmlDoc.getElementsByTagName('span'));

  let text = '';
  if (list) {
    for (let item of list) {
      text += item.innerHTML;
    }
  }

  return (
    <div
      className={` ${
        showDetails
          ? 'max-h-[400px] scale-y-1 opacity-1 my-2'
          : 'max-h-0 scale-y-0 opacity-0 '
      }  overflow-hidden transition-all duration-500 ease origin-top bg-[#f6f6f6] text-black rounded-lg`}
    >
      <div className="px-4 py-3">
        <Paragraph text={text} />
      </div>
    </div>
  );
};

export default Description;
