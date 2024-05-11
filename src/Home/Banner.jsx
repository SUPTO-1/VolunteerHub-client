import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import first from '../../public/images/5.jpg';
import second from '../../public/images/2.jpg';
import third from '../../public/images/3.jpg';
import fourth from '../../public/images/6.jpg';
const Banner = () => {
    return (
        <div className='sm:w-full md:w-11/12 mx-auto mt-24 md:px-16' data-aos="fade-down" data-aos-duration="1500">
            <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={1.5}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img  className='rounded-lg' src={first} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src={second} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src={third} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-lg' src={fourth} alt="" />
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;