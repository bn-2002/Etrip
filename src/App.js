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

//////////responsive //////////////////TODO
/////// font////////////////TODO
////fix slider widthFIXME
////sassFIXME
///////make typography componentFIXME
/////scale imagesFIXME
//////card hover effect///////////TODO
/////////complete sliders cardsFIXME
/////BUG****react stop screen scroll to top when rerender in use Effect in slider in background header****FIXME
/////shimer effectFIXME
////////searchbar FIXME
//////////lazy loading FIXME

