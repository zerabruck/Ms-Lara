"use client";
import SideImageCard from "@/app/[locale]/individuals/business/components/SideImageCard";
import HowIsDifferentSection from "@/components/va-sub-pages/HowIsDifferentSection";
import ServiceCard from "@/components/va-sub-pages/ServiceCard";
import VeteransBottomNav from "@/components/va-sub-pages/VeteransBottomNav";
import VideoSideCard from "@/components/va-sub-pages/VideoSideCard";
import WhyIsAvailableSection from "@/components/va-sub-pages/WhyIsAvailableSection";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import React from "react";
const Messageforveterans = () => {
  const { t } = useTranslation();
  const Stepsdata = [
    {
      header: t("massageForVeterna.howItWorks.steps.step1.title"),
      body: t("massageForVeterna.howItWorks.steps.step1.description"),
      number: t("massageForVeterna.howItWorks.steps.step1.number"),
      bgColor: "#F2F2F2",
    },
    {
      header: t("massageForVeterna.howItWorks.steps.step2.title"),
      body: t("massageForVeterna.howItWorks.steps.step2.description"),
      number: t("massageForVeterna.howItWorks.steps.step2.number"),
      bgColor: "white",
    },
    {
      header: t("massageForVeterna.howItWorks.steps.step3.title"),
      body: t("massageForVeterna.howItWorks.steps.step3.description"),
      number: t("massageForVeterna.howItWorks.steps.step3.number"),
      bgColor: "white",
    },
  ];
  return (
    <div className="">
      <div className="relative h-[512px] bg-cover bg-center bg-no-repeat grid grid-cols-24 grid-rows-3 bg-[url(/drop-down-images/message-for-veterans-mobile.png)] sm:bg-[url(/veterans-images/message-for-veterans.png)]">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20"></div>
        <div className="absolute  top-[4rem] z-2">
          <div className="relative mt-[-5rem] z-3 flex flex-wrap gap-16 md:pl-6  px-auto">
            <div className="flex flex-col justify-center items-center  text-left  px-[2rem] sm:px-[7rem]    h-[512px] overflow-hidden transform translate-y-[25px]">
              <p className="whitespace-pre-line md:text-[2.5rem] text-[1.3rem] text-white">
                {t("massageForVeterna.header.title")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-helvetica py-10 mx-auto w-fit text-[20px] px-[2rem] sm:text-[25px] font-normal leading-[32.37px] text-center">
          {t("massageForVeterna.howItWorks.title")}
        </p>
      </div>

      <div className="relative px-8 sm:pb-20 pb-5 sm:px-28 z-3 flex flex-wrap gap-16">
        {Stepsdata.map((data, index) => (
          <ServiceCard
            key={index}
            header={data.header}
            body={data.body}
            number={data.number}
            bgColor={data.bgColor}
          />
        ))}
      </div>
      <div
        className="w-full sm:py-8 py-4"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p className="max-w-[800px] text-center text-[#5E596D] font-medium leading-[22px] text-[15px] mx-auto px-4">
          <Trans
            i18nKey="massageForVeterna.cta"
            components={[<a key={1} className="underline" href="#" />]}
          />
        </p>
      </div>
      <div className="sm:px-[7rem] ">
        <SideImageCard
          title={
            <div className="text-[20px] px-[1rem] sm:px-0 sm:-ml-[1rem]">
              <Trans
                i18nKey="massageForVeterna.benefits.title"
                components={[<span key={0} className="underline" />]}
              />
            </div>
          }
          body={
            <div className="px-[2rem] text-[12px] sm:px-0">
              {t("massageForVeterna.benefits.description")}
            </div>
          }
          isreverse={true}
          hasMargin={false}
          imageUrl="/veterans-images/veteran-image-one.png"
        />
      </div>
      <div
        className="w-full py-12 px-[2rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <p className="font-helvetica max-w-[594px] text-[16px] font-normal leading-[23px] tracking-[0.01em] text-center">
            {t("massageForVeterna.howToGetMassage.title")}
          </p>
          <div>
            <Image
              width={70}
              height={70}
              alt="question mark icon"
              src="/veterans-images/question-mark-image.png"
            />
          </div>
        </div>
      </div>
      <div className="px-[2rem] sm:px-[7rem]">
        <VideoSideCard
          isreverse={false}
          imageUrl="/veterans-images/veteran-video-image.png"
          title={t("massageForVeterna.highLightHero.title")}
          body={t("massageForVeterna.highLightHero.description")}
          footer={t("massageForVeterna.highLightHero.footer")}
        />
      </div>
      <div>
        <HowIsDifferentSection />
        <WhyIsAvailableSection />
        <div className=" hidden sm:block border-t mx-[2rem] sm:mx-[7rem] border-[#b7b7b7] py-2"></div>
        <VeteransBottomNav />
      </div>
    </div>
  );
};

export default Messageforveterans;
