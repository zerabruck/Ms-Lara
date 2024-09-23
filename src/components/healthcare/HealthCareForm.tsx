"use client";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
const HealthCareForm = () => {
  const { t } = useTranslation();
  return (
    <div className=" px-[2rem] pt-10 sm:px-[7rem] bg-gradient-to-r from-[rgba(166,207,245,0.17)] via-[rgba(184,167,238,0.17)] to-[rgba(215,209,233,0.17)]">
      <p className="font-helvetica text-[20px] pb-5 sm:text-[25px] font-normal leading-[32.25px] text-center">
        <Trans i18nKey="healthcare.form.title" components={[<br key={0} />]} />
      </p>
      <p className="font-helvetica text-[#5E596D] max-w-[382px] mx-auto text-[15px] font-normal leading-[18px] tracking-[0.01em] text-center">
        {t("healthcare.form.subtitle")}
      </p>
      <div className="max-w-[900px] pt-5 sm:pt-10 flex flex-col sm:flex-row sm:gap-10 gap-5 mx-auto">
        <div className="sm:w-1/2 ">
          <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[14px] tracking-[0.01em] text-left">
            {t("healthcare.form.feilds.firstName")}
          </p>
          <input
            type="text"
            className="w-full h-[48px] border border-[#5E596D] bg-transparent rounded-[5px] px-[1rem] mt-[0.5rem]"
          />
        </div>
        <div className="sm:w-1/2 ">
          <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[14px] tracking-[0.01em] text-left">
            {t("healthcare.form.feilds.lastName")}
          </p>
          <input
            type="text"
            className="w-full h-[48px] border border-[#5E596D] bg-transparent rounded-[5px] px-[1rem] mt-[0.5rem]"
          />
        </div>
      </div>
      <div className="max-w-[900px] pt-5 sm:pt-10 flex flex-col sm:flex-row sm:gap-10 gap-5 mx-auto">
        <div className="sm:w-1/2">
          <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[14px] tracking-[0.01em] text-left">
            {t("healthcare.form.feilds.email")}
          </p>
          <input
            type="text"
            className="w-full h-[48px] border border-[#5E596D] bg-transparent rounded-[5px] px-[1rem] mt-[0.5rem]"
          />
        </div>
        <div className="sm:w-1/2">
          <p className="font-helvetica text-[#5E596D] text-[15px] font-normal leading-[14px] tracking-[0.01em] text-left">
            {t("healthcare.form.feilds.phoneNumber")}
          </p>
          <div className="flex items-center relative">
            <input
              type="text"
              className="w-full h-[48px] border border-[#5E596D] bg-transparent rounded-[5px] px-[1rem] mt-[0.5rem]"
            />
            <div
              className={` right-1 bottom-3 absolute w-[20px] sm:w-[24px] block h-[20px] sm:h-[24px] transform `}
            >
              <Image src="/icons/fe_drop-down.svg" alt="Drop down arrow" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-5">
        <button className="w-[158px]  ml-3  my-5 h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica] sm:text-[16px] font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
          {t("healthcare.form.button")}
        </button>
      </div>
    </div>
  );
};

export default HealthCareForm;
