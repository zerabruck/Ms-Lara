"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const VaProviderSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="px-[2rem] lg:px-[7rem] flex flex-col lg:flex-row justify-between items-start lg:items-center py-[2rem] ">
      <div className=" hidden lg:block relative w-full object-contain lg:w-[568px] h-[438px]">
        <Image
          fill
          alt="Image of a person smiling"
          src="/drop-down-images/va-provider.png"
        />
      </div>
      <div className=" lg:hidden relative w-full object-cover  lg:w-[568px] h-[208px]">
        <Image
          fill
          alt="Image of a person smiling"
          src="/drop-down-images/va-provider-mobile.png"
        />
      </div>
      <p className="w-[167px] lg:hidden mb-5 -mt-8 mx-auto z-10 p-[1rem] h-[61px] bg-[#0D99FF] text-white font-Helvetica text-[11px] font-normal leading-[12px] tracking-[0.01em] text-left">
        {t("va.provider.name")}
      </p>
      <div className="flex lg:w-[45%] flex-col items-start  gap-5 lg:gap-[2rem]">
        <p className="font-helvetica max-w-[464px] text-[25px] font-normal leading-[32.37px] text-left">
          {t("va.provider.description")}
        </p>
        <p className="w-[224px] hidden lg:block -ml-[240px] z-10 p-[1rem] h-[79px] bg-[#0D99FF] text-white font-[Helvetica] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
          {t("va.provider.name")}
        </p>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-helvetica text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
            {t("va.provider.link")}
          </p>
          <div className="w-[11.57px] relative h-[11px]">
            <Image fill src="/icons/left-circle.svg" alt="left icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaProviderSection;
