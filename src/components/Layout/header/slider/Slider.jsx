import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import { data } from './data';

const Slider = React.forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCurrentSlide((prevSlide) => {
  //       if (prevSlide < 2) return prevSlide + 1;
  //       else return 0;
  //     });
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [currentSlide]);

  return (
    <div className={styles.slider} ref={ref}>
      {data.map((slide, index) => {
        return (
          <div
            key={index}
            className={`${currentSlide === index ? styles.current : ''} ${
              styles.slide
            }`}
          >
            {currentSlide === index && <img src={slide.img} alt="" />}
            {/* {currentSlide === index && <SliderImg src={slide.img} ref={ref} />} */}
          </div>
        );
      })}
    </div>
  );
});

export default Slider;
