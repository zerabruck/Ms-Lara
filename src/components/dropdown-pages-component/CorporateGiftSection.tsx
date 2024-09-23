import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const CorporateGiftSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex gap-5 sm:gap-32 items-center  px-0 sm:px-[7rem] sm:flex-row flex-col py-[3rem] sm:py-0"
      style={{
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      <div className=" sm:hidden relative h-[273px] w-full">
        <Image
          src="/drop-down-images/gift-corporate-mobile.png"
          fill
          alt="CorporateGiftSection"
        />
      </div>
      <div className="hidden sm:block relative h-[273px] w-1/2">
        <Image
          src="/drop-down-images/gift-corporate.png"
          fill
          alt="CorporateGiftSection"
        />
      </div>
      <div className="flex max-w-[448px] px-[2rem] sm:px-0 items-start flex-col gap-3">
        <p className="font-helvetica20px text-[20px] leading-[25.9px] sm:text-[25px] font-normal sm:leading-[32.37px] text-start sm:text-center ">
          {t("giftsWebView.corporateGift.title")}
        </p>
        <p className="font-helvetica text-[#5E596D] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("giftsWebView.corporateGift.description")}
        </p>
        <div className="flex gap-2 justify-end text-right text-[#0D99FF] items-center">
          <p className="font-helvetica underline text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
            {t("giftsWebView.corporateGift.link")}
          </p>
          <div className="w-[11.41px] relative h-[11px]">
            <Image fill src="/icons/blue-left-circle.svg" alt="left icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateGiftSection;
