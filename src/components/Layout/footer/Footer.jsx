import React from 'react'
import reziImg from '../../../assests/images/rezi.png'
import enamadImg from '../../../assests/images/enamad.png'


const Footer = () => {
  return (
    <footer className='bg-gray-800 flex flex-col justify-center items-center py-10 gap-5'>
        <div className='flex justify-center items-center gap-2'>
            <img className='rounded-sm'  src={reziImg} alt="rezi"/>
            <img  className='rounded-sm' src={enamadImg} alt="rezi"/>
        </div>
        <div className='h-[.5px] w-[57%] bg-white'></div>
        <span className='text-gray-500 text-sm'>
        استفاده از مطالب این سایت، برای مقاصد غیرتجاری و با ذکر منبع، بلامانع است. تمامی حقوق این سایت متعلق به هلدینگ پرهام کیش میباشد
        </span>
    </footer>
  )
}

export default Footer