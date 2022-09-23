import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useList, useDispatchList } from '../store/ListContext';
import ProductShimmer from '../components/UI/ProductShimmer';
import Product from '../components/product/Product';
import { isEmptyObject } from '../helpers/helper';
import useFetch from '../hooks/useFetch';
import { useDarkMode } from '../store/DarkModeContext';

const List = () => {
  const list = useList();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { sendRequest } = useFetch();
  const dispatchList = useDispatchList();
  const {darkMode} = useDarkMode();
  document.body.style = `background: ${darkMode? '#1e293b' : 'white'};`;

  console.log('my list rendered Again ********************')
  console.log('hasMore ****************** => ' , hasMore)

  const fetchData = async () => {
    const data = await sendRequest(
      'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
      { ...list.requestConfig, ProductID: list.allItems[list.allItems.length-1].ID }
    );

    dispatchList({
      type: 'load-more-data',
      payload: {
        newData: data.Product,
      },
    });

    // if(data.requestConfig.ProductCategoryID !== -1) {
    //   setHasMore(false);
    // }

    setItems(() => [...items, data.Product]);

    if (data.Product.length < 20 ) {
      setHasMore(false);
    } 

  };

  console.log('hasMore ============ > ' , hasMore)

  return (
    // <div id="scrollableDiv">
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={
          <div className={`mb-8 ${darkMode?'bg-slate-800 border-slate-800' : 'bg-white border-white'}`}>
            <ProductShimmer />
          </div>
        }
        // scrollableTarget="scrollableDiv"
        // endMessage={'list finished.'}
      >
        {
          <div className={`relative h-auto flex flex-col z-[19] ${darkMode?'bg-slate-800 border-slate-800' : 'bg-white border-white'} border`}>
            {/* LOAD SHIMMER EFFECTS */}
            {(isEmptyObject(list) || list?.isLoading) && (
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((el) => {
                  return (
                    <div className="my-16">
                      <ProductShimmer key={el} />
                    </div>
                  );
                })}
              </div>
            )}
          
        {!isEmptyObject(list) && console.log('list :' , list)}

            {/* LOAD LIST PRODUCTS */}
            {!isEmptyObject(list) && !list.isLoading && (
              <section className={`${darkMode?'bg-slate-800' : 'bg-white'} z-[19] relative mx-auto text-black px-2 sm:px-1 md:px-20 xl:px-[12rem] lg:px-16`}>
                {list.allItems.length === 0 && (
                  <p className={`text-lg text-center mt-5 ${darkMode? 'text-slate-300' : 'text-black'} `}>
                    {' '}
                    هیچ موردی یافت نشد! 🙁{' '}
                  </p>
                )}
                {list.allItems.map((item) => {
                  return <Product key={item.productID} item={item} />;
                })}
              </section>
            )}
          </div>
        }
      </InfiniteScroll>
    // </div>
  );
};

export default List;
