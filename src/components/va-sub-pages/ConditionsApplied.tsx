"use client";
import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
const ConditionsApplied = () => {
  const { t } = useTranslation();
  const tabs = [
    t("learnAboutMassage.conditionsApplied.tabs.first"),
    t("learnAboutMassage.conditionsApplied.tabs.second"),
    t("learnAboutMassage.conditionsApplied.tabs.third"),
  ];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  return (
    <div
      className="w-full pb-10 px-8"
      style={{
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.2) 15%, rgba(133, 171, 247, 0.2) 54%, rgba(81, 164, 242, 0.2) 81%)",
      }}
    >
      <div className="max-w-[994px] mx-auto">
        <p className="font-helvetica text-center text-[25px] font-normal leading-[32.37px] text-[#000000] py-4">
          {t("learnAboutMassage.conditionsApplied.title")}
        </p>
        <div className="w-[100%] h-full  pt-8 flex  font-helvetica sm:text-[18px] text-[8px] font-normal  text-left">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-col  w-[30%]
              `}
            >
              <button
                onClick={() => setSelectedTab(tabs[index])}
                className={`sm:py-5 sm:h-[56px] h-[33px] py-1 rounded-tr-lg ${
                  selectedTab === tab
                    ? "bg-[#0D99FF] text-white"
                    : " text-black"
                }   `}
              >
                <span className={`ml-auto text-[8px] sm:text-[18px]`}>
                  {tab}
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="max-w-[994px] bg-white px-4 py-5">
          <p className="py-3 text-base font-normal leading-[22px] tracking-[0.01em] text-left">
            {t("learnAboutMassage.conditionsApplied.firstTab.mskPain.title")}
          </p>
          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] text-left text-[12px] text-[#3B3B3B] whitespace-pre-line mb-2">
            <Trans
              i18nKey="learnAboutMassage.conditionsApplied.firstTab.mskPain.firstDescription"
              components={[<span key={1} className="underline" />]}
            />
           
          </p>
          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] text-left text-[15px] text-[#3B3B3B] whitespace-pre-line mb-2">
          <Trans
              i18nKey="learnAboutMassage.conditionsApplied.firstTab.mskPain.secondDescription"
              components={[<span key={1} className="underline" />]}
            />
            
          </p>
          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] text-left text-[15px] text-[#3B3B3B] whitespace-pre-line mb-2">
          <Trans
              i18nKey="learnAboutMassage.conditionsApplied.firstTab.mskPain.thirdDescription"
              components={[<span key={1} className="underline" />]}
            />
          </p>
          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] text-left text-[15px] text-[#3B3B3B] whitespace-pre-line mb-2">
           {t("learnAboutMassage.conditionsApplied.firstTab.mskPain.fourthDescription")}
          </p>
          <p className="py-3 text-base font-normal leading-[22px] tracking-[0.01em] text-left">            
            {t("learnAboutMassage.conditionsApplied.firstTab.clinicalRecommendation.title")}
          </p>
          <p className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] text-left text-[15px] text-[#3B3B3B] whitespace-pre-line mb-2">
          {t("learnAboutMassage.conditionsApplied.firstTab.clinicalRecommendation.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConditionsApplied;
