"use client"
import React from "react";
import { useTranslation } from "react-i18next";
const WhyIsAvailableSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full sm:py-20 py-2">
      <p className="font-helvetica mx-auto  text-center text-[20px] sm:text-[25px] max-w-[367px] font-normal leading-[32.37px] text-[#000000] py-4">
        {t("massageForVeterna.whereIsAvailable.title")}
      </p>

      <p className="font-helvetica px-8 text-center mx-auto max-w-[613px] text-[15px] font-normal leading-[28px] tracking-[0.01em]  text-[#5E596D] whitespace-pre-line mb-8">
        {t("massageForVeterna.whereIsAvailable.description")}
      </p>
    </div>
  );
};

export default WhyIsAvailableSection;
