import React from 'react';
import FormDropDown from './FormDropDown';
import { data } from './data';

const FilterForm = () => {
  return (
    <form>
      <h3>فیلتر ها</h3>
      {/* devider line */}
      <div className="my-2 bg-[#e5e5ea] w-full h-[1px]" />
      <h2 className="text-gray-600 my-1 flex">شهر</h2>
      <FormDropDown
        type={'city'}
        firstItem={'َشهر'}
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
      <FormDropDown  type={'collection'} firstItem={'تمام موارد'} menuItems={data} />
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
          <span> برای خانواده</span>
        </div>
      </div>
      <h2 className="text-gray-600  my-1">بازه زمانی</h2>
      <div className=" flex items-center justify-center my-1 gap-2">
        <input className="flex-1 border px-2 " type="date" />
        <input className="flex-1 border px-2 " type="date" />
      </div>
      <div className=" flex items-center justify-center my-1 gap-2">
        <div className="border border-red-600 text-red-600 rounded-sm px-2 py-1 flex-1">
          حذف فیلتر
        </div>
        <div className="text-white border border-red-600 bg-red-600 px-2 flex-1 py-1 rounded-sm">
          اعمال فیلتر
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
