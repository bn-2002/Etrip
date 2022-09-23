import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import PhoneIcon from '../../../icons/PhoneIcon'
import { useDarkMode } from '../../../../store/DarkModeContext';


const Dropdown = () => {
  const {darkMode} = useDarkMode();
  
  return (
    <Menu as="div" className="relative inline-block text-center">
      <Menu.Button className={`flex items-center justify-center rounded-[100px] text-white px-5 py-1 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border duration-500 ${darkMode? 'border-slate-300 bg-slate-300' : 'border-white'}`}>
        <ChevronDownIcon
          className={`hidden w-5 h-5 md:flex ${darkMode ? 'text-slate-800' : 'text-white'} `}
          aria-hidden="true"
        />
        <span className={`items-center justify-center hidden mx-2 mb-1 text-base ${darkMode ? 'text-slate-800' : 'text-white'} font-main md:flex`}>
          دانلود اپ
        </span>
        <PhoneIcon />
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
        <Menu.Items className={`absolute right-0 w-full mt-2 origin-top-right ${darkMode ? ' bg-slate-800' : 'bg-white'} divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`font-main ${
                    active ? `${darkMode? 'bg-slate-700 text-white' :'bg-[#F2FAFF]'}` : `${darkMode? 'text-white' :'text-black'}`
                  }   w-full rounded-md  text-base text-right px-2 py-2`}
                >
                  IOS نسخه
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`font-main ${
                    active ? `${darkMode? 'bg-slate-700 text-white' :'bg-[#F2FAFF]'}` : `${darkMode? 'text-white' :'text-black'}`
                  }   w-full rounded-md  text-base text-right px-2 py-2 `}
                >
                  نسخه اندروید
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;