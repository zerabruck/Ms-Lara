import Image from "next/image";
import React from "react";
import GiftFaqCard from "./GiftFaqCard";
import { useTranslation } from "react-i18next";
const MassageFaq = () => {
  const { t } = useTranslation("dropdownpages");
  const faqs = [
    {
      question: t("massage.faqs.firstFaq.question"),
      answer: t("massage.faqs.firstFaq.answer"),
    },

    {
      question: t("massage.faqs.secondFaq.question"),
      answer: t("massage.faqs.secondFaq.answer"),
    },
    {
      question: t("massage.faqs.thirdFaq.question"),
      answer: t("massage.faqs.thirdFaq.answer"),
    },
    {
      question: t("massage.faqs.fourthFaq.question"),
      answer: t("massage.faqs.fourthFaq.answer"),
    },
    {
      question: t("massage.faqs.fifthFaq.question"),
      answer: t("massage.faqs.fifthFaq.answer"),
    },
  ];
  return (
    <div>
      <p className="font-helvetica text-[18px] py-5 sm:text-[25px] font-normal leading-[32.37px] text-center">
        {t("massage.faqs.title.first")}
      </p>
      <div className="flex justify-between items-center gap-10 px-[2rem] lg:px-[7rem] md:flex-row flex-col pb-[3rem] sm:pt-[4rem] ">
        <div className=" md:hidden relative h-[244px] w-full">
          <Image
            src="/drop-down-images/massage-faq-mobile.png"
            fill
            alt="CorporateGiftSection"
          />
        </div>
        <div className="hidden md:block relative h-[722px] w-[50%]">
          <Image
            src="/drop-down-images/massage-faq.png"
            fill
            alt="CorporateGiftSection"
          />
        </div>
        <div className="md:w-1/2">
          <p className="font-helvetica hidden sm:block py-[1rem] sm:py-0 mb-[2rem] sm:pb-[3rem]    text-[25px] font-normal leading-[32.37px] text-left">
            {t("massage.faqs.title.second")}
          </p>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <GiftFaqCard question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MassageFaq;
