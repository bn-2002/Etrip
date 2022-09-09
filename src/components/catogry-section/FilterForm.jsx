import React, { useState } from 'react';
import FormDropDown from './FormDropDown';
import { data } from './data';
import FormDatePicker from './FormDatePicker';
import { useFilterForm } from '../../store/FilterContext';
import { useList } from '../../store/ListContext';

const FilterForm = () => {
  const list = useList();
  const { filterState, dispatchFilterForm } = useFilterForm();

  const [startDate, setStartDate] = useState(filterState.startDate);
  const [endDate, setEndDate] = useState(filterState.endDate);

  const dropdownClickHandler = (type, id, name) => {
    dispatchFilterForm({
      type: type,
      payload: {
        value: name,
      },
    });

    list.filterList(list.filteredItems, type, id);
  };

  const clearFormHandler = () => {
    setStartDate(() => '');
    setEndDate(() => '');
    dispatchFilterForm({
      type: 'reset-form',
    });

    list.filterList(list.filteredItems, 'reset-config', '');
  };

  const datePickerHandler = (type, value) => {
    dispatchFilterForm({
      type: type,
      payload: {
        value: value,
      },
    });
    list.filterList(list.filteredItems, type, value);
  };

  return (
    <form>
      <h3>فیلتر ها</h3>
      {/* devider line */}
      <div className="my-2 bg-[#e5e5ea] w-full h-[1px]" />
      <h2 className="text-gray-600 my-1 flex">شهر</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'city'}
        firstItem={filterState.city}
        menuItems={[
          {
            name: 'کیش',
            id: 1639,
          },
          {
            name: 'قشم',
            id: 2350,
          },
        ]}
      />
      <h2 className="text-gray-600  my-1">مجموعه</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collection'}
        firstItem={filterState.collection}
        menuItems={data}
      />
      <h2 className="text-gray-600  my-1">زیردسته</h2>
      {/* <FormDropDown firstItem={'زیردسته'} menuItems={['تفریحات دریایی', 'غواصی']} /> */}
      <h2 className="text-gray-600  my-1">برچسب</h2>
      <div className="flex gap-2 text-sm">
        <div className="text-gray-500 bg-gray-100 py-1 px-2 rounded-lg">
          تفریحات VIP
        </div>
        <div className="text-gray-500 bg-gray-100 py-1 px-2 rounded-lg">
          تفریحات آبی
        </div>
        <div className="text-gray-500 bg-gray-100 py-1 px-2 rounded-lg">
          تفریحات دریایی
        </div>
      </div>
      <h2 className="text-gray-600  my-1">نوع</h2>
      <div className="flex gap-2 text-gray-600">
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <span> برای خانواده</span>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <span>سانس خانوادگي</span>
        </div>
      </div>
      <h2 className="text-gray-600  my-1">بازه زمانی</h2>
      <div className=" flex items-center justify-center my-1 gap-2">
        <FormDatePicker
          clickHandler={datePickerHandler}
          type={'start-date'}
          value={startDate}
          setValue={setStartDate}
          placeholder={'از تاريخ'}
        />
        <FormDatePicker
          clickHandler={datePickerHandler}
          type={'end-date'}
          value={endDate}
          setValue={setEndDate}
          placeholder={'تا تاريخ'}
        />
      </div>
      <div className=" flex items-center justify-center my-1 gap-2">
        <div
          onClick={clearFormHandler}
          className="border cursor-pointer border-[#e92444] text-[#e92444] rounded-lg px-2 py-1 flex-1 text-center"
        >
          حذف فیلتر
        </div>
        <div
          className="text-white  cursor-pointer border border-[#e92444] bg-[#e92444] px-2 flex-1 py-1 rounded-lg text-center"
        >
          اعمال فیلتر
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
