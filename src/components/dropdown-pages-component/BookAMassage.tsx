"use client";
import React from "react";
import OnDemandCard from "./OnDemandCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
const BookAMassage = () => {
  const { t } = useTranslation("dropdownpages");
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: false,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  const cards = [
    {
      title: t("massage.bookAMassage.card.first.title"),
      description: t("massage.bookAMassage.card.first.description"),
    },
    {
      title: t("massage.bookAMassage.card.second.title"),
      description: t("massage.bookAMassage.card.second.description"),
    },
    {
      title: t("massage.bookAMassage.card.third.title"),
      description: t("massage.bookAMassage.card.third.description"),
    },
    {
      title: t("massage.bookAMassage.card.fourth.title"),
      description: t("massage.bookAMassage.card.fourth.description"),
    },
  ];
  return (
    <div className=" px-[2rem] flex flex-col gap-10 py-[2rem] sm:py-[5rem] sm:px-[7rem] bg-[linear-gradient(270deg,rgba(209,181,255,0.64)_15%,rgba(133,171,247,0.557273)_54%,rgba(81,164,242,0.5)_81%)]">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div>
          <p className="font-helvetica sm:py-[1rem] text-[18px] sm:text-[25px] font-normal leading-[32.37px] text-left">
            {t("massage.bookAMassage.title")}
          </p>
          <p className="font-helvetica text-[12px] text-[#242424] sm:text-[20px] font-normal leading-[25.9px] text-left">
            {t("massage.bookAMassage.description")}
          </p>
        </div>
        <div>
          <button className=" w-[178px] sm:w-[254px] h-[40px] sm:h-[70px] bg-[#FFFFFF26]  border border-white rounded-[2px] sm:text-[25px] text-[18px] font-normal leading-[32.37px] text-center">
            {t("massage.bookAMassage.button")}
          </button>
        </div>
      </div>
      <div className="slider-container ">
        <Slider className="w-full" {...settings}>
          {cards.map((card, index) => (
            <OnDemandCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BookAMassage;
