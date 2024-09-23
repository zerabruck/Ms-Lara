import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const VsResourcesFeaturedSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="w-full px-[2rem] pt-[4rem] pb-3 lg:pb-0 lg:pr-[9rem] flex flex-col lg:flex-row bg-orange-50 justify-between items-center"
      style={{
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      <div className="lg:w-[695px] w-[359px] relative lg:h-[403px] h-[209px]">
        <Image fill alt="phone image" src="/veterans-images/phones-image.png" />
      </div>
      <div className="max-w-[461px] flex flex-col items-start gap-5">
        <p className="font-helvetica  text-[25px] font-normal leading-[32.37px] text-left">
          {t("resourceForVs.featured.header")}
        </p>
        <p className="font-helvetica text-[#3B3B3B] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          <Trans
            i18nKey="resourceForVs.featured.description"
            components={[
              <a
                key={1}
                href="https://www.hprc-online.org/"
                target="_blank"
                className="underline"
              />,
            ]}
          />
        </p>
        <p className="font-helvetica mt-5 text-[#0D99FF] text-[12px] font-normal leading-[22px] tracking-[0.01em] text-center">
          {t("resourceForVs.featured.footer")}
        </p>
      </div>
    </div>
  );
};

export default VsResourcesFeaturedSection;
