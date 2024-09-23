"use client";
import Image from "next/image";
import React from "react";
import GiftFaqCard from "./GiftFaqCard";
import { useTranslation } from "react-i18next";
const GifitingFaqsSection = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t("giftsWebView.faqs.cards.first.question"),
      answer: t("giftsWebView.faqs.cards.first.answer"),
    },
    {
      question: t("giftsWebView.faqs.cards.first.question"),
      answer: t("giftsWebView.faqs.cards.first.answer"),
    },
    {
      question: t("giftsWebView.faqs.cards.second.question"),
      answer: t("giftsWebView.faqs.cards.second.answer"),
    },
    {
      question: t("giftsWebView.faqs.cards.third.question"),
      answer: t("giftsWebView.faqs.cards.third.answer"),
    },
    {
      question: t("giftsWebView.faqs.cards.fourth.question"),
      answer: t("giftsWebView.faqs.cards.fourth.answer"),
    },
  ];
  return (
    <div className="flex gap-10  px-[2rem] md:px-[7rem] md:flex-row flex-col py-[3rem] md:py-0">
      <div className=" md:hidden relative h-[251px] w-full">
        <Image
          src="/drop-down-images/gift-faq-mobile.png"
          fill
          alt="CorporateGiftSection"
        />
      </div>
      <div className="hidden md:block relative h-[537px] w-1/2">
        <Image
          src="/drop-down-images/gift-faq.png"
          fill
          alt="CorporateGiftSection"
        />
      </div>
      <div className="">
        <p className="font-helvetica pb-4 pt-2 text-[20px] md:text-[25px] font-normal leading-[25.9px] md:leading-[32.37px] text-left">
          {t("giftsWebView.faqs.title")}
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" sm:w-[570px]">
              <GiftFaqCard question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
        <button className="font-helvetica  sm:hidden w-[137px] text-center h-[44px] bg-[#0D99FF] text-white text-[16px] font-normal leading-[24px] my-4">
          {t("giftsWebView.faqs.button")}
        </button>
      </div>
    </div>
  );
};

export default GifitingFaqsSection;
