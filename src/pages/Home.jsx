import React from 'react';
import Services from '../components/services/Services';
import Footer from '../components/Layout/Footer';
import SliderSection from '../components/SliderSection';
import Packages from '../components/Packages';

const Home = () => {

  return (
    <div>
      <>
        <Services />
        <SliderSection sectionId={'entertainments'} index={3} />
        <Packages />
        <SliderSection sectionId={'best-packages'} index={5} />
        <Footer />
      </>
    </div>
  );
};

export default Home;

/////fix slider width and items count :(
/////responsive issues
///////close form filter
//////////lazy loading
/////////font
////Animations
