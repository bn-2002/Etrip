import React, { useState } from 'react';
import FormDropDown from './FormDropDown';
import FormDatePicker from './FormDatePicker';
import { useFilterForm } from '../../store/FilterContext';
import { useList, useDispatchList } from '../../store/ListContext';
import FormTag from './FormTag';
import FormCheckBox from './FormCheckbox';
import { addOrRemoveObject } from '../../helpers/helper';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../store/DarkModeContext';

const FilterForm = () => {
  const list = useList();
  const dispatchList = useDispatchList();
  const { filter, dispatchFilterForm } = useFilterForm();
  const {darkMode} = useDarkMode();

  //////////////////////////////////states to store states
  const initialState = {
    city: {
      name: filter.form.city.name,
      id: filter.form.city.id,
    },
    productCategory: {
      name: filter.form.productCategory.name,
      id: filter.form.productCategory.id,
    },
    collection: {
      name: filter.form.collection.name,
      id: filter.form.collection.id,
    },
    collectionCategory: {
      name: filter.form.collectionCategory.name,
      id: filter.form.collectionCategory.id,
    },
    tags: filter.form.tags,
    genderTypes: filter.form.genderTypes,
  };

  const [formState, setFormState] = useState(initialState);
  const [startDate, setStartDate] = useState(filter.form.startDate);
  const [endDate, setEndDate] = useState(filter.form.endDate);

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
    console.log('data value : ' , value);
    if (value.length === 9) {
      // const newValue = value.splice(5, 0, 0);
      // console.log('newValue : ' , value)
      console.log(':/' , typeof(value))
    }if (value.length === 10) {
      console.log(':////')
    }
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

    /////////it changes categry id in requestConfig
    dispatchList({
      type: 'filter-catogery',
      payload: {
        value: formState.productCategory.id,
      },
    });

    ///////////set loading true
    dispatchList({
      type: 'is-loading',
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
        formState.genderTypes.length === 0 || formState.genderTypes.length === 2
          ? '-1'
          : JSON.stringify(formState.genderTypes),
      FromDate: startDate,
      ToDate: endDate,
      Content: '',
      ProductID: -1,
    });
  };

  return (
    <form>
      <h3 className={`${darkMode ? 'text-slate-200' : ''}`}>فیلتر ها</h3>
      {/* devider line */}
      <div className={`my-2 ${darkMode ? 'bg-slate-500' : 'bg-[#e5e5ea]'} w-full h-[1px]`} />
      <h2 className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1 flex`}>شهر</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'city'}
        firstItem={formState.city.name}
        menuItems={filter.info.City}
      />

      <h2 className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1`}>دسته بندی</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'productCategory'}
        firstItem={formState.productCategory.name}
        menuItems={filter.info.ProductCategory}
      />

      <h2 className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1`}>مجموعه</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collection'}
        firstItem={formState.collection.name}
        menuItems={filter.info.Collection}
      />
      <h2 className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1`}>زیردسته</h2>
      <FormDropDown
        clickHandler={dropdownClickHandler}
        type={'collectionCategory'}
        firstItem={formState.collectionCategory.name}
        menuItems={filter.info.CollectionCategory}
      />
      <h2  className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1`}>برچسب</h2>
      <div className="flex gap-2 text-sm">
        {filter.info.Tag.map((tag) => {
          return (
            <FormTag
              tags={formState.tags}
              clickHandler={tagHandler}
              tag={tag}
            />
          );
        })}
      </div>
      <h2  className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1`}>نوع</h2>
      <div className="flex gap-2 text-gray-600">
        {filter.info.GenderType.map((genderType) => {
          return (
            <FormCheckBox
              clickHandler={checkboxHandler}
              genderTypes={formState.genderTypes}
              genderType={genderType}
            />
          );
        })}
      </div>
      <h2  className={`${darkMode ? 'text-slate-200' : 'text-gray-600'} my-1`}>بازه زمانی</h2>
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
          className={` ${darkMode ? 'bg-slate-200' : 'border-[#e92444] border'} cursor-pointer  text-[#e92444] rounded-lg px-2 py-1 flex-1 text-center`}
        >
          حذف فیلتر
        </div>
        <div
          onClick={applyFiltersHandler}
          className={`text-white bg-[#e92444]  cursor-pointer border border-[#e92444] px-2 flex-1 py-1 rounded-lg text-center`}
        >
          <Link to="/list">اعمال فیلتر</Link>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
