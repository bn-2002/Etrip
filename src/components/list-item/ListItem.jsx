import React, { useState } from 'react';
import './ListItem.css';
import ItemLable from '../icons/ItemLable';
import ImgWrapper from './ImgWrapper';
import Cart from './Cart';
import Description from './Description';
import CartData from './CartData';

const ListItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [showAddToCart, setShowAddToCard] = useState(true);

  const toggleDetailsBtn = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const toggleShowAddToCartBtn = () => {
    setShowAddToCard((prevShowAddToCart) => !prevShowAddToCart);
  };

  return (
    <div className="relative mx-auto h-fit mt-14">
      <div className="relative mx-8 min-h-min sm:mx-16 md:mx-2 text-[17.5px]">
        <div className="absolute -top-[6px]  left-[70px] md:left-[30px] ">
          <div className="relative z-[50]">
            <ItemLable />
            <span className="absolute top-[5px] text-white right-[37%]">
              کیش
            </span>
          </div>
        </div>

        <div className="min-h-min mt-[10px]">
          <div className="flex flex-col-reverse items-stretch justify-between gap-2 lg:flex-row">
            <CartData
              name={item.Feature && item.Feature[0].Name}
              collectionName={item.CollectionName}
              basePrice={item.Feature && item.Feature[0].BasePrice}
              finalPrice={item.Feature && item.Feature[0].FinalPrice}
              moreDetailsOnClick={toggleDetailsBtn}
              addToCartOnClick={toggleShowAddToCartBtn}
            />
            <ImgWrapper imgs={item.Photo} />
          </div>
          <Description
            showDetails={showDetails}
            description={item.Description}
          />
          <Cart showAddToCart={showAddToCart} />
        </div>
      </div>

      <div className=" h-[2px] w-full absolute -bottom-[30px]  ">
        <div className="h-[.7px] mx-auto w-[90%] bg-[#d8d8d8]"></div>
      </div>
    </div>
  );
};

export default ListItem;
