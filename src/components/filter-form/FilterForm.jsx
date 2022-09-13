import React, { useState } from 'react';
import FormDropDown from './FormDropDown';
import FormDatePicker from './FormDatePicker';
import { useFilterForm } from '../../store/FilterContext';
import { useList } from '../../store/ListContext';
import FormTag from './FormTag';
import FormCheckBox from './FormCheckbox';
import { addOrRemoveObject } from '../../helpers/helper';

const FilterForm = ({  }) => {
  // console.log('here is FilterForm : ', open);

  const list = useList();
  const { filterState, dispatchFilterForm } = useFilterForm();

  //////////////////////////////////states to store states
  const initialState = {
    city: { name: filterState.city.name, id: filterState.city.id },
    productCategory: {
      name: filterState.productCategory.name,
      id: filterState.productCategory.id,
    },
    collection: {
      name: filterState.collection.name,
      id: filterState.collection.id,
    },
    collectionCategory: {
      name: filterState.collectionCategory.name,
      id: filterState.collectionCategory.id,
    },
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
          city: { name, id },
        };
      });
    }

    if (type === 'productCategory')
      setFormState((prevState) => {
        return {
          ...prevState,
          productCategory: { name, id },
        };
      });

    if (type === 'collection')
      setFormState((prevState) => {
        return {
          ...prevState,
          collection: { name, id },
        };
      });

    if (type === 'collectionCategory')
      setFormState((prevState) => {
        return {
          ...prevState,
          collectionCategory: { name, id },
        };
      });
  };

  const datePickerHandler = (type, value) => {
    if (type === 'start-date') setStartDate(() => value);
    if (type === 'end-date') setEndDate(() => value);
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
    ///// reset FilterForm Component
    setStartDate(() => '-1');
    setEndDate(() => '-1');
    setFormState(() => {
      return {
        city: { name: 'شهر', id: -1 },
        productCategory: { name: 'دسته بندي', id: -1 },
        collection: { name: 'مجموعه', id: -1 },
        collectionCategory: { name: 'زير دسته', id: -1 },
        tags: [],
        genderTypes: [],
      };
    });

    ///reset filter form context
    dispatchFilterForm({
      type: 'reset-form',
    });

    ////////////reset list context
    list.filterList(list.requestConfig, 'reset-config');
  };

  const applyFiltersHandler = () => {
    ///////////change data in filter form context
    dispatchFilterForm({
      type: 'update-filter-form-data',
      payload: { ...formState, startDate, endDate },
    });

    // //////////////change config in list context
    list.filterList(list.requestConfig, 'apply-filter', {
      CityID: formState.city.id,
      CollectionID: formState.collection.id,
      CollectionCategoryID: formState.collectionCategory.id,
      ProductCategoryID: formState.productCategory.id,
      TagID:
        formState.tags.length === 0 ? '-1' : JSON.stringify(formState.tags),
      GenderID:
        formState.genderTypes.length === 0
          ? '-1'
          : JSON.stringify(formState.genderTypes),
      FromDate: startDate,
      ToDate: endDate,
      Content: '',
      ProductID: -1,
    });

    // console.log('kmjn');
    // onClose();
  };

  // console.log('on close ==> ', onClose);
  return (
    <form>
      <h3>فیلتر ها</h3>
      {/* devider line */}
      <div className="my-2 bg-[#e5e5ea] w-full h-[1px]" />
      <h2 className="text-gray-600 my-1 flex">شهر</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'city'}
        firstItem={formState.city.name}
        menuItems={list.filterListInfo.City}
      />

      <h2 className="text-gray-600  my-1">دسته بندی</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'productCategory'}
        firstItem={formState.productCategory.name}
        menuItems={list.filterListInfo.ProductCategory}
      />

      <h2 className="text-gray-600  my-1">مجموعه</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collection'}
        firstItem={formState.collection.name}
        menuItems={list.filterListInfo.Collection}
      />
      <h2 className="text-gray-600  my-1">زیردسته</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collectionCategory'}
        firstItem={formState.collectionCategory.name}
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
