import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const FeaturedPartnerSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div
      className="flex gap-5 sm:gap-[6rem] items-center  px-0 sm:px-[7rem] sm:flex-row flex-col pt-[3rem] pb-[1rem] sm:py-0"
      style={{
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      <div className=" sm:hidden relative h-[140px] w-full">
        <Image
          src="/drop-down-images/partner-mobile.png"
          fill
          alt="FeaturedPartnerSection"
        />
      </div>
      <div className="hidden sm:block relative h-[190px] w-[40%]">
        <Image
          src="/drop-down-images/partner.png"
          fill
          alt="FeaturedPartnerSection"
        />
      </div>
      <div className="flex max-w-[614px] px-[2rem] sm:px-0 items-start flex-col gap-3">
        <p className="font-helvetica20px  text-[20px] leading-[25.9px] sm:text-[25px] font-normal sm:leading-[32.37px] text-start sm:text-center ">
          {t("massageMembership.featured.title")}
        </p>
        <p className="font-helvetica text-[#262626] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("massageMembership.featured.description")}
        </p>
        <a
          href="https://www.zeel.com/store"
          target="_blanck"
          className="font-helvetica underline  block text-[#000000] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left"
        >
          {t("massageMembership.featured.link")}
        </a>
      </div>
    </div>
  );
};

export default FeaturedPartnerSection;
