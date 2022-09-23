import React from 'react';
import { useDarkMode } from '../../store/DarkModeContext';


const CartIcon = () => {
  const {darkMode} = useDarkMode();

  return (
    <svg
    className='duration-500'
      xmlns="http://www.w3.org/2000/svg"
      height="23"
      width="23"
      viewBox="0 0 31.611 28.998"
      fill={`${darkMode? '#94a3b8' :'#1e293b'}`}
    >
      <g id="shopping-cart" transform="translate(0 -21.155)">
        <g id="Group_143" data-name="Group 143" transform="translate(0 21.155)">
          <path
            id="Path_146"
            data-name="Path 146"
            d="M24.946,43.512H12.259l-.784-3.137H28.055l3.555-14.222H7.919l-1.25-5H0v1.862H5.215l5.142,20.57a3.322,3.322,0,1,0,3.68,1.788h7.926a3.32,3.32,0,1,0,2.982-1.862ZM8.384,28.016H29.226L26.6,38.513H11.009Zm2.671,20.276a1.459,1.459,0,1,1,1.459-1.459A1.46,1.46,0,0,1,11.056,48.291Zm13.89,0A1.459,1.459,0,1,1,26.4,46.833,1.46,1.46,0,0,1,24.946,48.291Z"
            transform="translate(0 -21.155)"
          />
        </g>
      </g>
    </svg>
  );
};

export default CartIcon;
