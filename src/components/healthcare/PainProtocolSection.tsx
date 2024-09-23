"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const PainProtocolSection = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex pb-10 sm:pb-0 flex-col  sm:gap-24 gap-6 sm:px-[7rem] items-center justify-between sm:flex-row bg-[#D9D9D9] sm:bg-transparent sm:bg-gradient-to-r from-[rgba(166,207,245,0.17)] via-[rgba(184,167,238,0.17)] to-[rgba(215,209,233,0.17)]">
      <div className="relative w-full sm:w-[40%] h-[447px] sm:h-[635px]">
        <Image
          fill
          src="/healthcare-images/pain-protocol.png"
          alt="pain protocol"
        />
      </div>
      <div className="sm:w-[50%]">
        <p className="font-helvetica px-[2rem] sm:ml-2 text-[#0D99FF] text-[12px] sm:text-[16px] font-normal leading-[24px] text-left">
          {t("healthcare.painProtocol.title")}
        </p>
        <p className="font-helvetica px-[2rem] text-left sm:pl-6  pb-[1.5rem] sm:pt-[1rem] text-[20] sm:text-[25px] font-normal leading-[32.37px]">
          {t("healthcare.painProtocol.subtitle")}
        </p>
        <div className="flex flex-col px-[2rem] gap-5 w-full ">
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="relative w-[10%]  h-[55px]">
              <Image
                fill
                src="/icons/raphael_employee.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[494px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.painProtocol.first")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="relative w-[10%]  h-[43px]">
              <Image
                fill
                src="/icons/ri_heart-pulse-line.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[517px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.painProtocol.second")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 ">
            <div className="relative w-[10%]  h-[43px]">
              <Image
                fill
                src="/icons/ph_first-aid-kit-bold.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[533px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.painProtocol.third")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 ">
            <div className="relative w-[10%]  h-[43px]">
              <Image
                fill
                src="/icons/healthicons_child-care-outline.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[489px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.painProtocol.fourth")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainProtocolSection;
