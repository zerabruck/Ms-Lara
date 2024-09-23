"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const ReferalMeetYourProviderSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col pb-[3rem] px-[2rem] gap-4 items-center">
      <p className="font-helvetica py-[2rem] sm:py-[2rem] text-[#242424] text-[20px] leading-[25.9px] sm:text-[25px] font-normal sm:leading-[32.37px] text-left">
        {t("referal.meetProviders.title")}
      </p>
      <div>
        <p className="font-helvetica text-[18px] text-[#343030] font-normal leading-[22px] tracking-[0.01em] text-center">
          {t("referal.meetProviders.name")}
        </p>
        <p className="font-helvetica text-[18px] text-[#343030] font-normal leading-[22px] tracking-[0.01em] text-center">
          {t("referal.meetProviders.location")}
        </p>
      </div>
      <p className="max-w-[822px] mb-10 sm:mb-0  text-[#343030] font-helvetica text-[20px] font-normal leading-[25.9px] text-center">
        {t("referal.meetProviders.description")}
      </p>
      <div className="w-[207px] h-[207px] object-contain relative">
        <Image
          alt="A man massaging image"
          src="/drop-down-images/massage-provider.png"
          fill
        />
      </div>
    </div>
  );
};

export default ReferalMeetYourProviderSection;
