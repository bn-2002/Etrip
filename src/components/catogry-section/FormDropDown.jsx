import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';
import { useDispatchList, useList } from '../../store/ListContext';
import useFetch from '../../hooks/useFetch';

const FormDropDown = ({ firstItem, menuItems, type }) => {
  console.log('menuItems: ', menuItems);

  const dispatchList = useDispatchList();
  const { isLoading, error, sendRequest } = useFetch();
  const list = useList();

  const onClick = async (id) => {
    let newConfig;

    if (type === 'city') {
      newConfig = {
        ...list.filteredItems,
        cityID: id,
        collectionID: -1,
      };
    }

    if (type === 'collection') {
      newConfig = {
        ...list.filteredItems,
        collectionID: id,
      };
    }

    const data = await sendRequest(newConfig);
    dispatchList({
      type: 'filter-list',
      payload: {
        cityID: id,
        newConfig: newConfig,
        newData: data,
      },
    });
  };

  const filterList = (menuItem) => {
    onClick(menuItem);
  };

  return (
    <Menu
      as="div"
      className=" my-1 relative border rounded-sm w-full text-center text-black"
    >
      <Menu.Button className="flex items-center justify-between w-full text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white py-1 focus-visible:ring-opacity-75">
        <span className="mx-2 mb-1 text-base  font-main">{firstItem}</span>
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
          <div className="px-1 py-1 ">
            {menuItems.map((menuItem) => {
              return (
                <Menu.Item key={uuidv4()}>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        filterList(menuItem.id);
                      }}
                      className={`font-main ${
                        active ? 'bg-[#F2FAFF]' : 'text-black'
                      }   w-full rounded-md  text-base text-right px-2 py-2 `}
                    >
                      {menuItem.name}
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
