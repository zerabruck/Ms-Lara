"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhatIsMembershipSection from "@/components/dropdown-pages-component/WhatIsMembershipSection";
import MembershipReviewCard from "@/components/dropdown-pages-component/MemebershipReviewCard";
import MakeWellnessEasy from "@/components/dropdown-pages-component/MakeWellnessEasy";
import MonthlyRitualSection from "@/components/dropdown-pages-component/MonthlyRitualSection";
import Pricing from "@/components/dropdown-pages-component/Pricing";
import FeaturedPartnerSection from "@/components/dropdown-pages-component/FeaturedPartnerSection";
import MembershipQuestions from "@/components/dropdown-pages-component/MembershipQuestions";
import MemberMessage from "@/components/dropdown-pages-component/MemberMessage";
import { useTranslation, Trans } from "react-i18next";

const Page = () => {
  const { t } = useTranslation("dropdownpages");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="font-[Helvetica]">
      <div className=" h-[89vh] flex justify-center  items-center bg-cover bg-[url(/drop-down-images/membership-landing-mobile.png)] sm:bg-[url(/drop-down-images/membership-landing.png)] bg-center bg-no-repeat">
        <div className="flex  h-full justify-center items-center sm:items-start  sm:justify-start sm:mt-[23rem] mt-0   w-full ">
          <div className="bg-[#EAE2F799] flex flex-col px-[2rem] w-full h-fit justify-center items-center gap-5 py-10">
            <p className="font-helvetica sm:text-[25px]  sm:leading-[32.37px] sm:text-left font-helvetica text-[20px] font-normal leading-[25.9px] text-center">
              {t("massageMembership.header.title")}
            </p>
            <p className=" max-w-[541px] font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center">
              {t("massageMembership.header.description")}
            </p>
            <button className="w-[187px] h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
              {t("massageMembership.header.button")}
            </button>
          </div>
        </div>
      </div>
      <div>
        <WhatIsMembershipSection />
        <div className=" px-[2rem] pb-12  bg-gradient-to-r from-[rgba(81,164,242,0.5)] via-[rgba(133,171,247,0.557273)] to-[rgba(209,181,255,0.64)]">
          <Slider {...settings}>
            <div>
              <MembershipReviewCard
                review={
                  <>
                    <Trans
                      i18nKey="massageMembership.testimonial.first.description"
                      components={[<br key={1} className="underline" />]}
                    />
                  </>
                }
                reviewer={t("massageMembership.testimonial.first.reviewer")}
              />
            </div>
            <div>
              <MembershipReviewCard
                review={
                  <>
                    <Trans
                      i18nKey="massageMembership.testimonial.first.description"
                      components={[<br key={1} className="underline" />]}
                    />
                  </>
                }
                reviewer={t("massageMembership.testimonial.first.reviewer")}
              />
            </div>
            <div>
              <MembershipReviewCard
                review={
                  <>
                    <Trans
                      i18nKey="massageMembership.testimonial.first.description"
                      components={[<br key={1} />]}
                    />
                  </>
                }
                reviewer={t("massageMembership.testimonial.first.reviewer")}
              />
            </div>
          </Slider>
        </div>
        <MakeWellnessEasy />
        <MonthlyRitualSection />
        <Pricing />
        <FeaturedPartnerSection />
        <MembershipQuestions />
        <MemberMessage />
        <div className=" px-[2rem] sm:py-[2rem] pb-[3rem] sm:pb-[4rem]  bg-gradient-to-r from-[rgba(81,164,242,0.5)] via-[rgba(133,171,247,0.557273)] to-[rgba(209,181,255,0.64)]">
          <Slider {...settings}>
            <div>
              <MembershipReviewCard
                review={<>{t("massageMembership.review.first.description")}</>}
                reviewer={t("massageMembership.review.first.name")}
              />
            </div>
            <div>
              <MembershipReviewCard
                review={<>{t("massageMembership.review.second.description")}</>}
                reviewer={t("massageMembership.review.second.name")}
              />
            </div>
            <div>
              <MembershipReviewCard
                review={<>{t("massageMembership.review.third.description")}</>}
                reviewer={t("massageMembership.review.third.name")}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Page;
