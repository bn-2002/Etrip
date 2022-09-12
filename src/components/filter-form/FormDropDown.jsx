import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';

const FormDropDown = ({ clickHandler, firstItem, menuItems, type }) => {
  const [clicked, setClicked] = useState(false);

  const changeItemHandler = (type, id, name) => {
    clickHandler(type, id, name);
  };

  const changeColorHandler = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <Menu
      as="div"
      className=" my-1 relative border p-0 rounded-lg w-full text-center text-black"
    >
      <Menu.Button
        onClick={changeColorHandler}
        className={` ${
          clicked ? 'text-white bg-[#e92444]' : ''
        } flex items-center justify-between w-full hover:text-white hover:bg-[#e92444] rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white py-1 focus-visible:ring-opacity-75`}
      >
        <span className="mx-2 mb-1 text-base font-main ">{firstItem}</span>
        <ChevronDownIcon className="w-5 h-5 mx-2" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-full  z-[55] mt-[2px] origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-5xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="px-1 py-1 max-h-40 overflow-y-auto ">
            {menuItems.map((menuItem) => {
              return (
                <Menu.Item key={uuidv4()}>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        changeItemHandler(type, menuItem.ID, menuItem.Name);
                      }}
                      className={`font-main ${
                        active ? 'bg-[#F2FAFF]' : 'text-black'
                      }   w-full rounded-md  text-base cursor-pointer text-right px-2 py-2 `}
                    >
                      {menuItem.Name}
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FormDropDown;
