import React from "react";
import { useTranslation } from "react-i18next";
const OnDemandMassageSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="px-[2rem] lg:px-[7rem] gap-10 flex flex-col sm:flex-row py-[3rem]">
      <div className="  sm:h-[629.91px] h-[328px] px-[1rem] sm:px-[2rem] rounded-[5px] sm:w-[45%] w-full flex flex-col  justify-between bg-cover bg-[url(/drop-down-images/ondemand-mobile.png)] sm:bg-[url(/drop-down-images/ondemand.png)] bg-center bg-no-repeat">
        <button className="sm:w-[173.4px] w-[135.14px]  h-[38.89px] sm:mt-[15rem] mt-[8rem] rounded-[2px] border-white border flex justify-center items-center bg-[#FFFFFF33] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[12px] leading-[24px] text-left text-white">
          {t("massage.onDemand.button.first")}
        </button>
        <div className="flex sm:gap-10 gap-3 sm:mb-[2rem] mb-[3rem]  ">
          <button className="px-2 h-[38.89px] rounded-[2px] flex justify-center items-center bg-white gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[12px] leading-[24px] text-left text-black">
          {t("massage.onDemand.button.second")}
          </button>
          <button className="sm:w-[172.61px] w-[135.14px]  h-[38.89px] rounded-[2px] flex justify-center items-center border border-white gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[12px] leading-[24px] text-left text-white">
          {t("massage.onDemand.button.third")}
          </button>
        </div>
      </div>
      <div className="sm:w-[47%] flex flex-col gap-5 ">
        <div className="px-5 flex flex-col items-center justify-center pb-5 bg-[linear-gradient(270deg,rgba(209,181,255,0.64)_15%,rgba(133,171,247,0.557273)_54%,rgba(81,164,242,0.5)_81%)] h-1/2 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
          <p className=" sm:py-5 font-helvetica text-left  max-w-[470px]  w-full text-[18px] py-10 sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] ">
          {t("massage.onDemand.firstCard.title")}
          </p>
          <p className="font-helvetica max-w-[470px] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-justify">
          {t("massage.onDemand.firstCard.description")}
          </p>
        </div>
        <div className="px-5 flex flex-col items-center justify-center pb-5 h-1/2 rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
          <p className=" sm:py-5 font-helvetica text-left  max-w-[470px]  w-full text-[18px] py-10 sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] ">
          {t("massage.onDemand.secondCard.title")}
          </p>
          <p className="font-helvetica max-w-[470px] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-justify">
          {t("massage.onDemand.secondCard.description")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default OnDemandMassageSection;
