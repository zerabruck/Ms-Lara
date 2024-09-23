"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const Pricing = () => {
  const { t } = useTranslation("dropdownpages");
  const [leftPrice, setLeftPrice] = useState<boolean>(true);
  const [rightPrice, setRightPrice] = useState<boolean>(true);
  return (
    <div className=" py-[2rem] px-[2rem] flex flex-col items-center gap-5 bg-gradient-to-r from-[rgba(166,207,245,0.17)] via-[rgba(184,167,238,0.17)] to-[rgba(215,209,233,0.17)]">
      <div className="flex items-center gap-2">
        <p className="font-helvetica text-[25px] font-normal leading-[32.37px] text-center">
          {t("massageMembership.pricing.title")}
        </p>
        <div className="shadow-[0px_0px_4px_0px_#00000040] bg-white flex items-center w-[125px]">
          <input
            placeholder="1000"
            className="w-[100px] h-[28px] text-[#DDDDDD] font-helvetica text-[10px] font-normal leading-[17px] tracking-[0.01em] text-center"
          />
          <div className="relative w-[12px] h-[15px] ">
            <Image src="/icons/edit-icon.svg" alt="edit" fill />
          </div>
        </div>
      </div>
      <p className="font-helvetica text-[#5E596D] text-[14px] sm:text-[20px] font-normal leading-[18.13px] sm:leading-[25.9px] text-center">
        {t("massageMembership.pricing.description")}
      </p>

      <button className=" rounded-[2px] px-2 mx-auto  h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
        <Image
          src="/icons/ic_baseline-plus.svg"
          alt="plus"
          width={16}
          height={16}
        />
        <span> {t("massageMembership.pricing.button")}</span>
      </button>
      <div className="flex flex-col sm:flex-row gap-[4rem]">
        <div className="bg-white h-fit flex flex-col justify-center gap-2 w-[90vw] sm:w-[290px] p-3 shadow-[0px_4px_20px_0px_#D0D0D040]">
          <p className="font-helvetica  text-[14px] font-normal leading-[24px] text-center">
            {t("massageMembership.pricing.card.first.title")}
          </p>
          <p className="font-helvetica text-[30px] font-normal leading-[48px] text-center">
            {t("massageMembership.pricing.card.first.price")}
          </p>
          <p className="font-helvetica mb-2 text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center text-[#5E596D]">
            {t("massageMembership.pricing.card.first.subtitle")}
          </p>
          <button className="w-[187px] mx-auto h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
            {t("massageMembership.pricing.card.first.button")}
          </button>
          {leftPrice && (
            <>
              <p className="font-helvetica mt-3 text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t("massageMembership.pricing.card.first.firstDescription")}
              </p>
              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t("massageMembership.pricing.card.first.secondDescription")}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t("massageMembership.pricing.card.first.thirdDescription")}
              </p>
              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t("massageMembership.pricing.card.first.fourthDescription")}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t("massageMembership.pricing.card.first.fifthDescription")}
              </p>
              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t("massageMembership.pricing.card.first.sixthDescription")}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t("massageMembership.pricing.card.first.seventhDescription")}
              </p>
            </>
          )}
          <div
            onClick={() => setLeftPrice(!leftPrice)}
            className={`relative w-[24px] block mx-auto h-[24px] transform ${
              leftPrice ? " rotate-0 mt-[2rem]" : " rotate-180"
            }`}
          >
            <Image src="/icons/fe_drop-down.svg" alt="Drop down arrow" fill />
          </div>
        </div>
        <div className="bg-white h-fit flex flex-col justify-center gap-2 w-[90vw] sm:w-[290px] p-3 shadow-[0px_4px_20px_0px_#D0D0D040]">
          <p className="font-helvetica  text-[14px] font-normal leading-[24px] text-center">
            {t("massageMembership.pricing.card.second.title")}
          </p>
          <p className="font-helvetica text-[30px] font-normal leading-[48px] text-center">
            {t("massageMembership.pricing.card.second.price")}
          </p>
          <p className="font-helvetica mb-2 text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center text-[#5E596D]">
            {t("massageMembership.pricing.card.second.subtitle")}
          </p>
          <button className="w-[187px] mx-auto h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
            {t("massageMembership.pricing.card.second.button")}
          </button>
          {rightPrice && (
            <>
              <p className="font-helvetica mt-3 text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.firstDescription"
                )}
              </p>

              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.secondDescription"
                )}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.thirdDescription"
                )}
              </p>
              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.fourthDescription"
                )}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.fifthDescription"
                )}
              </p>
              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.sixthDescription"
                )}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.seventhDescription"
                )}
              </p>
              <p className="font-helvetica text-[15px] sm:text-[12px] font-normal leading-[22px] sm:leading-[15px] tracking-[0.01em] text-black sm:text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.eighthDescription"
                )}
              </p>
              <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-[#5E596D]">
                {t(
                  "massageMembership.pricing.card.second.ninthDescription"
                )}
              </p>
            </>
          )}
          <div
            onClick={() => setRightPrice(!rightPrice)}
            className={`relative w-[24px] block mx-auto h-[24px] transform ${
              rightPrice ? " rotate-0 mt-[2rem]" : " rotate-180"
            }`}
          >
            <Image src="/icons/fe_drop-down.svg" alt="Drop down arrow" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
