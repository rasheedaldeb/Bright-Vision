import React from 'react'
import './Services.css'
import { servicesInfo } from '../../data/data';
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
  
const Services = () => {
  return (
   <div className="services container-section ">
            <h2 className="hero-title text-5xl text-primary font-bold">
                Our <span className="text-secondaryDark">Services</span> 
            </h2>
            <div className="">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disabledInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    {
                        servicesInfo.map((serviceInfo) => (
                            <SwiperSlide>
                                <div className="service-item flex flex-col">
                                    <div className="service-icon">
                                        <img src= {serviceInfo.image} alt="..."  />
                                    </div>
                                    <h4 className="service-title text-lg font-semibold text-primary">{serviceInfo.title}</h4>
                                    <p className="service-text text-secondaryDark">
                                    {serviceInfo.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                 </Swiper>
            </div>
        </div>
  )
}

export default Services
