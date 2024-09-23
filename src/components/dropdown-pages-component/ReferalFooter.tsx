"use client";
import Image from "next/image";
import React from "react";
import { Trans } from "react-i18next";
const ReferalFooter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between sm:px-[7rem] px-[2rem] py-[3rem] sm:py-0">
      <p className="font-helvetica text-[10px] max-w-[569px] text-[#5E596D] font-normal leading-[21px] tracking-[0.01em] text-left">
        <Trans
          i18nKey="referal.footer"
          components={[<span key={1} className="underline" />]}
        />
      </p>
      <div className="flex gap-10">
        <div className="relative w-[122px] sm:w-[180px] h-[41px] sm:h-[60px]">
          <Image fill alt="veteran logo" src="/drop-down-images/veteran.png" />
        </div>
        <div className="w-[129px] sm:w-[165px] h-[50px] sm:h-[64px] relative">
          <Image src="/logo.svg" fill alt="logo image" />
        </div>
      </div>
    </div>
  );
};

export default ReferalFooter;
