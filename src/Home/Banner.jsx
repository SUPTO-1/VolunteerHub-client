
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import first from '../../public/images/5.jpg';
import second from '../../public/images/2.jpg';
import third from '../../public/images/3.jpg';
import fourth from '../../public/images/6.jpg';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <div className='w-11/12 md:mx-auto mt-10 px-0 md:px-16' data-aos="fade-down" data-aos-duration="1500">
      <Slider {...settings}>
        <div className='slide md:h-[700px] w-full'>
          <img className='rounded-lg md:h-[700px] w-full' src={first} alt="First Slide" />
        </div>
        <div className='slide md:h-[700px] w-full'>
          <img className='rounded-lg md:h-[700px] w-full' src={second} alt="Second Slide" />
        </div>
        <div className='slide md:h-[700px] w-full'>
          <img className='rounded-lg md:h-[700px] w-full' src={third} alt="Third Slide" />
        </div>
        <div className='slide md:h-[700px] w-full'>
          <img className='rounded-lg md:h-[700px] w-full' src={fourth} alt="Fourth Slide" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
