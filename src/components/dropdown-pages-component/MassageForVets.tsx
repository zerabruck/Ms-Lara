"use client";
import React from "react";
import { useTranslation } from "react-i18next";
const MassageForVets = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 w-full items-center py-10 pb-1">
      <p className="font-helvetica text-[20px] leading-[25.9px]  sm:text-[25px] font-normal sm:leading-[32.37px] text-left">
        {t("referal.howItWorks.title")}
      </p>
      <div className="md:px-[7rem] w-full px-[2rem] justify-center flex-wrap flex sm:gap-10 gap-5 ">
        <div
          className={`shadow-[0px_4px_20px_0px_#D0D0D040] p-4 flex-[1_1_290px] max-w-[290px] h-[156px] rounded-md flex flex-col items-center justify-center gap-2 text-[#5E596D]  flex-shrink-0`}
        >
          <div className="font-helvetica text-[14px] text-[#343030] font-normal leading-[24px] text-left">
            {t("referal.howItWorks.card.first.title")}
          </div>

          <div className="font-helvetica max-w-[206px] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center text-[#5E596D]">
            {t("referal.howItWorks.card.first.description")}
          </div>
        </div>
        <div
          className={`shadow-[0px_4px_20px_0px_#D0D0D040] p-4 flex-[1_1_290px] max-w-[290px] h-[156px] rounded-md flex flex-col items-center justify-center gap-2 text-[#5E596D]  flex-shrink-0`}
        >
          <div className="font-helvetica text-[14px] text-[#343030] font-normal leading-[24px] text-left">
            {t("referal.howItWorks.card.second.title")}
          </div>

          <div className="font-helvetica max-w-[206px] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center text-[#5E596D]">
            {t("referal.howItWorks.card.second.description")}
          </div>
        </div>
        <div
          className={`shadow-[0px_4px_20px_0px_#D0D0D040] p-4 flex-[1_1_290px] max-w-[290px] h-[156px] rounded-md flex flex-col items-center justify-center gap-2 text-[#5E596D]  flex-shrink-0`}
        >
          <div className="font-helvetica text-[14px] text-[#343030] font-normal leading-[24px] text-left">
            {t("referal.howItWorks.card.third.title")}
          </div>

          <div className="font-helvetica max-w-[206px] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center text-[#5E596D]">
            {t("referal.howItWorks.card.third.description")}
          </div>
        </div>
      </div>
      <button className=" px-2  my-[1.5rem] sm:my-[3rem] h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[12px] leading-[24px] text-left text-white">
        {t("referal.howItWorks.button")}
      </button>
    </div>
  );
};

export default MassageForVets;
