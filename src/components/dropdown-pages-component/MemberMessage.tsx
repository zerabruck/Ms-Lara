"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const MemberMessage = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div
      className="flex justify-between items-center px-[2rem] sm:px-[7rem] sm:flex-row flex-col py-[3rem] sm:py-0 gap-5"
      style={{
        background:
          "linear-gradient(270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)",
      }}
    >
      <div className=" sm:hidden relative h-[166px] w-full">
        <Image
          src="/drop-down-images/member-message-mobile.png"
          fill
          alt="MemberMessage"
        />
      </div>
      <div className="hidden sm:block relative h-[382px] w-1/2">
        <Image
          src="/drop-down-images/member-message.png"
          fill
          alt="MemberMessage"
        />
      </div>
      <div className="flex flex-col max-w-[504px]  sm:px-0 gap-3">
        <p className="font-helvetica text-[18px] font-normal leading-[23.31px] text-right">
          {t("massageMembership.memberMessage.description")}
        </p>
        <p className="font-helvetica  pt-[1rem] sm:pt-0 text-[12px] font-normal leading-[24px] text-right text-[#5E596D]">
          {t("massageMembership.memberMessage.name")}
        </p>
        <div className="flex gap-2 justify-end text-right text-[#0D99FF] items-center">
          <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
            {t("massageMembership.memberMessage.link")}
          </p>
          <div className="w-[11.41px] relative h-[11px]">
            <Image fill src="/icons/blue-left-circle.svg" alt="left icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberMessage;
