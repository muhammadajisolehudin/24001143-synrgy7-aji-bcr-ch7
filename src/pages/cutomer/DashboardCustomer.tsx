import React from 'react';
import img_car from '../../assets/img/img_car.png';
import icon_facebook from '../../assets/img/icon/icon_facebook.svg';
import icon_instagram from '../../assets/img/icon/icon_instagram.svg';
import icon_twitter from '../../assets/img/icon/icon_twitter.svg';
import icon_mail from '../../assets/img/icon/icon_mail.svg';
import icon_twitch from '../../assets/img/icon/icon_twitch.svg';

const DashboardCustomer: React.FC = () => {
  return (
    <div className="px-[4%] lg:px-[8%] bg-[#F1F3FF] pt-[20px] overflow-x-hidden">
      <div className="h-[100vh] lg:h-[70vh] w-full relative">
        {/* navigation */}
        <div id="navigation" className="flex justify-between items-center w-full">
          <button className="bg-[#0D28A6] h-[34px] w-[100px]"></button>
          <div className="flex justify-center items-center">
            <ul
              id="menu"
              className="z-50 flex flex-col lg:flex-row absolute lg:static lg:right-0 right-[-9.5%] top-[-3%] lg:top-0 w-[50vw] lg:w-full bg-[#FFFFFF] lg:bg-transparent h-[100vh] lg:h-[auto] items-left lg:items-center gap-5 lg:gap-8 p-5 lg:p-0 transform translate-x-full lg:translate-x-0 transition duration-[1s]"
            >
              <li className="mt-1">
                <a href="" className="font-bold lg:hidden">
                  BCR
                </a>
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
                <a className="text-white font-bold" href="">
                  Register
                </a>
              </li>
            </ul>
            <button id="menu-toggle" className="z-50 menu-toggle block lg:hidden mt-1">
              <div id="garis1" className="w-[18px] transition duration-[0.5s] h-[2px] rounded bg-[#222222] mb-1 transform origin-left"></div>
              <div id="garis2" className="w-[18px] h-[2px] rounded bg-[#222222] mb-1"></div>
              <div id="garis3" className="w-[18px] transition duration-[0.5s] h-[2px] rounded bg-[#222222] mb-1 transform origin-left"></div>
            </button>
          </div>
        </div>
        {/* /navigation */}

        {/* main section */}
        <div id="main-section" className="flex flex-col lg:grid lg:grid-cols-2">
          <div className="mt-8 lg:flex lg:flex-col lg:mt-[7rem]">
            <h1 className="mb-5">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="hidden lg:block text-justify mb-4">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
              sewa mobil selama 24 jam.
            </p>
            <p className="text-justify mb-4 lg:hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-[#5CB85F] h-[36px] w-[140px] rounded-[2px] text-white font-bold text-[14px]">
              Mulai Sewa Mobil
            </button>
          </div>
          <div className="flex mt-5">
            <img
              className="absolute -right-[4.5%] lg:-right-[10%] bottom-0 mx-0 px-0 lg:w-[60%]"
              width="100%"
              height="auto"
              src={img_car}
              alt=""
            />
          </div>
        </div>
        {/* /main section */}
      </div>

      <div className="bg-white px-[4%] lg:px-[8%]">
        {/* our section */}
        <div id="our-section" className="lg:h-[100vh] lg:grid lg:grid-cols-2 lg:items-center">
          <div className="px-auto h-[60vw] lg:h-[55%] mt-12 lg:mt-4 flex justify-center">
            <img src="assets/img/img_service.png" alt="" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center pl-[4%]">
            <h3 className="my-5">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p className="mb-4">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan
              terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div id="wrapper" className="flex flex-col gap-3">
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
        {/* /our section */}

        {/* why as section */}
        <div id="whyUs-section" className="flex flex-col gap-3 items-center lg:items-start lg:gap-5">
          <h3 className="mt-12 lg:mt-0">Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="flex gap-5 flex flex-col mt-1 lg:grid lg:grid-cols-4 lg:mt-4">
            <div className="border border-[#D0D0D0] p-5 flex flex-col gap-4 rounded-[8px]">
              <img src="assets/img/icon/icon_complete.svg" alt="" height="32px" width="32px" />
              <h4 className="text-[16px] font-bold">Mobil Lengkap</h4>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
              </p>
            </div>
            <div className="border border-[#D0D0D0] p-5 flex flex-col gap-4 rounded-[8px]">
              <img src="assets/img/icon/icon_price.svg" alt="" height="32px" width="32px" />
              <h4 className="text-[16px] font-bold">Harga Murah</h4>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                lain
              </p>
            </div>
            <div className="border border-[#D0D0D0] p-5 flex flex-col gap-4 rounded-[8px]">
              <img src="assets/img/icon/icon_24hrs.svg" alt="" height="32px" width="32px" />
              <h4 className="text-[16px] font-bold">Layanan 24 Jam</h4>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                akhir minggu
              </p>
            </div>
            <div className="border border-[#D0D0D0] p-5 flex flex-col gap-4 rounded-[8px]">
              <img src="assets/img/icon/icon_professional.svg" alt="" height="32px" width="32px" />
              <h4 className="text-[16px] font-bold">Pengemudi Profesional</h4>
              <p>
                Memiliki tim sopir profesional yang berpengalaman dan ramah dalam
                perjalanan
              </p>
            </div>
          </div>
        </div>
        {/* /why as section */}

        {/* testimonial section */}
        <div id="testimonial-section" className="flex flex-col gap-3 items-center lg:items-start lg:gap-5">
          <h3 className="mt-12 lg:mt-0">Testimonial</h3>
          <p>Berikut adalah beberapa testimoni dari pelanggan kami:</p>
          <div className="mt-4 flex flex-col gap-5">
            <div className="flex gap-5">
              <img src="assets/img/person1.png" alt="" height="70px" width="70px" className="rounded-full" />
              <div className="bg-[#E5E5E5] p-5 flex flex-col gap-2 rounded-[8px] w-full">
                <h4 className="text-[16px] font-bold">Megan Fox</h4>
                <p>
                  "Saya sangat puas dengan layanan Binar Car Rental. Mobilnya sangat
                  nyaman dan sopirnya ramah. Sangat direkomendasikan!"
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="assets/img/person2.png" alt="" height="70px" width="70px" className="rounded-full" />
              <div className="bg-[#E5E5E5] p-5 flex flex-col gap-2 rounded-[8px] w-full">
                <h4 className="text-[16px] font-bold">John Doe</h4>
                <p>
                  "Pilihan mobilnya lengkap dan proses sewanya mudah. Harga juga
                  terjangkau!"
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /testimonial section */}

        {/* FAQ section */}
        <div id="faq-section" className="flex flex-col gap-3 items-center lg:items-start lg:gap-5">
          <h3 className="mt-12 lg:mt-0">FAQ</h3>
          <p>Berikut adalah beberapa pertanyaan yang sering ditanyakan:</p>
          <div className="mt-4 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Apa syarat untuk menyewa mobil di Binar Car Rental?
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Apa saja jenis mobil yang tersedia?
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Bagaimana cara pembayaran sewa mobil?
              </p>
              <p className="flex">
                <img className="mr-4 object-contain" src="assets/img/chek.png" alt="" />
                Apakah bisa sewa mobil lepas kunci?
              </p>
            </div>
          </div>
        </div>
        {/* /FAQ section */}
      </div>

      <footer className="bg-[#5CB85F] mt-5 lg:mt-[7rem] py-5">
        <div className="flex justify-between items-center px-[4%] lg:px-[8%]">
          <div className="flex gap-5">
            <img src={icon_facebook} alt="" className="w-[24px]" />
            <img src={icon_instagram} alt="" className="w-[24px]" />
            <img src={icon_twitter} alt="" className="w-[24px]" />
            <img src={icon_mail} alt="" className="w-[24px]" />
            <img src={icon_twitch} alt="" className="w-[24px]" />
          </div>
          <p className="text-white text-[14px] lg:text-[16px]">
            &copy; 2024 Binar Car Rental. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardCustomer;
