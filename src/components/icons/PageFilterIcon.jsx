import React from 'react';
import { useDarkMode } from '../../store/DarkModeContext';


const PageFilterIcon = ({ color }) => {

  const {darkMode} = useDarkMode();

  return (
    <svg
    className='duration-500'
      id="res-page-filter-icon"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      viewBox="0 0 30 30"
      fill={`${darkMode? '#94a3b8' : color}`}
    >
      <path
        id="Path_142"
        data-name="Path 142"
        d="M24.633,0H5.367A5.373,5.373,0,0,0,0,5.367V24.633A5.373,5.373,0,0,0,5.367,30H24.633A5.373,5.373,0,0,0,30,24.633V5.367A5.373,5.373,0,0,0,24.633,0Zm3.609,24.633a3.613,3.613,0,0,1-3.609,3.609H5.367a3.613,3.613,0,0,1-3.609-3.609V5.367A3.613,3.613,0,0,1,5.367,1.758H24.633a3.613,3.613,0,0,1,3.609,3.609Z"
        transform="translate(0 0)"
      ></path>
      <path
        id="Path_143"
        data-name="Path 143"
        d="M85.857,82.217H72.47a2.761,2.761,0,0,0-5.235,0h-2.09a.879.879,0,0,0,0,1.758h2.09a2.761,2.761,0,0,0,5.235,0H85.857a.879.879,0,1,0,0-1.758Zm-16,1.883a1,1,0,1,1,1-1A1.005,1.005,0,0,1,69.853,84.1Z"
        transform="translate(-60.501 -75.627)"
      ></path>
      <path
        id="Path_144"
        data-name="Path 144"
        d="M85.857,210.75h-2.09a2.761,2.761,0,0,0-5.235,0H65.146a.879.879,0,0,0,0,1.758H78.532a2.761,2.761,0,0,0,5.235,0h2.09a.879.879,0,1,0,0-1.758Zm-4.707,1.883a1,1,0,1,1,1-1A1.005,1.005,0,0,1,81.15,212.633Z"
        transform="translate(-60.501 -196.629)"
      ></path>
      <path
        id="Path_145"
        data-name="Path 145"
        d="M85.857,339.283H76.236a2.761,2.761,0,0,0-5.235,0H65.146a.879.879,0,0,0,0,1.758H71a2.761,2.761,0,0,0,5.235,0h9.621a.879.879,0,1,0,0-1.758Zm-12.238,1.883a1,1,0,1,1,1-1A1.005,1.005,0,0,1,73.619,341.166Z"
        transform="translate(-60.501 -317.63)"
      ></path>
    </svg>
  );
};

export default PageFilterIcon;
