"use client";
import HealthcareFaq from "@/components/healthcare/HealthcareFaq";
import HealthCareForm from "@/components/healthcare/HealthCareForm";
import PainProtocolSection from "@/components/healthcare/PainProtocolSection";
import PatientFirstSection from "@/components/healthcare/PatientFirstSection";
import ProviderNetworkSection from "@/components/healthcare/ProviderNetworkSection";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" h-[89vh] flex items-center bg-cover bg-[url(/healthcare-images/healthcare-landing-mobile.png)] sm:bg-[url(/healthcare-images/healthcare-landing.png)] bg-center bg-no-repeat">
        <div className="flex items-center justify-center sm:justify-center  mt-0   w-full h-full  text-white b px-[2rem]  flex-col gap-5  ">
          <p className="sm:text-[25px] font-normal sm:leading-[32.37px] text-center font-[helvetica] text-[20px]  leading-[25.9px]">
            {t("healthcare.header.title")}
          </p>
          <p className="max-w-[541px] font-[helvetica] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            {t("healthcare.header.description")}
          </p>
          <button className="w-[199px] h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
            {t("healthcare.header.button")}
          </button>
        </div>
      </div>
      <div className="px-[2rem] sm:px-[7rem] max-w-[1200px] mx-auto py-[1rem] sm:py-[2rem]">
        <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[32.37px] text-center">
          {t("healthcare.chronicPain.title")}
        </p>
        <div className="flex flex-col sm:py-[2rem] sm:flex-row justify-between gap-5 items-center">
          <div className="flex flex-col gap-2">
            <p className="font-helvetica text-[#0D99FF] text-[50px] sm:text-[70px] font-normal leading-[48px] text-center">
              {t("healthcare.chronicPain.firstCard.number")}
            </p>
            <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-center">
              <Trans
                i18nKey="healthcare.chronicPain.firstCard.description"
                components={[<br key={1} />]}
              />
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-helvetica text-[#0D99FF] text-[50px] sm:text-[70px] font-normal leading-[48px] text-center">
              {t("healthcare.chronicPain.secondCard.number")}
            </p>
            <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-center">
              {t("healthcare.chronicPain.secondCard.description")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-helvetica text-[#0D99FF] text-[50px] sm:text-[70px] font-normal leading-[48px] text-center">
              {t("healthcare.chronicPain.thirdCard.number")}
            </p>
            <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-center">
              <Trans
                i18nKey="healthcare.chronicPain.thirdCard.description"
                components={[<br key={1} />]}
              />
            </p>
          </div>
        </div>
      </div>
      <PainProtocolSection />
      <PatientFirstSection />
      <ProviderNetworkSection />
      <div className="bg-gradient-to-r px-[2rem] flex flex-col gap-10 py-10 from-[rgba(209,181,255,0.64)] via-[rgba(133,171,247,0.557273)] to-[rgba(81,164,242,0.5)]">
        <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[32.37px] text-center">
          <Trans
            i18nKey="healthcare.coverage.title"
            components={[<br key={0} />]}
          />
        </p>
        <button className="sm:w-[254px] w-[161px] border border-white mx-auto rounded-[1px] h-[70px] flex justify-center items-center bg-[#FFFFFF26] gap-2 font-[helvetica] sm:text-[25px] font-normal sm:leading-[24px] text-[15px] leading-[24px] text-left text-black">
          {t("healthcare.coverage.button")}
        </button>
      </div>
      <HealthcareFaq />
      <HealthCareForm />
    </div>
  );
};

export default Page;
