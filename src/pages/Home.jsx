import React ,{useRef , useEffect}from 'react';
import Services from '../components/services/Services';
import Footer from '../components/Layout/Footer';
import SliderSection from '../components/SliderSection';
import Packages from '../components/Packages';
import { useDarkMode } from '../store/DarkModeContext';
import { gsap } from "gsap";

const Home = () => {
  const {darkMode} = useDarkMode();
  const boxRef = useRef();
  document.body.style = `background: ${darkMode? '#1e293b' : 'white'};`;

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <>

<div className="box" ref={boxRef}>Hello</div>;
      <Services />
      <SliderSection sectionId={'entertainments'} index={3} />
      <Packages />
      <SliderSection sectionId={'best-packages'} index={5} />
      <Footer />
    </>
  );
};

export default Home;

