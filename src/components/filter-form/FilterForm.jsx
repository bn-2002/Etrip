import React, { useState } from 'react';
import FormDropDown from './FormDropDown';
import FormDatePicker from './FormDatePicker';
import { useFilterForm } from '../../store/FilterContext';
import { useList } from '../../store/ListContext';
import FormTag from './FormTag';
import FormCheckBox from './FormCheckbox';
import { addOrRemoveObject } from '../../helpers/helper';

const FilterForm = () => {
  const list = useList();
  const { filterState, dispatchFilterForm } = useFilterForm();

  //////////////////////////////////states to store states
  const initialState = {
    city: filterState.city,
    productCategory: filterState.productCategory,
    collection: filterState.collection,
    collectionCategory: filterState.collectionCategory,
    tags: filterState.tags,
    genderTypes: filterState.genderTypes,
  };

  const [formState, setFormState] = useState(initialState);
  const [startDate, setStartDate] = useState(filterState.startDate);
  const [endDate, setEndDate] = useState(filterState.endDate);

  ////////////////function to handle changes in form and => change form state

  const dropdownClickHandler = (type, id, name) => {
    if (type === 'city') {
      setFormState((prevState) => {
        return {
          ...prevState,
          city: name,
        };
      });
    }

    if (type === 'productCategory')
      setFormState((prevState) => {
        return {
          ...prevState,
          productCategory: name,
        };
      });

    if (type === 'collection')
      setFormState((prevState) => {
        return {
          ...prevState,
          collection: name,
        };
      });

    if (type === 'collectionCategory')
      setFormState((prevState) => {
        return {
          ...prevState,
          collectionCategory: name,
        };
      });
    // list.filterList(list.requestConfig, type, id);
  };

  const datePickerHandler = (type, value) => {
    if (type === 'start-date') setStartDate(() => value);
    if (type === 'end-date') setEndDate(() => value);
    // list.filterList(list.requestConfig, type, value);
  };

  const tagHandler = (id) => {
    const newArray = addOrRemoveObject(id, formState.tags);
    setFormState((prevState) => {
      return {
        ...prevState,
        tags: newArray,
      };
    });
  };

  const checkboxHandler = (id) => {
    const newArray = addOrRemoveObject(id, formState.genderTypes);
    setFormState((prevState) => {
      return {
        ...prevState,
        genderTypes: newArray,
      };
    });
  };

  const clearFormHandler = () => {
    setStartDate(() => 'از تاريخ');
    setEndDate(() => 'تا تاريخ');
    setFormState(() => {
      return {
        city: 'شهر',
        productCategory: 'دسته بندي',
        collection: 'مجموعه',
        collectionCategory: 'زير دسته',
        tags: [],
        genderTypes: [],
      };
    });
    dispatchFilterForm({
      type: 'reset-form',
    });

    // list.filterList(list.requestConfig, 'reset-config', '');
  };

  const applyFiltersHandler = () => {
    dispatchFilterForm({
      type: 'update-filter-form-data',
      payload: { ...formState, startDate: startDate, endDate: endDate },
    });
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
        firstItem={formState.city}
        menuItems={list.filterListInfo.City}
      />

      <h2 className="text-gray-600  my-1">دسته بندی</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'productCategory'}
        firstItem={formState.productCategory}
        menuItems={list.filterListInfo.ProductCategory}
      />

      <h2 className="text-gray-600  my-1">مجموعه</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collection'}
        firstItem={formState.collection}
        menuItems={list.filterListInfo.Collection}
      />
      <h2 className="text-gray-600  my-1">زیردسته</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collectionCategory'}
        firstItem={formState.collectionCategory}
        menuItems={list.filterListInfo.CollectionCategory}
      />
      <h2 className="text-gray-600  my-1">برچسب</h2>
      <div className="flex gap-2 text-sm">
        {list.filterListInfo.Tag.map((tag) => {
          return (
            <FormTag
              tags={formState.tags}
              clickHandler={tagHandler}
              tag={tag}
            />
          );
        })}
      </div>
      <h2 className="text-gray-600  my-1">نوع</h2>
      <div className="flex gap-2 text-gray-600">
        {list.filterListInfo.GenderType.map((genderType) => {
          return (
            <FormCheckBox
              clickHandler={checkboxHandler}
              genderTypes={formState.genderTypes}
              genderType={genderType}
            />
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
        />
        <FormDatePicker
          clickHandler={datePickerHandler}
          type={'end-date'}
          value={endDate}
          setValue={setEndDate}
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
          onClick={applyFiltersHandler}
          className="text-white  cursor-pointer border border-[#e92444] bg-[#e92444] px-2 flex-1 py-1 rounded-lg text-center"
        >
          اعمال فیلتر
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
