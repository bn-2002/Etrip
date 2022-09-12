import React, { useEffect } from 'react';
import { useState } from 'react';
import { addOrRemoveObject, search } from '../../helpers/helper';

const FormCheckBox = ({ genderType, clickHandler, genderTypes }) => {
  const [, isExists] = search(genderType.ID, genderTypes);

  const [defealt, setDefault] = useState(isExists);

  useEffect(() => {
    setDefault(() => isExists);
  }, [isExists]);

  const handleCheckbox = () => {
    const newArray = addOrRemoveObject(genderType.ID, genderTypes);
    clickHandler(genderType.ID, newArray);
  };

  return (
    <div className=" cursor-pointer flex items-center gap-1">
      <input
        onChange={handleCheckbox}
        id={genderType.ID}
        checked={defealt}
        type="checkbox"
      />
      <label htmlFor={genderType.ID}>{genderType.Name}</label>
    </div>
  );
};

export default FormCheckBox;
