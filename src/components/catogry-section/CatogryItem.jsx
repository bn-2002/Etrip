import React from 'react';
import { Link } from 'react-router-dom';

const CatogryItem = ({ name, id }) => {
  return (
    <div className=" py-1 px-2 h-auto rounded-full border-[#e5e5ea] border relative  w-auto inline text-center ">
      {/* تمام موارد */}
      {id === 1 && (
        <Link to="/list">
          <span className="whitespace-nowrap">{name}</span>
        </Link>
      )}

      {id !== 1 && <span className=" whitespace-nowrap">{name}</span>}
    </div>
  );
};

export default CatogryItem;
