import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useList, useDispatchList } from '../store/ListContext';
import ProductShimmer from '../components/UI/ProductShimmer';
import Product from '../components/product/Product';
import { isEmptyObject } from '../helpers/helper';
import useFetch from '../hooks/useFetch';

const List = () => {
  const list = useList();
  const [items, setItems] = useState([]);
  const [productID, setProductID] = useState(1000);
  const [hasMore, setHasMore] = useState(true);
  const { sendRequest } = useFetch();
  const dispatchList = useDispatchList();

  const fetchData = async () => {
    const data = await sendRequest(
      'http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/',
      { ...list.requestConfig, ProductID: productID }
    );

    dispatchList({
      type: 'load-more-data',
      payload: {
        newData: data.Product,
      },
    });

    setProductID((prevProductID) => prevProductID + 1000);

    setItems(() => [...items, data.Product]);
    if (data.Product.length < 1) {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={
        <div className="mb-8">
          <ProductShimmer />
        </div>
      }
      // endMessage={'list finished.'}
    >
      {
        <div className="relative h-auto z-[19] bg-white border border-white">
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

          {/* LOAD LIST PRODUCTS */}
          {!isEmptyObject(list) && !list.isLoading && (
            <section className="z-[19] relative bg-white mx-auto text-black px-2 sm:px-1 md:px-20 xl:px-[12rem] lg:px-16">
              {list.allItems.length === 0 && (
                <p className="text-lg text-center mt-5">
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
  );
};

export default List;
