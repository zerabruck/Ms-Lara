"use client";
import CorporateGiftSection from "@/components/dropdown-pages-component/CorporateGiftSection";
import FeaturedGiftSection from "@/components/dropdown-pages-component/FeaturedGiftSection";
import GifitingFaqsSection from "@/components/dropdown-pages-component/GifitingFaqsSection";
import GiftAMesssageSection from "@/components/dropdown-pages-component/GiftAMesssageSection";
import GiftsChoosetheBestExp from "@/components/dropdown-pages-component/GiftsChoosetheBestExp";
import MassageGiftWorkSection from "@/components/dropdown-pages-component/MassageGiftWorkSection";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Page = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="font-[helvetica]">
      <div className=" h-[89vh] flex items-center bg-cover bg-[url(/drop-down-images/gift-landing-mobile.png)] sm:bg-[url(/drop-down-images/gift-landing.png)] bg-center bg-no-repeat">
        <div className="flex items-center justify-center sm:justify-start sm:mt-[23rem] mt-0   w-full h-full  text-white b px-[2rem]  flex-col gap-5  ">
          <p className="sm:text-[25px] font-normal sm:leading-[32.37px] text-left font-[helvetica] text-[20px]  leading-[25.9px]">
            {t("giftsWebView.header.title")}
          </p>
          <p className="max-w-[541px] font-[helvetica] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            {t("giftsWebView.header.description")}
          </p>
          <button className="px-2 h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
            {t("giftsWebView.header.button")}
          </button>
          <p className=" font-[helvetica] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            <Trans
              i18nKey="giftsWebView.header.link"
              components={[
                <a
                  key={0}
                  className="underline"
                  href="https://www.zeel.com/account/credit"
                  target="_blank"
                />,
              ]}
            />
          </p>
        </div>
      </div>
      <GiftsChoosetheBestExp />
      <GiftAMesssageSection />
      <FeaturedGiftSection />
      <CorporateGiftSection />
      <MassageGiftWorkSection />
      <GifitingFaqsSection />
      <div className=" h-[314px] sm:my-10 my-0  flex items-center bg-cover bg-[url(/drop-down-images/Certficate-mobile.png)] sm:bg-[url(/drop-down-images/Certficate.png)] bg-center bg-no-repeat">
        <div className="flex items-center justify-center   w-full h-full  text-white b px-[2rem]  flex-col gap-5  ">
          <p className="sm:text-[25px] font-normal sm:leading-[32.37px] text-left font-[helvetica] text-[20px]  leading-[25.9px]">
            {t("giftsWebView.certificate.title")}
          </p>

          <button className="px-2 h-[48px] flex justify-center items-center border border-white font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
            {t("giftsWebView.certificate.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
