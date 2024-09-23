"use client";

import H1 from "@/components/ui/typography/H1";
import H5Font15 from "@/components/ui/typography/H5-font-15";
import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
interface ICard {
  imgSrc: string;
  text: string;
  imgHeight: number;
  imgWidth: number;
  backgroundColor?: string;
}
const Card = ({
  imgSrc,
  text,
  imgHeight,
  imgWidth,
  backgroundColor = "white",
}: ICard) => (
  <div
    className="flex flex-col items-center justify-center gap-2 h-[182px]"
    style={{
      backgroundColor: backgroundColor,
    }}
  >
    <Image src={imgSrc} height={imgHeight} width={imgWidth} alt={text} />

    <H5Font15>{text}</H5Font15>
  </div>
);

const StyledHeader = styled(H1)`
  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 500;
    line-height: 25.9px;
    text-align: center;
    color: #000000;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export default function SecondSection() {
  const { t } = useTranslation();
  const CardData: Array<ICard> = [
    {
      imgSrc: "/providers/tabler_massage.png",
      text: t("landing.secondSection.cardData.first"),
      imgHeight: 100,
      imgWidth: 100,
      backgroundColor:
        "linear-gradient(270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)",
    },
    {
      imgSrc: "/providers/healthicons_exercise-yoga.png",
      text: t("landing.secondSection.cardData.second"),
      imgHeight: 90,
      imgWidth: 90,
    },
    {
      imgSrc: "/providers/mdi_medicine.png",
      text: t("landing.secondSection.cardData.thrid"),
      imgHeight: 85,
      imgWidth: 85,
    },
    {
      imgSrc: "/providers/mdi_yoga.png",
      text: t("landing.secondSection.cardData.fourth"),
      imgHeight: 100,
      imgWidth: 100,
    },
    {
      imgSrc: "/providers/fontisto_nursing-home.png",
      text: t("landing.secondSection.cardData.fifth"),
      imgHeight: 80,
      imgWidth: 80,
    },
  ];
  return (
    <div className="flex flex-col min-h-[200px] sm:my-20 my-5 gap-10">
      <div className="flex items-center justify-center">
        <StyledHeader>{t("landing.secondSection.header")}</StyledHeader>
      </div>
      <div className="sm:px-20 sm:grid sm:grid-cols-5 flex flex-col sm:gap-0 gap-20 sm:px-0 sm:px-0 px-10 ">
        {CardData.map((card, key) => (
          <Card key={key} {...card} />
        ))}
      </div>
    </div>
  );
}
