import React from "react";
import { useTranslation } from "react-i18next";
const DesignedForYouSection = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div>
      <div className=" sm:h-[419px] h-[210px] sm:my-10 my-0   flex items-center bg-cover bg-[url(/drop-down-images/designed-for-you-mobile.png)] sm:bg-[url(/drop-down-images/designed-for-you.png)] bg-center bg-no-repeat">
        <div className="flex items-start justify-center   w-full h-full  text-white px-[3rem] sm:px-[5rem]  flex-col gap-6 ">
          <p className="font-helvetica  text-[18px] font-normal leading-[23.31px] sm:text-[25px]  sm:leading-[32.37px] text-left">
            {t("massage.membership.title")}
          </p>
          <p className="font-helvetica max-w-[520px]  text-[12px] sm:text-[15px] font-normal leading-[17px] sm:leading-[22px] tracking-[0.01em] text-left">
          {t("massage.membership.description")}
          </p>

          <button className="sm:w-[125.54px] w-[135.14px] h-[28px] rounded-[2px] border-white border flex justify-center items-center bg-[#FFFFFF33] gap-2 font-[helvetica] font-normal sm:leading-[24px] text-[12px] leading-[24px] text-left text-white">
          {t("massage.membership.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignedForYouSection;
