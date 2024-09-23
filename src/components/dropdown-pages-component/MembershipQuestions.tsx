"use client";
import Image from "next/image";
import React from "react";
import GiftFaqCard from "./GiftFaqCard";
import { useTranslation } from "react-i18next";
const MembershipQuestions = () => {
  const { t } = useTranslation("dropdownpages");
  const faqs = [
    {
      question: t("massageMembership.faqs.card.first.question"),
      answer: t("massageMembership.faqs.card.first.answer"),
    },
    {
      question: t("massageMembership.faqs.card.second.question"),
      answer: t("massageMembership.faqs.card.second.answer"),
    },
    {
      question: t("massageMembership.faqs.card.third.question"),
      answer: t("massageMembership.faqs.card.third.answer"),
    },
  ];
  return (
    <div className="flex justify-between gap-10 px-[2rem] lg:px-[7rem] md:flex-row flex-col pb-[3rem] sm:pt-[4rem] ">
      <div className="md:w-1/2">
        <p className="font-helvetica py-[1rem] sm:py-0 sm:pb-[3rem]    text-[25px] font-normal leading-[32.37px] text-left">
          {t("massageMembership.faqs.title")}
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <GiftFaqCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
        <button className="font-helvetica sm:mt-[3rem] px-2 text-center h-[44px] bg-[#0D99FF] text-white text-[16px] font-normal leading-[24px] my-8">
          {t("massageMembership.faqs.button")}
        </button>
      </div>
      <div className=" md:hidden relative h-[244px] w-full">
        <Image
          src="/drop-down-images/massage-mobilea.png"
          fill
          alt="CorporateGiftSection"
        />
      </div>
      <div className="hidden md:block relative h-[438px] w-[49%]">
        <Image
          src="/drop-down-images/gift-faq.png"
          fill
          alt="CorporateGiftSection"
        />
      </div>
    </div>
  );
};

export default MembershipQuestions;
