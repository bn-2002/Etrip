import React from 'react';

const ItemLable = (props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 461 228.54"
      height="50px"
      className={`${props.style} ri-label`}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="229.64"
          y1="247.34"
          x2="229.64"
          y2="0.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b3140e"></stop>
          <stop offset="0.38" stopColor="#d9281e"></stop>
          <stop offset="0.44" stopColor="#e03027"></stop>
          <stop offset="0.56" stopColor="#ea3d35"></stop>
          <stop offset="0.67" stopColor="#ee413a"></stop>
          <stop offset="1" stopColor="#fd5b47"></stop>
        </linearGradient>
      </defs>
      <title>label</title>
      <path
        d="M442.76,12.2C435.55,4.64,422.33,0,408,0H53C38.67,0,25.45,4.64,18.24,12.2L0,31.33H461Z"
        fill="#c1272d"
      ></path>
      <path
        d="M229.64.19h-185C69,23.57,82.61,54.69,82.61,87.06v16.45c0,17.3,8.71,33.62,23.6,44.21L212,223a30.78,30.78,0,0,0,35.2,0l105.83-75.29c14.88-10.59,23.6-26.91,23.6-44.21V87.06c0-32.37,13.59-63.49,37.94-86.87Z"
        fill="url(#linear-gradient)"
      ></path>
    </svg>
  );
};

export default ItemLable;
