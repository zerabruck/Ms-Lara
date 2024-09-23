"use client";
import ResourceFromVaAndBeyond from "@/components/va-sub-pages/ResourceFromVaAndBeyond";
import VeteransBottomNav from "@/components/va-sub-pages/VeteransBottomNav";
import VideoSideCard from "@/components/va-sub-pages/VideoSideCard";
import VsResourceNewsAndUpdate from "@/components/va-sub-pages/VsResourceNewsAndUpdate";
import VsResourcesFeaturedSection from "@/components/va-sub-pages/VsResourcesFeaturedSection";
import VsResourcesUrgentSection from "@/components/va-sub-pages/VsResourcesUrgentSection";
import React from "react";
import { Grid } from "antd";
import { useTranslation } from "react-i18next";
const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className={`relative h-[89vh] bg-cover bg-center bg-no-repeat grid grid-cols-24 grid-rows-3 bg-[url('/veterans-images/resource-for-veteran-mobile.png')] sm:bg-[url('/veterans-images/resource-for-vs.png')]`}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20"></div>
        <div className="flex absolute top-[273px] md:top-[232px] left-0 mx-auto  w-full md:w-fit md:mx-0 md:left-[119px] h-[141px]  flex-col justify-center items-center md:items-start">
          <p className="md:text-[36px] mb-5 sm:mb-0  text-[20px] text-white max-w-[275px]  md:max-w-[527px]">
            {t("resourceForVs.header")}
          </p>
        </div>
      </div>
      <ResourceFromVaAndBeyond />
      <VsResourcesUrgentSection />
      <VsResourceNewsAndUpdate />
      <div className="px-[2rem] sm:px-[9rem]">
        <VideoSideCard
          isreverse={false}
          imageUrl="/veterans-images/video-image.png"
          title={t("resourceForVs.video.header")}
          body={t("resourceForVs.video.description")}
          footer={t("resourceForVs.video.footer")}
          linkUrl="https://www.youtube.com/playlist?list=PLY7mRNUcQyMQ7MYi-N8GU7vp0OTMurdR6"
        />
      </div>
      <VsResourcesFeaturedSection />
      <VeteransBottomNav />
    </div>
  );
};

export default Page;
