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
    <div className='font-main'>
      <Header/>
      <Catogries/>
      <Services/>
      <Entertainments/>
      <Packages/>
      <BestPackages/>
      <Footer/>
    </div>
  );
};

export default App;

//////////responsive
/////////////colors
/////////header navbar fixed
/////shimer effect
///////hover service and display bg div
/////// font
////slider
////sass
///////make typography component