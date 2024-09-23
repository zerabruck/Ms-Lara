"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const VaForCareProvidersSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div>
      <div className="md:hidden flex bg-[#EAE2F799]  md:bg-transparent py-10 px-[2rem] w-full items-start md:w-fit  flex-col gap-5 ">
        <p className="font-helvetica text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
          {t("va.forCareProviders.title")}
        </p>
        <p className="font-helvetica max-w-[451px] text-[#3B3B3B] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
          {t("va.forCareProviders.description")}
        </p>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-helvetica  text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
            {t("va.forCareProviders.link")}
          </p>
          <div className="w-[11.57px] relative h-[11px]">
            <Image fill src="/icons/left-circle.svg" alt="left icon" />
          </div>
        </div>
      </div>
      <div className="relative h-[465px] bg-cover bg-[url(/drop-down-images/va-for-careproviders-mobile.png)] sm:bg-[url(/drop-down-images/va-for-careproviders.png)] bg-center bg-no-repeat grid grid-cols-24 grid-rows-3">
        <div className="md:flex bg-[#EAE2F799] hidden  md:bg-transparent py-10  w-full items-start md:w-fit  flex-col gap-5 absolute top-[80px]  md:left-[123px]  ">
          <p className="font-helvetica text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
            {t("va.forCareProviders.title")}
          </p>
          <p className="font-helvetica w-[451px] text-[#3B3B3B] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
            {t("va.forCareProviders.description")}
          </p>
          <div className="flex gap-2 justify-center items-center">
            <p className="font-helvetica  text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
              {t("va.forCareProviders.link")}
            </p>
            <div className="w-[11.57px] relative h-[11px]">
              <Image fill src="/icons/left-circle.svg" alt="left icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaForCareProvidersSection;
