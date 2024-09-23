import React from "react";
import { useTranslation } from "react-i18next";
const VsResourcesUrgentSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="w-full px-[2rem] py-[3rem]"
      style={{
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      <div className="flex flex-col  gap-6 justify-center items-center">
        <p className="font-helvetica font-helvetica text-[20px] font-normal leading-[25.9px] text-center md:text-[36px]  md:leading-[46.62px] md:text-left">
          {t("resourceForVs.urgent.header")}
        </p>
        <p className="font-helvetica max-w-[841px] text-[15px] font-normal text-[#5E596D] leading-[22px] tracking-[0.01em] text-center">
          {t("resourceForVs.urgent.description")}
        </p>
        <p className="font-helvetica underline text-[15px] font-normal text-[#5E596D] leading-[22px] tracking-[0.01em] text-center">
          {t("resourceForVs.urgent.footer")}
        </p>
      </div>
    </div>
  );
};

export default VsResourcesUrgentSection;
