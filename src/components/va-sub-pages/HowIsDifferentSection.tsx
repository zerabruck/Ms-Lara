import React, { useState } from "react";
import SideCircleImageCard from "./SideCircleImageCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
const HowIsDifferentSection = () => {
  const { t } = useTranslation();
  const tabs = [
    t("massageForVeterna.howIsDifferent.tabs.first"),
    t("massageForVeterna.howIsDifferent.tabs.second"),
    t("massageForVeterna.howIsDifferent.tabs.third"),
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
  };
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  return (
    <div
      className="w-full pb-10 px-8"
      style={{
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.2) 15%, rgba(133, 171, 247, 0.2) 54%, rgba(81, 164, 242, 0.2) 81%)",
      }}
    >
      <div className="max-w-[994px] mx-auto">
        <p></p>
        <p className="font-helvetica text-center text-[25px] font-normal leading-[32.37px] text-[#000000] py-4">
          How is Different?
        </p>
        <div className="w-[87%] h-full  pt-8 flex  font-helvetica sm:text-[18px] text-[8px] font-normal  text-left">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-col  w-[30%]
              `}
            >
              <button
                onClick={() => setSelectedTabIndex(index)}
                className={`sm:py-5 sm:h-[56px] h-[33px] py-1 rounded-tr-lg ${
                  selectedTabIndex === index
                    ? "bg-[#0D99FF] text-white"
                    : " text-black"
                }   `}
              >
                <span className={`ml-auto text-[8px] sm:text-[18px]`}>
                  {tab}
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="max-w-[994px] bg-white  p-3 sm:py-5 ">
          <p className="font-helvetica text-[12px] font-normal leading-[28px] tracking-[0.01em] text-justify text-[#5E596D] whitespace-pre-line mb-2">
            {t("massageForVeterna.howIsDifferent.howIsDifferentTab.first")}
          </p>
          <p className="font-helvetica text-[12px] font-normal leading-[28px] tracking-[0.01em] text-justify text-[#5E596D] whitespace-pre-line mb-2">
            {t("massageForVeterna.howIsDifferent.howIsDifferentTab.second")}
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <SideCircleImageCard
                author={t("massageForVeterna.testimonial.first.author")}
                body={t("massageForVeterna.testimonial.first.body")}
                imageUrl="/veterans-images/circle-image.png"
              />
            </div>
            <div>
              <SideCircleImageCard
                author={t("massageForVeterna.testimonial.first.author")}
                body={t("massageForVeterna.testimonial.first.body")}
                imageUrl="/veterans-images/circle-image.png"
              />
            </div>
            <div>
              <SideCircleImageCard
                author={t("massageForVeterna.testimonial.first.author")}
                body={t("massageForVeterna.testimonial.first.body")}
                imageUrl="/veterans-images/circle-image.png"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HowIsDifferentSection;
