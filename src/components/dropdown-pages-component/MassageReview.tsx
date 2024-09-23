"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
const MassageReview = () => {
  const { t } = useTranslation("dropdownpages");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="max-w-[792px] mx-auto px-[2rem] sm:pb-[2rem]">
      <Slider {...settings}>
        <div className=" flex justify-center">
          <div className="max-w-[792px] flex-col justify-center items-center">
            <p className="font-helvetica text-[18px] sm:text-[25px] font-normal leading-[23.31px] sm:leading-[32.37px] text-center">
              {t("massage.testimonial.first.description")}
            </p>
            <p className="font-helvetica text-[12px] font-normal leading-[17px] tracking-[0.01em] text-center">
              {t("massage.testimonial.first.author")}
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-[792px] flex-col justify-center items-center">
            <p className="font-helvetica text-[18px] sm:text-[25px] font-normal leading-[23.31px] sm:leading-[32.37px] text-center">
              {t("massage.testimonial.second.description")}
            </p>
            <p className="font-helvetica text-[12px] font-normal leading-[17px] tracking-[0.01em] text-center">
              {t("massage.testimonial.second.author")}
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-[792px] flex-col justify-center items-center">
            <p className="font-helvetica text-[18px] sm:text-[25px] font-normal leading-[23.31px] sm:leading-[32.37px] text-center">
              {t("massage.testimonial.third.description")}
            </p>
            <p className="font-helvetica text-[12px] font-normal leading-[17px] tracking-[0.01em] text-center">
              {t("massage.testimonial.third.author")}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MassageReview;
