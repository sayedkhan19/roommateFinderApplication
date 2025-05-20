import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import slider1 from '../assets/1 (1).jpg';
import slider2 from '../assets/1 (2).jpg';
import slider3 from '../assets/1 (3).jpg';

const Slider = () => {
  return (
    <div className="w-full mt-2 mx-auto px-4 ">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        className="aspect-[12/5] rounded-2xl"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={slider1}
              alt="Asphalt 9"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-md">
              <h2 className="text-white text-lg md:text-xl font-semibold">
                Asphalt 9
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={slider2}
              alt="Focus Keeper"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-md">
              <h2 className="text-white text-lg md:text-xl font-semibold">
                Focus Keeper
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={slider3}
              alt="Programming Hero"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-md">
              <h2 className="text-white text-lg md:text-xl font-semibold">
                Programming Hero
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
