import React, { useRef } from 'react';
import Entertainments from './components/best-entertainments/Entertainments';
import BestPackages from './components/best-packages/BestPackages';
import Catogries from './components/catogry-section/Catogries';
import Header from './components/Layout/header/Header';
import Packages from './components/packages/Packages';
import Services from './components/services/Services';
import Footer from './components/Layout/footer/Footer';
import useOnScreen from './hooks/useOnScreen';

const App = () => {
  
  //////fix catogries section after hiding header
  const headerTargetRef = useRef(null);
  const options = { root: null, rootMargin: '0px', threshold: 0 };
  const headerisVisible = useOnScreen(options, headerTargetRef);

  return (
    <div className="overflow-x-hidden font-main">
      <Header ref={headerTargetRef} />
      <Catogries style={`${!headerisVisible ? 'fixed top-0 ' : ''}`} />
      <Services style={!headerisVisible ? `mt-[162px]` : ''} />
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
/////scrollbar styleFIXME
//////card hover effect///////////TODO
/////////complete sliders cardsFIXME
/////BUG****react stop screen scroll to top when rerender in use Effect in slider in background header****FIXME
/////////***************header navbar fixedFIXME
/////shimer effectFIXME
////////searchbar FIXME
//////////lazy loading FIXME

