"use client";
import FaqsDropdownCard from "@/components/va-sub-pages/FaqsDropdownCard";
import VeteransBottomNav from "@/components/va-sub-pages/VeteransBottomNav";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  const generalMassage = [
    {
      title: t("faqs.generalMassage.first.title"),
      questions: t("faqs.generalMassage.first.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.generalMassage.second.title"),
      questions: t("faqs.generalMassage.second.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.generalMassage.third.title"),
      questions: t("faqs.generalMassage.third.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.generalMassage.fourth.title"),
      questions: t("faqs.generalMassage.fourth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.generalMassage.fifth.title"),
      questions: t("faqs.generalMassage.fifth.questions", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const inHomeMassage = [
    {
      title: t("faqs.inHomeMassage.first.title"),
      questions: t("faqs.inHomeMassage.first.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.inHomeMassage.second.title"),
      questions: t("faqs.inHomeMassage.second.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.inHomeMassage.third.title"),
      questions: t("faqs.inHomeMassage.third.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.inHomeMassage.fourth.title"),
      questions: t("faqs.inHomeMassage.fourth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.inHomeMassage.fifth.title"),
      questions: t("faqs.inHomeMassage.fifth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.inHomeMassage.sixth.title"),
      questions: t("faqs.inHomeMassage.sixth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.inHomeMassage.seventh.title"),
      questions: t("faqs.inHomeMassage.seventh.questions", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const bookingQuestions = [
    {
      title: t("faqs.bookingQuestions.first.title"),
      questions: t("faqs.bookingQuestions.first.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.bookingQuestions.second.title"),
      questions: t("faqs.bookingQuestions.second.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.bookingQuestions.third.title"),
      questions: t("faqs.bookingQuestions.third.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.bookingQuestions.fourth.title"),
      questions: t("faqs.bookingQuestions.fourth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.bookingQuestions.fifth.title"),
      questions: t("faqs.bookingQuestions.fifth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.bookingQuestions.sixth.title"),
      questions: t("faqs.bookingQuestions.sixth.questions", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const referralQuestions = [
    {
      title: t("faqs.referralQuestions.first.title"),
      questions: t("faqs.referralQuestions.first.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.referralQuestions.second.title"),
      questions: t("faqs.referralQuestions.second.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.referralQuestions.third.title"),
      questions: t("faqs.referralQuestions.third.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.referralQuestions.fourth.title"),
      questions: t("faqs.referralQuestions.fourth.questions", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t("faqs.referralQuestions.fifth.title"),
      questions: t("faqs.referralQuestions.fifth.questions", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <div>
      <div className="relative h-[89vh] bg-cover bg-[url(/veterans-images/faq-landing-mobile-image.png)] sm:bg-[url(/veterans-images/faq-landing-image.png)] bg-center bg-no-repeat grid grid-cols-24 grid-rows-3">
        <div className="flex absolute top-[175px] w-full mx-auto md:top-[272px] justify-center">
          <p className="font-helvetica  w-full text-[20px] text-white sm:text-black  leading-[25.9px] text-center font-Helvetica sm:text-[36px]  font-normal sm:leading-[46.62px]">
            {t("faqs.header")}
          </p>
        </div>
      </div>
      <div className="px-[2rem] my-5 sm:px-[7rem]">
        <p className=" text-[20px] font-[400]  w-fit mx-auto sm:mx-0  leading-[25.9px] text-left font-helvetica py-5 sm:text-[36px] text-[#0D99FF]  sm:leading-[46.62px] ">
          {t("faqs.generalMassage.header")}
        </p>
        <div className="flex flex-col gap-1 sm:gap-5">
          {generalMassage.map((faqs, index) => (
            <FaqsDropdownCard
              key={index}
              title={faqs.title}
              questions={faqs.questions}
            />
          ))}
        </div>
        <p className=" text-[20px] font-[400]  w-fit mx-auto sm:mx-0  leading-[25.9px] text-left font-helvetica py-5 sm:text-[36px] text-[#0D99FF]  sm:leading-[46.62px] ">
          {t("faqs.inHomeMassage.header")}
        </p>
        <div className="flex flex-col gap-1 sm:gap-5">
          {inHomeMassage.map((faqs, index) => (
            <FaqsDropdownCard
              key={index}
              title={faqs.title}
              questions={faqs.questions}
            />
          ))}
        </div>
        <p className=" text-[20px] font-[400]  w-fit mx-auto sm:mx-0  leading-[25.9px] text-left font-helvetica py-5 sm:text-[36px] text-[#0D99FF]  sm:leading-[46.62px] ">
          {t("faqs.bookingQuestions.header")}
        </p>
        <div className="flex flex-col gap-1 sm:gap-5">
          {bookingQuestions.map((faqs, index) => (
            <FaqsDropdownCard
              key={index}
              title={faqs.title}
              questions={faqs.questions}
            />
          ))}
        </div>
        <p className=" text-[20px] font-[400]  w-fit mx-auto sm:mx-0  leading-[25.9px] text-left font-helvetica py-5 sm:text-[36px] text-[#0D99FF]  sm:leading-[46.62px] ">
          {t("faqs.referralQuestions.header")}
        </p>
        <div className="flex flex-col gap-1 sm:gap-5">
          {referralQuestions.map((faqs, index) => (
            <FaqsDropdownCard
              key={index}
              title={faqs.title}
              questions={faqs.questions}
            />
          ))}
        </div>
      </div>

      <div
        className="w-full py-8"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <div className="flex flex-col px-[2rem] md:flex-row gap-4 justify-center items-center">
          <p className="font-helvetica text-[15px] font-normal leading-[22px] max-w-[714px] text-[#3B3B3B] tracking-[0.01em] text-center md:text-left">
            <Trans
              i18nKey="faqs.cta"
              components={[<span key={1} className="underline" />]}
            />
          </p>
          <div className="relative w-[45px] h-[45px] md:w-[79px] md:h-[79px]">
            <Image
              fill
              alt="question mark icon"
              src="/veterans-images/question-mark-image.png"
            />
          </div>
        </div>
      </div>
      <VeteransBottomNav />
    </div>
  );
};

export default Page;
