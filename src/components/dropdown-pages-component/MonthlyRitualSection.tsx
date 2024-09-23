"use client";
import React from "react";
import RitualCard from "./RitualCard";
import { useTranslation } from "react-i18next";
const MonthlyRitualSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="pb-10">
      <p className="font-helvetica sm:py-8 py-4 text-[25px] sm:text-[25px] font-normal sm:leading-[32.37px] leading-[25.9px] text-center">
        {t("massageMembership.ritual.title")}
      </p>
      <div className="md:px-[7rem] px-[2rem] justify-center flex-wrap flex sm:gap-10 gap-5 ">
        <RitualCard
          header={t("massageMembership.ritual.card.first.title")}
          bgColor="white"
          body={t("massageMembership.ritual.card.first.description")}
        />
        <RitualCard
          header={t("massageMembership.ritual.card.second.title")}
          bgColor="white"
          body={t("massageMembership.ritual.card.second.description")}
        />
        <RitualCard
          header={t("massageMembership.ritual.card.third.title")}
          bgColor="white"
          body={t("massageMembership.ritual.card.third.description")}
        />
      </div>
      <button className="w-[187px] mx-auto sm:mt-10 mt-5 h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
        {t("massageMembership.ritual.button")}
      </button>
    </div>
  );
};

export default MonthlyRitualSection;
