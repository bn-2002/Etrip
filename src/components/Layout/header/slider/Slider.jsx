import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import { data } from './data';
import bgImg from '../../../../assests/images/bg.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide < data.length - 1) return prevSlide + 1;
        else return 0;
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className={`relative ${styles.slider}`}>
      <img src={bgImg} alt="" />
      <div className="absolute top-0 left-0">
        {data.map((slide, index) => {
          return (
            <div
              key={index}
              className={`relative ${
                currentSlide === index ? styles.current : ''
              } ${styles.slide}`}
            >
              {currentSlide === index && (
                <img className="" src={slide.img} alt="" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
