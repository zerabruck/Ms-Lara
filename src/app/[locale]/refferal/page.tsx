"use client";
import MassageForVets from "@/components/dropdown-pages-component/MassageForVets";
import ReferalFooter from "@/components/dropdown-pages-component/ReferalFooter";
import ReferalMeetYourProviderSection from "@/components/dropdown-pages-component/ReferalMeetYourProviderSection";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div className="font-[helvetica]">
      <div className=" h-[89vh] flex items-center bg-cover bg-[url(/drop-down-images/referal-landing-mobile.png)] sm:bg-[url(/drop-down-images/referal-landing.png)] bg-center bg-no-repeat">
        <div className="flex items-center justify-center sm:justify-start sm:mt-[32rem] mt-0   w-full h-full  text-white b px-[2rem]  flex-col gap-5  ">
          <p className="sm:text-[25px] font-normal sm:leading-[32.37px] text-left font-[helvetica] text-[20px]  leading-[25.9px]">
            {t("referal.header.title")}
          </p>
          <p className="max-w-[541px] font-[helvetica] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
            {t("referal.header.description")}
          </p>
          <button className="px-2 h-[48px] flex justify-center items-center bg-white  text-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left">
            {t("referal.header.button")}
          </button>
        </div>
      </div>
      <div
        className="w-full py-5 flex justify-center items-center gap-[3rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
          {t("referal.partnership")}
        </p>
        <div className="relative w-[106px] h-[25px] sm:h-[51px] sm:w-[218.17px]">
          <Image
            alt="department logo"
            fill
            src="/drop-down-images/us-department-logo.png"
          />
        </div>
      </div>
      <MassageForVets />
      <div
        className="w-full py-4"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p className=" max-w-[800px] font-helvetica text-center text-[#000000] font-normal leading-[15px] text-[12px] tracking-[0.01em] mx-auto px-4">
          <Trans
            i18nKey="referal.cta"
            components={[
              <a
                key={0}
                className="underline"
                href="https://www.zeel.com/va/massage-for-veterans/"
                target="_blank"
              />,
            ]}
          />
        </p>
      </div>
      <ReferalMeetYourProviderSection />
      <div
        className="w-full py-7 pb-10 sm:pb-7 flex flex-col sm:flex-row px-[2rem] justify-center items-center  gap-[1rem] sm:gap-[3rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p className="font-helvetica text-[25px] font-normal leading-[32.37px] text-left">
          {t("referal.whatIsMissLara.title")}
        </p>
        <p className="font-helvetica max-w-[569px] text-[#5E596D] text-[14px] font-normal leading-[21px] tracking-[0.01em] text-left">
          {t("referal.whatIsMissLara.description")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-[2rem] sm:py-[3rem] sm:pb-[1rem] gap-3 sm:gap-5 px-[2rem]">
        <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] text-left">
          {t("referal.trustAndSafety.title")}
        </p>
        <p className="font-helvetica text-[14px] max-w-[569px] font-normal leading-[21px] tracking-[0.01em] text-center text-[#5E596D]">
          {t("referal.trustAndSafety.description")}
        </p>
      </div>
      <div className=" h-[253px] sm:my-10 my-0  flex items-center bg-cover bg-[url(/drop-down-images/referal-mobile.png)] sm:bg-[url(/drop-down-images/referal.png)] bg-center bg-no-repeat">
        <div className="flex items-center justify-center   w-full h-full  text-white b px-[2rem]  flex-col gap-6 ">
          <div>
            <p className="font-helvetica text-[14px] text-white font-normal leading-[21px] tracking-[0.01em] text-center">
              {t("referal.secondCta.title")}
            </p>
            <p className="font-helvetica text-[14px] text-white font-normal leading-[21px] tracking-[0.01em] text-center">
              {t("referal.secondCta.subtitle")}{" "}
            </p>
          </div>

          <button className="px-2 h-[48px] flex justify-center items-center border bg-white font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-[#0D99FF]">
            {t("referal.secondCta.button")}
          </button>
        </div>
      </div>
      <ReferalFooter />
    </div>
  );
};

export default Page;
