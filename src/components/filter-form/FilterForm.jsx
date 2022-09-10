import React, { useState } from 'react';
import FormDropDown from './FormDropDown';
import FormDatePicker from './FormDatePicker';
import { useFilterForm } from '../../store/FilterContext';
import { useList } from '../../store/ListContext';
import FormTag from './FormTag';

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

    list.filterList(list.requestConfig, type, id);
  };

  const clearFormHandler = () => {
    setStartDate(() => '');
    setEndDate(() => '');
    dispatchFilterForm({
      type: 'reset-form',
    });

    list.filterList(list.requestConfig, 'reset-config', '');
  };

  const datePickerHandler = (type, value) => {
    dispatchFilterForm({
      type: type,
      payload: {
        value: value,
      },
    });
    list.filterList(list.requestConfig, type, value);
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
        menuItems={list.filterListInfo.City}
      />

      <h2 className="text-gray-600  my-1">دسته بندی</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'productCategory'}
        firstItem={filterState.productCategory}
        menuItems={list.filterListInfo.ProductCategory}
      />

      <h2 className="text-gray-600  my-1">مجموعه</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collection'}
        firstItem={filterState.collection}
        menuItems={list.filterListInfo.Collection}
      />
      <h2 className="text-gray-600  my-1">زیردسته</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collectionCategory'}
        firstItem={filterState.collectionCategory}
        menuItems={list.filterListInfo.CollectionCategory}
      />
      <h2 className="text-gray-600  my-1">برچسب</h2>
      <div className="flex gap-2 text-sm">
        {list.filterListInfo.Tag.map((tag) => {
          return <FormTag tag={tag} />;
        })}
      </div>
      <h2 className="text-gray-600  my-1">نوع</h2>
      <div className="flex gap-2 text-gray-600">
        {list.filterListInfo.GenderType.map((genderType) => {
          return (
            <div className=" cursor-pointer flex items-center gap-1">
              <input type="checkbox" />
              <span>{genderType.Name}</span>
            </div>
          );
        })}
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
        <div className="text-white  cursor-pointer border border-[#e92444] bg-[#e92444] px-2 flex-1 py-1 rounded-lg text-center">
          اعمال فیلتر
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
