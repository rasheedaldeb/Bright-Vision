import React from 'react'
import './Work.css'
import { worksImgs } from "./../../Img/Img";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Work = () => {
  return (
    <div className="works container-section">
        <h2 className="hero-title text-5xl text-primary font-bold">
            Our <span className="text-secondaryDark">Works</span> 
        </h2>
        <div className="work-content">
             <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        loop={true}
                        
                        autoplay={{
                            delay:2500,
                            disabledInteraction: false
                        }}
                        breakpoints={{
                        678: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        870: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >                                  
                    <SwiperSlide><img src={worksImgs.work1} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work2} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work3} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work4} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work5} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work6} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work7} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work8} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work9} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
                    <SwiperSlide><img src={worksImgs.work10} className="gallery-img galleryImage" alt="gallery" /></SwiperSlide>
          
             </Swiper>
        </div>  
    </div>
  )
}

export default Work
 