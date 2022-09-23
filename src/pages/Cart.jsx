import React from 'react';
import { useCart } from '../store/CartContext';
import CartItem from '../components/CartItem';
import { useDarkMode } from '../store/DarkModeContext';

const Cart = () => {
  const cart = useCart();
  const {darkMode} = useDarkMode();
  document.body.style = `background: ${darkMode? '#1e293b' : 'white'};`;

  return (
    <div className={`relative z-[20]  ${darkMode?'bg-slate-800 ' : 'bg-white'} `}>
      {cart.items.length === 0 && (
        <p className={`text-lg text-center mt-5 ${darkMode ? 'text-white' : 'text-black'}`}> سبد خرید شما خالی است ! 🙁 </p>
      )}

      {cart.items.length !== 0 && (
        <div className={` w-[95%] lg:w-[63%] z-[19] relative gap-[1.5rem] py-[3rem]  ${darkMode?'bg-slate-800' : 'bg-white'} mx-auto flex flex-col px-0  items-end`}>
          {cart.items.map((product) => (
            <CartItem key={product.uniqueCartItemID} product={product} />
          ))}
          <button className="px-16 mt-5 w-[100%] sm:w-[30%] transition-all text-xl py-1 bg-[#e92444] hover:bg-[#ca1d39] text-white rounded-[6px] ">
            پرداخت
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;


