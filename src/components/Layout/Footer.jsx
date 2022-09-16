import React from 'react';
import reziImg from '../../assests/images/rezi.png';
import enamadImg from '../../assests/images/enamad.png';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center gap-5 py-10 bg-[#1E1E1E] p-4 z-[19] relative"
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        <img className="rounded-lg" src={reziImg} alt="rezi" />
        <img className="rounded-lg" src={enamadImg} alt="rezi" />
      </div>
      <div className="h-[.5px] w-[57%] bg-[#7E7E7E]"></div>
      <span className="text-[#4E4E4E] text-[16px] text-center">
        استفاده از مطالب این سایت، برای مقاصد غیرتجاری و با ذکر منبع، بلامانع
        است. تمامی حقوق این سایت متعلق به
        <a className="text-[#7D7D7D]" href="http://parhamkish.com/">
          {' '}
          هلدینگ پرهام کیش{' '}
        </a>
        میباشد
      </span>
    </footer>
  );
};

export default Footer;
