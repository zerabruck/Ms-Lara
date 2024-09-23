"use client";
import H5 from "@/components/ui/typography/H5";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
interface IStats {
  stat: string;
  title: string;
}

const Container = styled.div`
  background: linear-gradient(
    270deg,
    rgba(166, 207, 245, 0.17) 0%,
    rgba(184, 167, 238, 0.17) 50%,
    rgba(215, 209, 233, 0.17) 100%
  );
`;

const StatText = styled.div`
  font-family: Helvetica;
  font-size: 70px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  color: #0d99ff;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 50px;
    font-weight: 400;
    line-height: 48px;
    text-align: left;
  }
`;

const StatsCard = ({ stat, title }: IStats) => (
  <div className="flex flex-col gap-5 sm:gap-10 items-center ">
    <StatText>{stat}</StatText>
    <H5 color="#5E596D">{title}</H5>
  </div>
);
export default function SixthSection() {
  const { t } = useTranslation();
  const baseNameSpace = "landing.sixthSection";
  const statsData: Array<IStats> = [
    {
      stat: t("landing.sixthSection.firstStat.stat"),
      title: t(`${baseNameSpace}.firstStat.title`),
    },
    {
      stat: t(`${baseNameSpace}.secondStat.stat`),
      title: t(`${baseNameSpace}.secondStat.title`),
    },
    {
      stat: t(`${baseNameSpace}.thridStat.stat`),
      title: t(`${baseNameSpace}.thridStat.title`),
    },
  ];
  return (
    <Container className="min-h-[296px] grid grid-cols-12 sm:py-0 py-10">
      <div className="sm:col-start-3 sm:col-end-12 sm:grid sm:grid-cols-3 col-start-1 col-end-13 flex flex-col items-center gap-10">
        {statsData.map((stats, index) => (
          <StatsCard key={index} {...stats} />
        ))}
      </div>
    </Container>
  );
}
