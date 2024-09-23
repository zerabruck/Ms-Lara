"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const VaProudlyServing = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="px-[2rem] sm:px-[7rem] flex flex-col sm:flex-row justify-between items-start sm:items-center py-[2rem] ">
      <div className="flex flex-col gap-5">
        <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] text-left">
          {t("va.massageForVeteran.title")}
        </p>
        <div className="max-w-[461px] flex flex-col gap-1">
          <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("va.massageForVeteran.firstDescription")}
          </p>
          <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("va.massageForVeteran.secondDescription")}
          </p>
          <button className="w-[232px] my-[2.5rem] ml-3 h-[48px]  flex justify-center items-center bg-[#0D99FF] gap-2 ">
            <span className="font-helvetica text-white text-[16px] font-normal leading-[24px] text-left">
            {t("va.massageForVeteran.button")}
            </span>
            <Image
              alt="arrow"
              src="/icons/right-arrow-icon.svg"
              width={10}
              height={10}
            />
          </button>
        </div>
      </div>
      <div className=" hidden sm:block relative w-full object-contain sm:w-[568px] h-[438px]">
        <Image
          fill
          alt="Image of a person smiling"
          src="/drop-down-images/veteran-image.png"
        />
      </div>
      <div className=" sm:hidden relative w-full  sm:w-[568px] h-[208px]">
        <Image
          fill
          alt="Image of a person smiling"
          src="/drop-down-images/veteran-mobile-image.png"
        />
      </div>
    </div>
  );
};

export default VaProudlyServing;
