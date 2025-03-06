"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Image from "next/image";

import VideoImage from "@/assets/product-page/video-image.jpg";
import ProductImage01 from "@/assets/product-page/image-01.jpg";
import ProductImage02 from "@/assets/product-page/image-02.jpg";
import ProductImage03 from "@/assets/product-page/image-03.jpg";
import ProductImage04 from "@/assets/product-page/image-04.jpg";


export default function ProductGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "30px",
                background: "rgba(49, 55, 66, 0.80)" 
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 clip-path-element md:mb-8 mb-4 backdrop-blur-md"
            >
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            className="w-full h-full absolute"
                            src={`https://www.youtube.com/embed/rn4qhWWfgCM?si=thODneP-A-PRtGQ-`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>    
                        <Image src={ProductImage01} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>    
                        <Image src={ProductImage02} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>    
                        <Image src={ProductImage03} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative" style={{ paddingBottom: "56.25%" }}>    
                        <Image src={ProductImage04} className="clip-path-images w-full h-full absolute" alt="" />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>

            {/* Miniaturas */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1440: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },

                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                  }}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper cursor-pointer"
            >
                <SwiperSlide>   
                    <Image src={VideoImage} className="clip-path-images" alt="" />
                </SwiperSlide>
                <SwiperSlide>   
                    <Image src={ProductImage01} className="clip-path-images" alt="" />
                </SwiperSlide>
                <SwiperSlide>   
                    <Image src={ProductImage02} className="clip-path-images" alt="" />
                </SwiperSlide>
                <SwiperSlide>   
                    <Image src={ProductImage03} className="clip-path-images" alt="" />
                </SwiperSlide>
                <SwiperSlide>   
                    <Image src={ProductImage04} className="clip-path-images" alt="" />
                </SwiperSlide>
            
            </Swiper>
        </div>
    )
}
