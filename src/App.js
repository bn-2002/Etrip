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
    <div className='overflow-x-hidden font-main'>
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

//////////responsive //////////////////
/////// font////////////////
////fix slider width
////sass
///////make typography component
/////scale images
/////scrollbar style
//////card hover effect////////////
/////////complete sliders cards
/////****react stop screen scroll to top when rerender in use Effect in slider in background header****
/////////***************header navbar fixed
/////shimer effect
