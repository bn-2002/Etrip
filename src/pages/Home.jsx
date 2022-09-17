import React from 'react';
import Services from '../components/services/Services';
import Footer from '../components/Layout/Footer';
import SliderSection from '../components/SliderSection';
import Packages from '../components/Packages';

const Home = () => {
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

/////fix slider width and items count :(
///////close form filter
//////////lazy loading
/////////font
////Animations

////////add functions to Cart Context
///////Close filterr form by click on apply filter button
///////Infinite Scroll
