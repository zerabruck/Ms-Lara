"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const VaVideoHighlight = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="px-[2rem] sm:px-[7rem] flex flex-col sm:flex-row justify-between items-start sm:items-center py-[2rem] ">
      <div className=" hidden sm:block relative w-full object-contain sm:w-[568px] h-[438px]">
        <Image
          fill
          alt="Image of a person smiling"
          src="/drop-down-images/va-videohiglight.png"
        />
      </div>
      <div className=" sm:hidden relative w-full  sm:w-[568px] h-[208px]">
        <Image
          fill
          alt="Image of a person smiling"
          src="/drop-down-images/va-videohiglight-mobile.png"
        />
      </div>
      <div className="flex sm:w-[45%] flex-col  gap-2 sm:gap-[2rem]">
        <p className="font-helvetica py-5 sm:py-0 text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] text-left">
          {t("va.videoHighlight.title")}
        </p>
        <p className="font-helvetica max-w-[461px] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("va.videoHighlight.description")}
        </p>
        <p className="font-helvetica py-[1rem] sm:py-[2rem] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left text-[#0D99FF]">
          {t("va.videoHighlight.link")}
        </p>
      </div>
    </div>
  );
};

export default VaVideoHighlight;
