import React from 'react';
import img_car from'../../img/img_car.png'

const Header = () => {
  return (
    <div id="main-section" className="flex flex-col lg:grid lg:grid-cols-2">
      <div className="mt-8 lg:flex lg:flex-col lg:mt-[7rem]">
        <h1 className="mb-5">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </h1>
        <p className="hidden lg:block text-justify mb-4">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br /> 
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br /> 
          untuk sewa mobil selama 24 jam.
        </p>
        <p className="text-justify mb-4 lg:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        {/* <button className="bg-[#5CB85F] h-[36px] w-[140px] rounded-[2px] text-white font-bold text-[14px]">Mulai Sewa Mobil</button> */}
      </div>
      <div className="flex mt-5">
        <img className="absolute -right-[4.5%] lg:-right-[10%] bottom-0 mx-0 px-0 lg:w-[60%]" width="100%" height="auto" src={img_car} alt="Car" />
      </div>
    </div>
  );
};

export default Header;
