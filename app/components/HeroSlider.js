"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import HeroSliderButton from "./HeroSliderButton";
import HeroArrowButton from "./HeroArrowButton";
import { FaChevronRight } from "react-icons/fa6";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/bg-slider.png')`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        padding: "40px 50px",
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".arrow-left",
          nextEl: ".arrow-right",
        }}
        // autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-8 sm:flex-row-reverse md:w-fit mx-auto">
            <div className="flex justify-end">
              <Image
                src="/slider-image-1.png"
                alt="slider-image-1"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col items-center text-center justify-center md:items-start">
              <h1 className="text-[37px] leading-heroTitle text-green mb-4 font-normal text-start w-[270px] h-[83px] pl-4 md:p-0">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="hidden md:block text-start font-light text-green md:mb-4 w-[400px]">
                Nunc porttitor tortor metus, nec sagittis lectus accumsan quis.
                Aenean euismod mollis tempor.
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row gap-3 py-2">
                <HeroSliderButton
                  style="bg-green text-white"
                  textStyle="justify-between"
                >
                  SHOP NOW
                  <FaChevronRight className="mr-4" />
                </HeroSliderButton>
                <HeroSliderButton
                  textStyle="justify-center"
                  style="md:text-green md:border-2 md:border-green"
                >
                  TAKE THE QUIZ
                </HeroSliderButton>
              </div>
              <div className="relative flex gap-2 mt-4 md:mt-10">
                <HeroArrowButton variant="left" currentSlide={currentSlide} />
                <HeroArrowButton variant="right" currentSlide={currentSlide} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-8 sm:flex-row-reverse md:w-fit mx-auto">
            <div className="flex justify-end">
              <Image
                src="/slider-image-1.png"
                alt="slider-image-2"
                width={500}
                height={500}
                className="rounded-lg z-10 object-cover"
              />
            </div>
            <div className="flex flex-col items-center text-center justify-center md:items-start">
              <h1 className="text-[37px] leading-heroTitle text-green mb-4 font-normal text-start w-[270px] h-[83px] pl-4 md:p-0">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="hidden md:block text-start font-light text-green md:mb-4 w-[400px]">
                Nunc porttitor tortor metus, nec sagittis lectus accumsan quis.
                Aenean euismod mollis tempor.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 py-2">
                <HeroSliderButton
                  style="bg-green text-white"
                  textStyle="justify-between"
                >
                  SHOP NOW
                  <FaChevronRight />
                </HeroSliderButton>
                <HeroSliderButton
                  textStyle="justify-center"
                  style="md:text-green md:border-2 md:border-green"
                >
                  TAKE THE QUIZ
                </HeroSliderButton>
              </div>
              <div className="relative flex gap-2 mt-4 md:mt-10">
                <HeroArrowButton variant="left" currentSlide={currentSlide} />
                <HeroArrowButton variant="right" currentSlide={currentSlide} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center gap-8 sm:flex-row-reverse md:w-fit mx-auto">
            <div className="flex justify-end">
              <Image
                src="/slider-image-1.png"
                alt="slider-image-3"
                width={500}
                height={500}
                className="rounded-lg z-10 object-cover"
              />
            </div>
            <div className="flex flex-col items-center text-center justify-center md:items-start">
              <h1 className="text-[37px] leading-heroTitle text-green mb-4 font-normal text-start w-[270px] h-[83px] pl-4 md:p-0">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="hidden md:block text-start font-light text-green md:mb-4 w-[400px]">
                Nunc porttitor tortor metus, nec sagittis lectus accumsan quis.
                Aenean euismod mollis tempor.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 py-2">
                <HeroSliderButton
                  style="bg-green text-white"
                  textStyle="justify-between"
                >
                  SHOP NOW
                  <FaChevronRight />
                </HeroSliderButton>
                <HeroSliderButton
                  textStyle="justify-center"
                  style="md:text-green md:border-2 md:border-green"
                >
                  TAKE THE QUIZ
                </HeroSliderButton>
              </div>
              <div className="flex mt-4 ml-2 md:mt-10">
                <HeroArrowButton variant="left" currentSlide={currentSlide} />
                <HeroArrowButton variant="right" currentSlide={currentSlide} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
