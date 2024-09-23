"use client";
import React from "react";
import GiftsCard from "./GiftsCard";
import { useTranslation } from "react-i18next";
const GiftsChoosetheBestExp = () => {
  const {t} = useTranslation();
  const experinces = [
    {
      title: t("giftsWebView.chooseTheBest.card.first.title"),
      bgColor: "#F2F2F2",
      body: t("giftsWebView.chooseTheBest.card.first.description"),
    },
    {
      title: t("giftsWebView.chooseTheBest.card.second.title"),
      bgColor: "white",
      body: t("giftsWebView.chooseTheBest.card.second.description"),
    },
    {
      title:  t("giftsWebView.chooseTheBest.card.third.title"),
      bgColor: "white",
      body: t("giftsWebView.chooseTheBest.card.third.description"),
    },
    {
      title:  t("giftsWebView.chooseTheBest.card.fourth.title"),
      bgColor: "white",
      body: t("giftsWebView.chooseTheBest.card.fourth.description"),
    },
    {
      title: t("giftsWebView.chooseTheBest.card.fifth.title"),
      bgColor: "white",
      body: t("giftsWebView.chooseTheBest.card.fifth.description"),
    },
  ];
  return (
    <div className="">
      <div className="flex sm:py-[5rem] px-[2rem] py-[2rem]  flex-col w-full items-center gap-5">
        <p className="text-[20px] sm:text-[25px] text-[#242424] font-normal leading-[25.9px] sm:leading-[32.37px] text-left">
          {t("giftsWebView.chooseTheBest.title")}
        </p>
        <p className=" text-[12px] text-[#262626] font-normal leading-[15px] tracking-[0.01em] text-center max-w-[674px]">
        {t("giftsWebView.chooseTheBest.description")}

        </p>
      </div>
      <div className="md:px-[7rem] px-[2rem] justify-center flex-wrap flex gap-5 ">
        {experinces.map((experince, index) => {
          return (
            <GiftsCard
              header={experince.title}
              bgColor={experince.bgColor}
              body={experince.body}
              key={index}
            />
          );
        })}
      </div>
      <button className="px-2 mx-auto my-[3rem] h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
      {t("giftsWebView.chooseTheBest.button")}
      </button>
    </div>
  );
};

export default GiftsChoosetheBestExp;
