import React from 'react';
import ReactDOM from 'react-dom';
import { useDarkMode } from '../../store/DarkModeContext';

const Modal = ({ open, children, onClose }) => {
  const {darkMode} = useDarkMode();
  if (open) {
    document.body.style.overflow = 'scroll';
    document.body.style.paddingRight = '0px';
    return null;
  } else {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '8px';

    // const childrenWithProps = React.Children.map(children, (child) => {
    //   return React.cloneElement(child, { open, onClose,sayHi });
    // });

    const clickHandler = () => {
      onClose();
    };

    return ReactDOM.createPortal(
      <>
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-60 z-[1000] w-full h-screen" />
        <div
          className={`fixed w-[400px] left-[10%] sm:left-[20%] md:left-[24%] lg:left-[37%] rounded-lg top-[10%] ${darkMode ? 'bg-slate-800' : 'bg-white'} z-[1001] p-8`}
          onClick={clickHandler}
        >
          {children}
        </div>
      </>,
      document.getElementById('portal')
    );
  }
};

export default Modal;

//////add onClick function from Modal to its child

//////////fix searchbar section ===> link to list page + clear it after going to any other page :/

///create login and sign up page + pardakht
