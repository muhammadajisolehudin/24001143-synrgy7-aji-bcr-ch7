import React from 'react';
import img_car from '../../assets/img/img_car.png'
import icon_facebook from '../../assets/img/icon/icon_facebook.svg'
import icon_instagram from '../../assets/img/icon/icon_instagram.svg'
import icon_twitter from '../../assets/img/icon/icon_twitter.svg'
import icon_mail from '../../assets/img/icon/icon_mail.svg'
import icon_twitch from '../../assets/img/icon/icon_twitch.svg'

const RentalPage: React.FC = () => {
  return (
    <div className="px-[4%] lg:px-[8%] bg-[#F1F3FF] pt-[20px] overflow-x-hidden">
      <div className="h-[100vh] lg:h-[70vh] w-full relative">

        {/* Navigation */}
        <div id="navigation" className="flex justify-between items-center w-full">
          <button className="bg-[#0D28A6] h-[34px] w-[100px]"></button>
          <div className="flex justify-center items-center">
            <ul
              id="menu"
              className="z-50 flex flex-col lg:flex-row absolute lg:static lg:right-0 right-[-9.5%] top-[-3%] lg:top-0 w-[50vw] lg:w-full bg-[#FFFFFF] lg:bg-transparent h-[100vh] lg:h-[auto] items-left lg:items-center gap-5 lg:gap-8 p-5 lg:p-0 transform translate-x-full lg:translate-x-0 transition duration-[1s]"
            >
              <li className="mt-1">
                <a href="" className="font-bold lg:hidden">BCR</a>
              </li>
              <li>
                <a href="#our-section">Our Service</a>
              </li>
              <li>
                <a href="#whyUs-section">Why Us</a>
              </li>
              <li>
                <a href="#testimonial-section">Testimonial</a>
              </li>
              <li>
                <a href="#faq-section">FAQ</a>
              </li>
              <li className="flex bg-[#5CB85F] w-[81px] h-[36px] justify-center items-center rounded-[2px]">
                <a className="text-white font-bold " href="">Register</a>
              </li>
            </ul>
            <button id="menu-toggle" className="z-50 menu-toggle block lg:hidden mt-1">
              <div className="w-[18px] transition duration-[0.5s] h-[2px] rounded bg-[#222222] mb-1 transform origin-left"></div>
              <div className="w-[18px] h-[2px] rounded bg-[#222222] mb-1"></div>
              <div className="w-[18px] transition duration-[0.5s] h-[2px] rounded bg-[#222222] mb-1 transform origin-left"></div>
            </button>
          </div>
        </div>

        {/* Main Section */}
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
            <img className="absolute -right-[4.5%] lg:-right-[10%] bottom-0 mx-0 px-0 lg:w-[60%]" width="100%" height="auto" src={img_car} alt="" />
          </div>
        </div>

      </div>

      {/* Search Box Section */}
      <section id="searchBox">
        <div className="bg-white py-5 lg:absolute inset-x-0 lg:top-[425px] lg:mx-28 lg:drop-shadow-lg rounded-xl static inset-auto top-auto mx-auto mt-5">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <form id="form" action="javascript:void(0)" className="grid grid-cols-1 lg:grid-cols-9 gap-5">
              <div className="relative flex flex-col gap-3 col-span-2">
                <label htmlFor="driverType" className="text-dark text-sm">Tipe Driver</label>
                <div className="relative mt-2">
                  <select
                    id="driverType"
                    className="input-form w-full border border-gray-300 rounded-md px-3 py-2 pr-10 appearance-none bg-white"
                  >
                    <option>Pilih Tipe Driver</option>
                    <option>Sedan</option>
                    <option>Convertible</option>
                    <option>Regular Cab Pickup</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="date" className="text-dark text-sm">Tanggal</label>
                <input
                  type="date"
                  id="date"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                  placeholder="Tanggal"
                />
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="time" className="text-dark text-sm">Waktu Jemput/Ambil</label>
                <input
                  type="time"
                  id="time"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                  placeholder="Waktu"
                />
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <label htmlFor="passenger" className="text-dark text-sm">Jumlah Penumpang (optional)</label>
                <input
                  type="number"
                  id="passenger"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                  placeholder="Jumlah Penumpang"
                />
              </div>
              <div className="flex flex-col justify-end col-span-1 gap-y-5">
                <button
                  type="submit"
                  className="bg-[#5CB85F] text-white py-3 disabled:opacity-50 rounded-[2px]"
                  id="btnSearchCar"
                >
                  Cari Mobil
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="px-[4%] lg:px-[8%] pt-12 lg:pt-24">
        <div className="flex flex-col lg:flex-row lg:h-[40vh] items-center py-12">
          <div className="grid-cols grid lg:grid-cols-4 w-full">
            <div className="flex flex-col gap-4">
              <p>Jalan Suroyo No. 161 Mayangan Kota <br />
                Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="flex flex-col gap-3 mt-4 lg:mt-0 lg:items-center font-medium">
              <div>
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-2 mt-4 lg:mt-0">
              <p>Connect with us</p>
              <div className="flex gap-4 lg:gap-2">
                <div className="btn-footer">
                  <img src={icon_facebook} alt="" />
                </div>
                <div className="btn-footer">
                  <img src={icon_instagram} alt="" />
                </div>
                <div className="btn-footer">
                  <img src={icon_twitter} alt="" />
                </div>
                <div className="btn-footer">
                  <img src={icon_mail} alt="" />
                </div>
                <div className="btn-footer">
                  <img src={icon_twitch} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 lg:mt-0 lg:gap-2 ">
              <p>Copyright Binar 2022</p>
              <button className="bg-[#0D28A6] h-[34px] w-[100px]"></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RentalPage;
