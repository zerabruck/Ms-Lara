"use client";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const GiftAMesssageSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex justify-between items-center px-0 sm:px-[7rem] sm:flex-row flex-col py-[3rem] sm:py-0 gap-5"
      style={{
        background:
          "linear-gradient(270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)",
      }}
    >
      <div className=" sm:hidden relative h-[271px] w-full">
        <Image
          src="/drop-down-images/gift-message.png"
          fill
          alt="GiftAMesssageSection"
        />
      </div>
      <div className="hidden sm:block relative h-[333px] w-1/2">
        <Image
          src="/drop-down-images/gift-message.png"
          fill
          alt="GiftAMesssageSection"
        />
      </div>
      <div className="flex flex-col px-[2rem] sm:px-0 gap-3">
        <p className="font-helvetica max-w-[465px] text-[20px] leading-[25.9px] sm:text-[24px] font-normal sm:leading-[31.08px] text-right ">
          <Trans
            i18nKey="giftsWebView.review.description"
            components={[<br key={0} />]}
          />
        </p>
        <p className="font-helvetica  text-[12px] font-normal leading-[24px] text-right text-[#5E596D]">
          {t("giftsWebView.review.name")}{" "}
        </p>
        <div className="flex gap-2 justify-end text-right text-[#0D99FF] items-center">
          <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
            {t("giftsWebView.review.link")}
          </p>
          <div className="w-[11.41px] relative h-[11px]">
            <Image fill src="/icons/blue-left-circle.svg" alt="left icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftAMesssageSection;
