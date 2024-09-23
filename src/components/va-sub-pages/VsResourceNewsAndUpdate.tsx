import React from "react";
import VaNewsCard from "./VaNewsCard";
import { useTranslation } from "react-i18next";

const VsResourceNewsAndUpdate = () => {
  const { t } = useTranslation();
  const news = [
    {
      body: t("resourceForVs.newsAndUpdates.news.first.description"),
      linkName: t("resourceForVs.newsAndUpdates.news.first.link"),
    },
    {
      body: t("resourceForVs.newsAndUpdates.news.second.description"),
      linkName: t("resourceForVs.newsAndUpdates.news.second.link"),
    },
    {
      body: t("resourceForVs.newsAndUpdates.news.third.description"),
      linkName: t("resourceForVs.newsAndUpdates.news.third.link"),
    },
    {
      body: t("resourceForVs.newsAndUpdates.news.fourth.description"),
      linkName: t("resourceForVs.newsAndUpdates.news.fourth.link"),
    },
    {
      body: t("resourceForVs.newsAndUpdates.news.fifth.description"),
      linkName: t("resourceForVs.newsAndUpdates.news.fifth.link"),
    },
    {
      body: t("resourceForVs.newsAndUpdates.news.sixth.description"),
      linkName: t("resourceForVs.newsAndUpdates.news.sixth.link"),
    },
  ];
  return (
    <div className="md:px-[9rem] pb-[1rem] sm:pb-[2rem] px-[2rem] bg-gradient-to-r from-[rgba(166,207,245,0.17)] via-[rgba(184,167,238,0.17)] to-[rgba(215,209,233,0.17)]">
      <p className="font-helvetica text-[20px] leading-[25.9px]  font-helvetica sm:text-[36px] w-fit mx-auto sm:py-[3rem] py-[1rem] font-normal sm:leading-[46.62px] text-left">
        {t("resourceForVs.newsAndUpdates.header")}
      </p>
      <div>
        <div className="flex  md:flex-row items-center gap-5 flex-col justify-between">
          <VaNewsCard body={news[0].body} linkName={news[0].linkName} />
          <VaNewsCard body={news[1].body} linkName={news[1].linkName} />
        </div>
        <div className="flex mt-5 md:flex-row items-center gap-5 flex-col justify-between">
          <VaNewsCard body={news[2].body} linkName={news[2].linkName} />
          <VaNewsCard body={news[3].body} linkName={news[3].linkName} />
        </div>
        <div className="flex mt-5 md:flex-row items-center gap-5 flex-col justify-between">
          <VaNewsCard body={news[4].body} linkName={news[4].linkName} />
          <VaNewsCard body={news[5].body} linkName={news[5].linkName} />
        </div>
      </div>
    </div>
  );
};

export default VsResourceNewsAndUpdate;
