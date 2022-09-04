import React, { useState } from 'react';
import ItemLable from '../icons/ItemLable';
import ImgWrapper from './ImgWrapper';
import CartPreviewsList from './CartPreviewsList';
import Description from './Description';
import ProductInfo from './ProductInfo';
import { useCart } from '../../store/CartContext';

const Product = ({ item, id }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetailsBtn = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const cartItems = useCart();

  let productCarts = [];

  cartItems.forEach((cartItem) => {
    if (cartItem.id === id) {
      productCarts.push(cartItem);
    }
  });

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
            <ProductInfo moreDetailsOnClick={toggleDetailsBtn} id={id} />
            <ImgWrapper imgs={item.Photo} />
          </div>
          <Description
            showDetails={showDetails}
            description={item.Description}
          />
          <CartPreviewsList carts={productCarts} />
        </div>
      </div>

      <div className=" h-[2px] w-full absolute -bottom-[30px]  ">
        <div className="h-[.7px] mx-auto w-[90%] bg-[#d8d8d8]"></div>
      </div>
    </div>
  );
};

export default Product;
