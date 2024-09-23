import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const MassagePricing = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="flex flex-col gap-5 py-[3rem] sm:py-[5rem]">
      <div className="flex items-center justify-center gap-2">
        <p className="font-helvetica text-[25px] font-normal leading-[32.37px] text-center">
          {t("massage.pricing.title")}
        </p>
        <div className="shadow-[0px_0px_4px_0px_#00000040] bg-white flex items-center w-[125px]">
          <input
            placeholder="1000"
            className="w-[100px] h-[28px] text-[#DDDDDD] font-helvetica text-[10px] font-normal leading-[17px] tracking-[0.01em] text-center"
          />
          <div className="relative w-[12px] h-[15px] ">
            <Image src="/icons/edit-second-icon.svg" alt="edit" fill />
          </div>
        </div>
      </div>
      <p className="font-helvetica text-[#5E596D] text-[14px] sm:text-[20px] font-normal leading-[18.13px] sm:leading-[25.9px] text-center">
      {t("massage.pricing.description")}
      </p>
      <button className=" rounded-[2px] px-2 mx-auto  h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
        <Image src="/icons/plus-second.svg" alt="plus" width={16} height={16} />
        <span>{t("massage.pricing.button")}</span>
      </button>
    </div>
  );
};

export default MassagePricing;
