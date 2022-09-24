import React, { useEffect, useState } from 'react';
import { addOrRemoveObject, search } from '../../helpers/helper';
import { useDarkMode } from '../../store/DarkModeContext';

const FormCheckBox = ({ genderType, clickHandler, genderTypes }) => {
  const [, isExists] = search(genderType.ID, genderTypes);
  const {darkMode} = useDarkMode();

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
      <label htmlFor={genderType.ID} className={`${darkMode ? 'text-slate-200' : ''}`}>{genderType.Name}</label>
    </div>
  );
};

export default FormCheckBox;
