"use client";
import SideImageCard from "@/app/[locale]/individuals/business/components/SideImageCard";
import ConditionsApplied from "@/components/va-sub-pages/ConditionsApplied";
import VeteransBottomNav from "@/components/va-sub-pages/VeteransBottomNav";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="relative h-[89vh] bg-cover bg-center bg-no-repeat grid grid-cols-24 grid-rows-3"
        style={{
          backgroundImage: `url(/veterans-images/learnabout-massage.png)`,
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-[2rem]  z-2">
          <div className="relative mt-[-5rem] z-3 flex flex-wrap gap-16 md:pl-6  px-auto">
            <div className="flex flex-col justify-center items-start gap-4 px-8 md:px-0  md:ml-16  md:max-w-[527px] w-full h-[94vh] overflow-hidden transform translate-y-[25px]">
              <p className="md:text-[36px] mb-5 sm:mb-0  text-[20px] text-white">
                {t("learnAboutMassage.header.first")}
              </p>
              <p className="text-[15px] max-w-[468px]  font-normal leading-[28px] tracking-[0.01em] text-white  whitespace-pre-line">
                {t("learnAboutMassage.header.second")}
              </p>
              <p className="text-[12px] max-w-[431px] font-normal leading-[28px] tracking-[0.01em] text-white whitespace-pre-line">
                {t("learnAboutMassage.header.third")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[2rem] sm:px-[7rem] ">
        <SideImageCard
          title={
            <div className="-ml-4">
              {t("learnAboutMassage.massageBenefit.title")}
            </div>
          }
          imageHeight="289px"
          body={
            <div className="text-xs pt-5 font-normal leading-[15px] tracking-[0.01em] text-left">
              {t("learnAboutMassage.massageBenefit.description")}
            </div>
          }
          isreverse={true}
          imageUrl="/veterans-images/massage-image.png"
        />
      </div>
      <ConditionsApplied />
      <div
        className="w-full py-12"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div>
            <Image
              width={79}
              height={79}
              alt="question mark icon"
              src="/veterans-images/question-mark-image.png"
            />
          </div>
          <p className="px-[2rem] sm:px-[1rem] font-helvetica max-w-[719px] text-[15px] font-normal leading-[23px] tracking-[0.01em] text-left">
            <Trans
              i18nKey="learnAboutMassage.haveAQuestion"
              components={[<span key={1} className="underline" />]}
            />
          </p>
        </div>
      </div>
      <VeteransBottomNav />
    </div>
  );
};

export default Page;
