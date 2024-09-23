"use client";
import Image from "next/image";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

const VeteransBottomNav = () => {
  const { t } = useTranslation("vasubpages");
  return (
    <div className="text-[15px] pt-[5rem]  font-normal leading-[28px] tracking-[0.01em]  text-[#5E596D] whitespace-pre-line">
      <div className="px-8 sm:px-[7rem] ">
        <div className="w-[165px] h-[64px] relative">
          <Image src="/logo.svg" fill alt="logo image" />
        </div>
        <div className="flex flex-col md:flex-row font-helvetica gap:[2rem]  md:gap-[8rem] mb-8">
          <div className="max-w-[673px] mb-8 sm:mb-0">
            <p>
              <Trans
                i18nKey="vasubpages:bottomNav.description"
                components={[<a key={1} className="underline" href="#" />]}
              />
            </p>
          </div>

          <div>
            <p>{t("vasubpages:bottomNav.links.first")}</p>
            <p>{t("vasubpages:bottomNav.links.second")}</p>
            <p>{t("vasubpages:bottomNav.links.third")}</p>
            <p>{t("vasubpages:bottomNav.links.fourth")}</p>
          </div>
        </div>
      </div>
      <div className=" text-[#0D99FF] w-full py-3 bg-gradient-to-r from-[rgba(166,207,245,0.17)] via-[rgba(184,167,238,0.17)] to-[rgba(215,209,233,0.17)] ">
        <div className="flex flex-col gap-[1rem] md:flex-row justify-between px-8 sm:px-[7rem] ">
          <p>
            <Trans
              i18nKey="vasubpages:bottomNav.footer.first"
              components={[<a key={1} className="underline" href="#" />]}
            />
          </p>
          <p>
            <Trans
              i18nKey="vasubpages:bottomNav.footer.second"
              components={[<a key={1} className="underline" href="#" />]}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeteransBottomNav;
