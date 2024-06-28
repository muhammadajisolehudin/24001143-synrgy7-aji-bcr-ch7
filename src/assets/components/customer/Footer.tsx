import React from 'react';
import icon_facebook from '../../img/icon/icon_facebook.svg';
import icon_instagram from '../../img/icon/icon_instagram.svg';
import icon_twitter from '../../img/icon/icon_twitter.svg';
import icon_mail from '../../img/icon/icon_mail.svg';
import icon_twitch from '../../img/icon/icon_twitch.svg';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[40vh] items-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 w-full">
        <div className="flex flex-col gap-4">
          <p>Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000</p>
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
              <img src={icon_facebook} alt="Facebook" />
            </div>
            <div className="btn-footer">
              <img src={icon_instagram} alt="Instagram" />
            </div>
            <div className="btn-footer">
              <img src={icon_twitter} alt="Twitter" />
            </div>
            <div className="btn-footer">
              <img src={icon_mail} alt="Mail" />
            </div>
            <div className="btn-footer">
              <img src={icon_twitch} alt="Twitch" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 lg:mt-0 lg:gap-2">
          <p>Copyright Binar 2022</p>
          <button className="bg-[#0D28A6] h-[34px] w-[100px]"></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
