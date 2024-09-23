"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const MakeWellnessEasy = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="px-[2rem] lg:px-[7rem] gap-10 flex flex-col sm:flex-row py-[3rem]">
      <div className="sm:w-[47%] flex flex-col gap-5 ">
        <div className="px-5 pb-5 h-1/2 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
          <p className=" py-5 font-helvetica text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] ">
            {t("massageMembership.easyWellness.first.title")}
          </p>
          <p className="font-helvetica text-[16px] font-normal leading-[28px] text-left text-[#5E596D]">
            {t("massageMembership.easyWellness.first.description")}
          </p>
        </div>
        <div className="px-5 pb-5  h-1/2 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
          <p className=" py-5 font-helvetica text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] ">
            {t("massageMembership.easyWellness.second.title")}
          </p>
          <p className="font-helvetica text-[16px] font-normal leading-[28px] text-left text-[#5E596D]">
            {t("massageMembership.easyWellness.second.description")}
          </p>
        </div>
      </div>
      <div className="relative hidden sm:block w-[45%] h-[631px]">
        <Image
          fill
          alt="wellness image"
          src="/drop-down-images/wellness-image.png"
        />
      </div>
      <div className="relative sm:hidden w-full h-[315px]">
        <Image
          fill
          alt="wellness image"
          src="/drop-down-images/wellness-image-mobile.png"
        />
      </div>
    </div>
  );
};

export default MakeWellnessEasy;
