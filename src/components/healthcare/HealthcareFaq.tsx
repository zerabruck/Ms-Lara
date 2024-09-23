"use client";
import Image from "next/image";
import React from "react";
import HealthcareFaqCard from "./HealthcareFaqCard";
import { useTranslation } from "react-i18next";
const HealthcareFaq = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t("healthcare.faqs.first.question"),
      answer: t("healthcare.faqs.first.answer"),
    },
    {
      question: t("healthcare.faqs.second.question"),
      answer: t("healthcare.faqs.second.answer"),
    },
    {
      question: t("healthcare.faqs.third.question"),
      answer: t("healthcare.faqs.third.answer"),
    },
    {
      question: t("healthcare.faqs.fourth.question"),
      answer: t("healthcare.faqs.fourth.answer"),
    },
    {
      question: t("healthcare.faqs.fifth.question"),
      answer: t("healthcare.faqs.fifth.answer"),
    },
    {
      question: t("healthcare.faqs.sixth.question"),
      answer: t("healthcare.faqs.sixth.answer"),
    },
  ];

  return (
    <div className="flex py-10  sm:gap-[5rem] px-[2rem] lg:px-[7rem] md:flex-row flex-col pb-[4rem] sm:pt-[4rem] ">
      <div className="md:w-1/2">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <HealthcareFaqCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-helvetica sm:py-[3rem] py-5 max-w-[456px] text-[20px] sm:text-[25px] font-normal leading-[32.37px] text-left">
          {t("healthcare.faqs.title")}
        </p>
        <div className=" md:hidden relative h-[335px] w-full">
          <Image
            src="/healthcare-images/massage-mobile.png"
            fill
            alt="CorporateGiftSection"
          />
        </div>
        <div className="hidden md:block relative h-[533px] w-[486px]">
          <Image
            src="/healthcare-images/massage.png"
            fill
            alt="CorporateGiftSection"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthcareFaq;
