"use client";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const PatientFirstSection = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex py-[2rem] sm:pb-0 flex-col px-[2rem] sm:gap-24 gap-6 sm:px-[7rem] items-center justify-between sm:flex-row ">
      <div className="sm:w-[50%]">
        <p className="font-helvetica text-left sm:pl-6  pb-[1.5rem] sm:pt-[1rem] text-[20] sm:text-[25px] font-normal leading-[32.37px]">
          <Trans
            i18nKey="healthcare.patientFirst.title"
            components={[<br key={0} />]}
          />
        </p>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="relative w-[10%]  h-[55px]">
              <Image
                fill
                src="/icons/mdi_sun-protection-outline.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[494px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.patientFirst.first")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="relative w-[10%]  h-[55px]">
              <Image
                fill
                src="/icons/grommet-icons_technology.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[494px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.patientFirst.second")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="relative w-[10%]  h-[43px]">
              <Image
                fill
                src="/icons/healthicons_mobile.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[517px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.patientFirst.third")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 ">
            <div className="relative w-[10%]  h-[43px]">
              <Image fill src="/icons/carbon_map.svg" alt="pain protocol" />
            </div>
            <p className="font-helvetica w-[80%] max-w-[533px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.patientFirst.fourth")}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 ">
            <div className="relative w-[10%]  h-[43px]">
              <Image
                fill
                src="/icons/simple-line-icons_calender.svg"
                alt="pain protocol"
              />
            </div>
            <p className="font-helvetica w-[80%] max-w-[489px] text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
              {t("healthcare.patientFirst.fifth")}
            </p>
          </div>
          <div className="w-full flex justify-center sm:justify-start">
            <button className="w-[181px]  ml-3  my-5 h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
              {t("healthcare.patientFirst.button")}
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full hidden sm:block -mt-[10rem] sm:w-[40%] h-[905px]">
        <Image
          fill
          src="/healthcare-images/healthcare-app.png"
          alt="pain protocol"
        />
      </div>
      <div className="relative sm:hidden w-[245.73px]  sm:w-[40%] h-[419.42px]">
        <Image
          fill
          src="/healthcare-images/healthcare-app.png"
          alt="pain protocol"
        />
      </div>
    </div>
  );
};

export default PatientFirstSection;
