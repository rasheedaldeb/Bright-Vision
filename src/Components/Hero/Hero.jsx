import "./Hero.css";
import { sliderImgs } from "./../../Img/Img";
/* for slider */
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import companyFile from "./../../assets/company_file.pdf";

function Hero() {
  return (
    <div
      className="home-hero flex"
      style={{ backgroundImage: `url(${sliderImgs.home_bg})` }}
    >
      <div className="hero-introduction flex flex-col">
        <h1 className="hero-title text-5xl text-primary font-bold">
          Bright Vision Group
        </h1>
        <p className="text-xl text-secondary w-3/4">
          A company approved by security industry regulatory agency in the
          government of Dubai A company approved by security industry regulatory
          agency in the government of Dubai A company approved by security
          industry regulatory agency in the government of Dubai
        </p>
        <a
          href={companyFile}
          download={companyFile}
          className="md:w-[200px] h-[40px] w-[120px] text-[12px] md:text-[18px] bg-primary rounded text-secondary font-bold 
             hover:bg-opacity-0 hover:border hover:border-secondary transition-all"
        >
          Documentation
        </a>
      </div>
      <div className="hero-slider">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disabledInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={sliderImgs.slider1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImgs.slider9} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
