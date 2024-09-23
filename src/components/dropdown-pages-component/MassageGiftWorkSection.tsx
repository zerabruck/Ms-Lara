"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const MassageGiftWorkSection = () => {
  const { t } = useTranslation();
  return (
    <div className="py-[3rem]">
      <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] text-center">
        {t("giftsWebView.howDoesItWork.title")}
      </p>
      <div className="flex justify-center gap-14 py-[2rem] flex-wrap">
        <div className="w-[236px] h-[148px]  border flex flex-col justify-center gap-3 items-center border-[#0D99FF]">
          <p className="font-helvetica text-[#343030] text-[14px] font-normal leading-[24px] text-left">
            {t("giftsWebView.howDoesItWork.firstCard.title")}
          </p>
          <p className="font-helvetica max-w-[200px] text-[#5E596D] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            {t("giftsWebView.howDoesItWork.firstCard.description")}
          </p>
        </div>
        <div className="w-[236px] h-[148px]  border flex flex-col justify-center gap-3 items-center border-[#0D99FF]">
          <p className="font-helvetica text-[#343030] text-[14px] font-normal leading-[24px] text-left">
            {t("giftsWebView.howDoesItWork.secondCard.title")}
          </p>
          <p className="font-helvetica max-w-[200px] text-[#5E596D] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            {t("giftsWebView.howDoesItWork.secondCard.description")}
          </p>
        </div>
        <div className="w-[236px] h-[148px]  border flex flex-col justify-center gap-3 items-center border-[#0D99FF]">
          <p className="font-helvetica text-[#343030] text-[14px] font-normal leading-[24px] text-left">
            {t("giftsWebView.howDoesItWork.thirdCard.title")}
          </p>
          <p className="font-helvetica max-w-[200px] text-[#5E596D] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            {t("giftsWebView.howDoesItWork.thirdCard.description")}
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-center text-right text-[#0D99FF] items-center">
        <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("giftsWebView.howDoesItWork.link")}
        </p>
        <div className="w-[11.41px] relative h-[11px]">
          <Image fill src="/icons/blue-left-circle.svg" alt="left icon" />
        </div>
      </div>
    </div>
  );
};

export default MassageGiftWorkSection;
