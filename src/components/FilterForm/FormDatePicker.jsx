import React, { useEffect } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import 'react-multi-date-picker/styles/colors/red.css';

const FormDatePicker = ({
  clickHandler,
  value,
  setValue,
  placeholder,
  type,
}) => {
  let today = new Date().toLocaleDateString('fa-IR');
  function toEnglishDigits(str) {
    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t) {
      return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t) {
      return t.charCodeAt(0) - e;
    });
    return str;
  }
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
