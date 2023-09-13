import React from 'react';
import SkillsCard from './SkillsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay } from 'swiper';

const Carousel = ({ data }) => {
  return (
    <div className="container">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 150,
          modifier: 2,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className='swiper_container'
      >
        {data.map((link, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <SkillsCard svg={link.svg} text={link.text} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default Carousel;