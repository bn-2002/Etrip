import React, { useEffect } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import 'react-multi-date-picker/styles/colors/red.css';
import { toEnglishDigits } from '../../helpers/helper';

const FormDatePicker = ({ clickHandler, value, setValue, type }) => {

  ////calculate minDate
  let today = new Date().toLocaleDateString('fa-IR');
  const minDate = toEnglishDigits(today);

  const dateChangeHandler = () => {
    const selectedDate = value?.toDate?.().toLocaleDateString('fa-IR');
    if (selectedDate) {
      const userSelectedDate = toEnglishDigits(selectedDate);
      clickHandler(type, userSelectedDate);
    }
  };

  useEffect(() => {
    dateChangeHandler();
  }, [value]);

  let placeholder = value;
  if (value === '-1' && type === 'start-date') placeholder = 'از تاریخ';
  if (value === '-1' && type === 'end-date') placeholder = 'تا تاریخ';

  return (
    <div style={{ direction: 'rtl' }} className="w-1/2">
      <DatePicker
        className="red"
        style={{
          height: '24px',
          borderRadius: '6px',
          fontSize: '16px',
          padding: '15px 10px',
        }}
        calendar={persian}
        locale={persian_fa}
        minDate={minDate}
        calendarPosition="bottom-right"
        onChange={setValue}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormDatePicker;
