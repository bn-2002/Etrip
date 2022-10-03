import React ,{useRef , useEffect}from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../store/DarkModeContext';
import imgs from './data';
import { gsap } from "gsap";
// import FadeInAnimation from "../UI/FadeInAnimation";


const Service = ({ service,index, onClickHandler }) => {
  const {darkMode} = useDarkMode();
  const serviceRef = useRef();


  const filterHandler = () => {
    onClickHandler(service);
  };

  console.log('service : ' , service)
  console.log('index : ' , index)

  useEffect(() => {
    // gsap.from(serviceRef.current, {
    //   // duration: 1,
    //   scale:3,
    //   ease: "power4.out"
    // });

    // gsap.to(serviceRef.current, {
    //   duration: 1,
    //   scale:1,
    // });
  });


  return (

      <div
        className="relative mx-auto transition-all cursor-pointer group service"
        key={service.Alt}
        ref={serviceRef}
      >
        <div className="relative z-[19]">
          <img
            src={` ${darkMode ? imgs[index] : service.ImageURL} `}
            alt=""
            className="shadow-xl rounded-[10px]"
          />
          <div className="absolute flex flex-col h-[90%] justify-around top-2 left-3">
            <p className={` ${darkMode ? 'text-slate-200' : 'text-[#575757]'} text-[17px] sm:text-[20px] font-bold`}>
              {service.Title}
            </p>
            <div className={`w-[100px] line-clamp-2 ${darkMode ? 'text-slate-100' : 'text-[#626161]'}`}>
              <span className={`text-[16px]`}>
                {service.Description}
              </span>
            </div>
            <button
              onClick={filterHandler}
              className="px-3 py-1 text-white bg-[#E92444] rounded-2xl text-[13px] sm:text-[16px] hover:bg-[##CA213D]"
            >
              <Link to="/list">مشاهده </Link>
            </button>
          </div>
        </div>
        <div>
          <div className={`transition-all duration-500 ease-in-out absolute top-0 left-0 w-full h-full ${darkMode? 'bg-slate-400' : 'bg-gray-200'} rounded-[10px] rotate-6 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-105`}></div>
          <div className={`transition-all duration-500 ease-in-out absolute top-0 left-0 w-full h-full ${darkMode? 'bg-slate-500' : 'bg-gray-300'} rounded-[10px] rotate-[10deg]  opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100`}></div>
          <div className={`transition-all duration-500 ease-in-out absolute top-0 left-0 w-full h-full ${darkMode? 'bg-slate-400' : 'bg-gray-200'} -rotate-[10deg] rounded-[10px] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100`}></div>
        </div>
      </div>

  );
};

export default Service;
