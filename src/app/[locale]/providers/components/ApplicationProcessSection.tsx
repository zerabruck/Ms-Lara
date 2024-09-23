"use client";

import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";
import ApplyToJoin from "./ApplyToJoinNetworkButton";
import { useTranslation } from "react-i18next";
import { basename } from "path";

const Title = styled.span`
  font-family: Helvetica;
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  color: #2a2a2a;
`;

const CardTitle = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const CenterAlignedText = styled(H6)`
  text-align: center;
`;

interface ICardData {
  title: string;
  body: string;
}
const Card = ({ title, body }: ICardData) => (
  <div className="flex flex-col items-center justify-center w-[290px] h-[137px] gap-2 ">
    <CardTitle>{title}</CardTitle>
    <div className="flex items-center justify-center">
      <CenterAlignedText
        color="#5E596D"
        className="flex items-center justify-center w-[80%]"
      >
        {body}
      </CenterAlignedText>
    </div>
  </div>
);

export default function ApplicationProcessSection() {
  const { t } = useTranslation();
  const baseNameSpace = "landing.applicationProcess";
  const cardData: ICardData[] = [
    {
      title: t(`${baseNameSpace}.cardData.first.title`),
      body: t(`${baseNameSpace}.cardData.first.body`),
    },
    {
      title: t(`${baseNameSpace}.cardData.second.title`),
      body: t(`${baseNameSpace}.cardData.second.body`),
    },
    {
      title: t(`${baseNameSpace}.cardData.thrid.title`),
      body: t(`${baseNameSpace}.cardData.thrid.body`),
    },
  ];
  return (
    <div className="flex flex-col min-h-[472px] gap-10 justify-center sm:py-0 py-10 ">
      <div className="flex items-center justify-center">
        <Title>{t(`${baseNameSpace}.title`)}</Title>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 flex sm:flex-row flex-col justify-between">
          {cardData.map((data, index) => (
            <Card {...data} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <ApplyToJoin />

        <div className="sm:px-0 px-20 flex items-center">
          <CenterAlignedText color="#959595">
            {t(`${baseNameSpace}.footer`)}
          </CenterAlignedText>
        </div>
      </div>
    </div>
  );
}
