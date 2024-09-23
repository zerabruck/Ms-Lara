import React from "react";
import { useTranslation } from "react-i18next";
const MassageHowItWorksSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="">
      <p className=" mt-[6rem] mb-10 sm:my-0 sm:py-[2rem] font-helvetica text-[25px] font-normal leading-[32.37px] text-center">
        {t("massage.howItWorks.title")}
      </p>
      <div className="relative px-8  pb-20 sm:px-28 z-3 flex justify-center flex-wrap md:flex-nowrap gap-16">
        <div className="p-4  rounded flex flex-col shadow items-start justify-center gap-4 text-[#5E596D]  w-[354.9px] bg-[#F2F2F2]">
          <div className="relative border-2 rounded-full h-[70px] w-[70px] p-2 border-[#001E54] flex justify-center items-center">
            <div className="relative border text-white rounded-full h-[50px] w-[50px] p-2 bg-[#0D99FF] flex justify-center items-center ">
              {t("massage.howItWorks.cardFirst.number")}
            </div>
          </div>
          <div className="font-helvetica   w-full text-[20px] font-normal leading-6 tracking-[0.01em] text-[#343030]">
            {t("massage.howItWorks.cardFirst.title")}
          </div>

          <p className="font-helvetica max-w-[301.66px] text-xs font-normal leading-[15px] tracking-[0.01em] ">
            {t("massage.howItWorks.cardFirst.description")}
          </p>
        </div>
        <div className="p-4 sm:p-8 rounded flex flex-col shadow items-start justify-center gap-4 text-[#5E596D]  w-[354.9px]">
          <div className="relative border-2 rounded-full h-[70px] w-[70px] p-2 border-[#001E54] flex justify-center items-center">
            <div className="relative border text-white rounded-full h-[50px] w-[50px] p-2 bg-[#0D99FF] flex justify-center items-center ">
              {t("massage.howItWorks.cardSecond.number")}
            </div>
          </div>
          <div className="font-helvetica   w-full text-[20px] font-normal leading-6 tracking-[0.01em] text-[#343030]">
            {t("massage.howItWorks.cardSecond.title")}
          </div>

          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] ">
            {t("massage.howItWorks.cardSecond.description")}
          </p>
        </div>
        <div className="p-4 sm:p-8 rounded flex flex-col shadow items-start justify-center gap-4 text-[#5E596D]  w-[354.9px]">
          <div className="relative border-2 rounded-full h-[70px] w-[70px] p-2 border-[#001E54] flex justify-center items-center">
            <div className="relative border text-white rounded-full h-[50px] w-[50px] p-2 bg-[#0D99FF] flex justify-center items-center ">
              {t("massage.howItWorks.cardThird.number")}
            </div>
          </div>
          <div className="font-helvetica   w-full text-[20px] font-normal leading-6 tracking-[0.01em] text-[#343030]">
            {t("massage.howItWorks.cardThird.title")}
          </div>

          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] ">
            {t("massage.howItWorks.cardThird.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MassageHowItWorksSection;
