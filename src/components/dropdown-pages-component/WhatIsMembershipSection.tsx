"use client";
import React from "react";
import { useTranslation } from "react-i18next";
const WhatIsMembershipSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="flex flex-col gap-5 items-center px-[2rem] justify-center py-[2rem] sm:py-[5rem]">
      <p className="font-helvetica sm:text-[25px] font-normal sm:leading-[32.37px] text-left text-[20px]  leading-[25.9px] ">
        {t("massageMembership.whatIsMembership.title")}
      </p>
      <p className=" max-w-[674px] font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
        {t("massageMembership.whatIsMembership.description")}
      </p>
    </div>
  );
};

export default WhatIsMembershipSection;
