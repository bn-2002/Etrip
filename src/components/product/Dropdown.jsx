import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';
import { useDispatchList } from '../../store/ListContext';

const Dropdown = ({ firstItem, menuItems, type, productID }) => {
  const dispatchItemInfo = useDispatchList();

  return (
    <Menu as="div" className="relative w-full text-center text-black">
      <Menu.Button className="flex items-center justify-between w-full text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
        <Menu.Items className="absolute right-0 w-full  z-[55] mt-3 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-5xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="px-1 py-1 ">
            {menuItems.map((menuItem) => {
              return (
                <Menu.Item key={uuidv4()}>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        if (type === 'name') {
                          dispatchItemInfo({
                            type: 'change-name',
                            payload: {
                              name: menuItem,
                              productID: productID,
                            },
                          });
                        }

                        if (type === 'date') {
                          dispatchItemInfo({
                            type: 'change-date',
                            payload: {
                              date: menuItem,
                              productID: productID,
                            },
                          });
                        }

                        if (type === 'time') {
                          dispatchItemInfo({
                            type: 'change-time',
                            payload: {
                              time: menuItem,
                              productID: productID,
                            },
                          });
                        }
                      }}
                      className={`font-main ${
                        active ? 'bg-[#F2FAFF]' : 'text-black'
                      }   w-full rounded-md  text-base text-right px-2 py-2 `}
                    >
                      {menuItem}
                    </button>
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

export default Dropdown;
