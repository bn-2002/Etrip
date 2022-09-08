import React, { useState } from 'react';
import FormDropDown from './FormDropDown';
import { data } from './data';
import FormDatePicker from './FormDatePicker';

const FilterForm = () => {
  const [city, setCity] = useState('شهر');
  const [collectionName, setCollectionName] = useState('تمام موارد');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <form>
      <h3>فیلتر ها</h3>
      {/* devider line */}
      <div className="my-2 bg-[#e5e5ea] w-full h-[1px]" />
      <h2 className="text-gray-600 my-1 flex">شهر</h2>
      <FormDropDown
        setCity={setCity}
        type={'city'}
        firstItem={city}
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
        setCollectionName={setCollectionName}
        type={'collection'}
        firstItem={collectionName}
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
          value={startDate}
          setValue={setStartDate}
          placeholder={'از تاريخ'}
        />
        <FormDatePicker
          value={endDate}
          setValue={setEndDate}
          placeholder={'تا تاريخ'}
        />
      </div>
      <div className=" flex items-center justify-center my-1 gap-2">
        <div className="border border-[#e92444] text-[#e92444] rounded-lg px-2 py-1 flex-1 text-center">
          حذف فیلتر
        </div>
        <div className="text-white border border-[#e92444] bg-[#e92444] px-2 flex-1 py-1 rounded-lg text-center">
          اعمال فیلتر
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
