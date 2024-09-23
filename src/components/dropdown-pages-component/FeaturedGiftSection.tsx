import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import { useTranslation } from "react-i18next";
const FeaturedGiftSection = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="px-[2rem] sm:px-[7rem]  py-[2rem] mb-7">
      <p className="font-helvetica w-fit mx-auto text-[#343030] text-[14px] font-normal leading-[24px] text-left">
        {t("giftsWebView.featuredGift.title")}
      </p>
      <div className="flex justify-between flex-col sm:flex-row items-center py-[2rem]">
        <div className=" relative w-[190px] h-[23px]">
          <Image
            fill
            src="/drop-down-images/Town-AND-Country 1.png"
            alt="features image"
          />
        </div>
        <div className=" hidden sm:block relative w-[90px] h-[68px]">
          <Image
            fill
            src="/drop-down-images/Today 1.png"
            alt="features image"
          />
        </div>
        <div className=" hidden sm:block relative w-[172px] h-[40px]">
          <Image
            fill
            src="/drop-down-images/Glamour 1.png"
            alt="features image"
          />
        </div>
        <div className=" hidden sm:block relative w-[190px] h-[28px]">
          <Image
            fill
            src="/drop-down-images/New-York-Times 1.png"
            alt="features image"
          />
        </div>
        <div className=" hidden sm:block relative w-[158px] h-[55px]">
          <Image
            fill
            src="/drop-down-images/ABC-News 1.png"
            alt="features image"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <FeaturedCard />
        </div>
        <div>
          <FeaturedCard />
        </div>
        <div>
          <FeaturedCard />
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedGiftSection;
