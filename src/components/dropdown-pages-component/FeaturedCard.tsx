import React from "react";
import { useTranslation } from "react-i18next";
const FeaturedCard = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center  ">
      <p className="font-helvetica text-[100px] font-normal text-center">“</p>
      <p className="font-helvetica -mt-16 mb-4 font-helvetica text-[20px]  leading-[25.9px]  sm:text-[25px] font-normal sm:leading-[32.37px] text-center">
        {t("giftsWebView.featuredGift.card.first.title")}
      </p>
      <p className="font-helvetica text-[14px] text-[#5E596D] sm:text-[16px] font-normal leading-[24px] ">
        {t("giftsWebView.featuredGift.card.first.name")}
      </p>
    </div>
  );
};

export default FeaturedCard;
