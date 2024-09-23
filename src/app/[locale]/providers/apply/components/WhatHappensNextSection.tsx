"use client";
import H1 from "@/components/ui/typography/H1";
import H2 from "@/components/ui/typography/H2";
import H6 from "@/components/ui/typography/H6";
import Image from "next/image";
import { useTranslation } from "react-i18next";
interface ICardData {
  imgSrc: string;
  title: string;
  body: string;
}

const Card = ({ imgSrc, title, body }: ICardData) => (
  <div className="h-[250px] w-fill flex flex-col justify-center gap-5 ">
    <div className="flex flex-col gap-3">
      <Image src={imgSrc} width={62} height={62} alt={title} />
      <H2>{title}</H2>
    </div>
    <H6 className="sm:px-0 px-1" color="#5E596D">
      {body}
    </H6>
  </div>
);

export default function WhatHappensNextSection() {
  const { t } = useTranslation();
  const CardData: Array<ICardData> = [
    {
      imgSrc: "/providers/Group 97.png",
      title: t("apply.whatHappensNextSection.cardData.lastStep.title"),
      body: t("apply.whatHappensNextSection.cardData.lastStep.body"),
    },
    {
      imgSrc: "/providers/Group 98.png",
      title: t("apply.whatHappensNextSection.cardData.secondStep.title"),
      body: t("apply.whatHappensNextSection.cardData.secondStep.body"),
    },
    {
      imgSrc: "/providers/Group 99.png",
      title: t("apply.whatHappensNextSection.cardData.firstStep.title"),
      body: t("apply.whatHappensNextSection.cardData.firstStep.body"),
    },
  ];
  return (
    <div className="sm:flex flex-col min-h-[300px] gap-5 sm:px-0 px-20 ">
      <div className="flex items-center justify-center">
        <H1>{t("apply.whatHappensNextSection.title")}</H1>
      </div>

      <div className="sm:grid sm:grid-cols-12">
        <div className="sm:col-start-2 sm:col-end-12 flex sm:flex-row flex-col justify-between  items-center sm:gap-20">
          {CardData.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
