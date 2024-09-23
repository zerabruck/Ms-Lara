"use client";
import React from "react";
import ResourceCard from "./ResourceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
const ResourceFromVaAndBeyond = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const resourceServices = [
    {
      header: t("resourceForVs.vaAndBeyond.first.header"),
      body: t("resourceForVs.vaAndBeyond.first.description"),
      footer: t("resourceForVs.vaAndBeyond.first.footer"),
      bgColor: "#F2F2F2",
    },
    {
      header: t("resourceForVs.vaAndBeyond.second.header"),
      body: t("resourceForVs.vaAndBeyond.second.description"),
      footer: t("resourceForVs.vaAndBeyond.second.footer"),
      bgColor: "white",
    },
    {
      header: t("resourceForVs.vaAndBeyond.third.header"),
      body: t("resourceForVs.vaAndBeyond.third.description"),
      footer: t("resourceForVs.vaAndBeyond.third.footer"),
      bgColor: "white",
    },
  ];

  return (
    <div className="">
      <p className="font-helvetica  text-[20px] md:text-[36px] w-fit mx-auto py-[1rem] md:py-[3rem] font-normal leading-[46.62px] text-left">
        {t("resourceForVs.vaAndBeyond.header")}
      </p>
      <div className="px-[2rem] md:px-[9rem]">
        <div className="hidden mb-[5rem] md:block">
          <Slider {...settings}>
            {resourceServices.map((service, index) => (
              <div key={index}>
                <ResourceCard
                  header={service.header}
                  body={service.body}
                  footer={service.footer}
                  bgColor={service.bgColor}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className=" md:hidden mb-[2rem] flex flex-col justify-center items-center gap-4">
          {resourceServices.map((service, index) => (
            <div key={index}>
              <ResourceCard
                header={service.header}
                body={service.body}
                footer={service.footer}
                bgColor={service.bgColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceFromVaAndBeyond;
