"use client";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const ProviderNetworkSection = () => {
  const { t } = useTranslation();
  return (
    <div className="px-[2rem] sm:px-[7rem] pb-12 sm:pb-0 flex flex-col items-center">
      <p className="font-helvetica text-[#0D99FF] sm:py-5 pb-3 text-[14px] sm:text-[16px] font-normal leading-[24px] text-left">
        {t("healthcare.providerNetwork.title")}
      </p>
      <p className="font-helvetica text-[20px] sm:text-[25px] sm:-mb-5 mb-5 font-normal leading-[32.37px] text-center">
        <Trans
          i18nKey="healthcare.providerNetwork.subtitle"
          components={[<br key={0} />]}
        />
      </p>
      <div className="relative hidden sm:block lg:w-[80%] w-full  h-[628px]">
        <Image src="/healthcare-images/map.png" alt="map image" fill />
      </div>
      <div className="relative sm:hidden  w-full  h-[189px] -pr-[2rem]">
        <Image src="/healthcare-images/map-mobile.png" alt="map image" fill />
      </div>
    </div>
  );
};

export default ProviderNetworkSection;
