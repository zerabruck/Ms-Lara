"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface TrustAndSafetyTabButtonsProp {
  setIndex: (index: number) => void;
}

const TrustAndSafetyTabButtons: React.FC<TrustAndSafetyTabButtonsProp> = ({
  setIndex,
}) => {
  const { t } = useTranslation();
  const trustAndSafetyTabs = [
    t("trustAndSafety.buttonTabs.headlinesGuidelines"),
    t("trustAndSafety.buttonTabs.forConsumers"),
    t("trustAndSafety.buttonTabs.forProviders"),
    t("trustAndSafety.buttonTabs.forBusinesses"),
    t("trustAndSafety.buttonTabs.trustAndSafetyTeam"),
  ];
  const [selectedTab, setSelectedTab] = useState<string>(trustAndSafetyTabs[0]);

  const handleButtonClick = (index: number) => {
    setSelectedTab(trustAndSafetyTabs[index]);
    setIndex(index);
  };

  return (
    <div className="w-full mx-auto flex flex-wrap pt-8 justify-start">
      {trustAndSafetyTabs.map((tab, index) => (
        <div
          key={index}
          className="flex flex-[1_1_130px] sm:flex-[1_1_192px] mb-4 w-fit-content justify-start sm:justify-center"
        >
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`${
              selectedTab === trustAndSafetyTabs[index]
                ? "bg-[#0D99FF]"
                : "bg-white"
            } h-[53px] w-[130px] sm:w-[192px] border-none ${
              selectedTab === trustAndSafetyTabs[index]
                ? "rounded-none sm:rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] sm:shadow-[0px_0px_3px_rgba(0,0,0,0.1)]"
                : ""
            }`}
          >
            <span
              className={`font-Helvetica font-normal text-center ${
                selectedTab === tab ? "text-white" : "text-[#2E3E4B]"
              } text-[12px] sm:text-[15px] sm:px-4 `}
            >
              {tab}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TrustAndSafetyTabButtons;
