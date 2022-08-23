import React, { useRef } from 'react';
import Navbar from './Navbar';
import Slider from './slider/Slider';
import useOnScreen from '../../../hooks/useOnScreen';

const Header = React.forwardRef((props, ref) => {
  const targetRef = useRef(null);
  const options = { root: null, rootMargin: '0px', threshold: 0.4 };
  const isVisible = useOnScreen(options, targetRef);

  return (
    <div ref={ref} className="flex flex-col">
      <Navbar style={`${!isVisible ? '-top-[300px]' : '-top-[0px]'}`} />
      <Slider ref={targetRef} />
    </div>
  );
});

export default Header;
