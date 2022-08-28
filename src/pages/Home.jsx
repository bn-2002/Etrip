import React from 'react';
import Entertainments from '../components/best-entertainments/Entertainments';
import BestPackages from '../components/best-packages/BestPackages';
import Packages from '../components/packages/Packages';
import Services from '../components/services/Services';
import Footer from '../components/Layout/footer/Footer';
import Catogries from '../components/catogry-section/Catogries';
import HomeHeader from '../components/Layout/header/home-header/HomeHeader';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Catogries />
      <Services />
      <Entertainments />
      <Packages />
      <BestPackages />
      <Footer />
    </>
  );
};

export default Home;

////////searchbar

////sass

//////////add lazy loading

/////add shimer effect

/////fix slider width and items count :(

////Animations

///////login and sign up page

//////filter modal

////change data by click on each items in catogries
