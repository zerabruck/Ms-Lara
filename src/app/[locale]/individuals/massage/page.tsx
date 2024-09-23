"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MassageLandingCard from "@/components/dropdown-pages-component/MassageLandingCard";
import MassageHowItWorksSection from "@/components/dropdown-pages-component/MassageHowItWorksSection";
import MassageReview from "@/components/dropdown-pages-component/MassageReview";
import OnDemandMassageSection from "@/components/dropdown-pages-component/OnDemandMassageSection";
import DesignedForYouSection from "@/components/dropdown-pages-component/DesignedForYouSection";
import MassageFaq from "@/components/dropdown-pages-component/MassageFaq";
import ClientSaying from "@/components/dropdown-pages-component/ClientSayingSection";
import BookAMassage from "@/components/dropdown-pages-component/BookAMassage";
import MassagePricing from "@/components/dropdown-pages-component/MassagePricing";
import NationalMassage from "@/components/dropdown-pages-component/NationalMassage";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation("dropdownpages");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="font-[helvetica]">
      <div className=" h-[89vh] flex items-center bg-cover bg-[url(/drop-down-images/massaged-man-mobile.png)] sm:bg-[url(/drop-down-images/massaged-man.png)] bg-center bg-no-repeat">
        <div className="flex items-center justify-center sm:justify-start sm:mt-[23rem] mt-0   w-full h-full  text-white b  flex-col gap-5  ">
          <div className="w-full h-fit flex flex-col py-[1rem] gap-5  bg-[#EAE2F761]">
            <div className="sm:w-[482.86px] w-[293.37px]  mx-auto">
              <Slider {...settings}>
                <div>
                  <MassageLandingCard
                    title={t("massage.header.cardFirst.title")}
                    description={t("massage.header.cardFirst.description")}
                  />
                </div>
                <div>
                  <MassageLandingCard
                    title={t("massage.header.cardFirst.title")}
                    description={t("massage.header.cardFirst.description")}
                  />
                </div>
                <div>
                  <MassageLandingCard
                    title={t("massage.header.cardFirst.title")}
                    description={t("massage.header.cardFirst.description")}
                  />
                </div>
              </Slider>
            </div>
            <div className="mx-auto">
              <input
                className=" w-[221.77px] sm:w-[375.03px] h-[39px] bg-white rounded-[5px] text-black font-normal leading-[17px] tracking-[0.01em] text-[10px] text-left sm:text-center placeholder:text-left sm:placeholder:text-center px-2 placeholder:text-[#858585]"
                placeholder={t("massage.header.inputPlaceholder")}
              />
            </div>

            <button className="px-2 mx-auto h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
              {t("massage.header.button")}
            </button>
          </div>
        </div>
      </div>
      <MassageHowItWorksSection />
      <MassageReview />
      <OnDemandMassageSection />
      <DesignedForYouSection />
      <MassageFaq />
      <ClientSaying />
      <BookAMassage />
      <MassagePricing />
      <NationalMassage />
    </div>
  );
};

export default Page;
