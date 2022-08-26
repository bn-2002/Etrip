import React from 'react';
import Entertainments from './components/best-entertainments/Entertainments';
import BestPackages from './components/best-packages/BestPackages';
import Catogries from './components/catogry-section/Catogries';
import Header from './components/Layout/header/Header';
import Packages from './components/packages/Packages';
import Services from './components/services/Services';
import Footer from './components/Layout/footer/Footer';

const App = () => {
  return (
    <div className="font-main">
      <Header />
      <Catogries />
      <Services />
      <Entertainments />
      <Packages />
      <BestPackages />
      <Footer />
    </div>
  );
};

export default App;

////////searchbar

///scale packages

////sass

//////////add  lazy loading

/////add shimer effect

/////fix slider width and items count :(

////Animations

///////login and sign up page

//////filter modal

////change data by click on each items in catogries