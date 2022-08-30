import React from 'react';

const Paragraph = ({ text }) => {
  const paragraph = text.replace('<o:p></o:p>', '');
  return paragraph.split('<br>').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
};

export default Paragraph;
