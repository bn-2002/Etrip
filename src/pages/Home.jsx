import React from 'react';
import Services from '../components/services/Services';
import Footer from '../components/Layout/Footer';
import SliderSection from '../components/SliderSection';
import Packages from '../components/Packages';
import { useDarkMode } from '../store/DarkModeContext';

const Home = () => {
  const {darkMode} = useDarkMode();
  document.body.style = `background: ${darkMode? '#1e293b' : 'white'};`;

  return (
    <>
      <Services />
      <SliderSection sectionId={'entertainments'} index={3} />
      <Packages />
      <SliderSection sectionId={'best-packages'} index={5} />
      <Footer />
    </>
  );
};

export default Home;

