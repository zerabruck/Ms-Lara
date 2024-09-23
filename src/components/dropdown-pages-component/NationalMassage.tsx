import React from "react";
import NationCard from "./NationCard";
import { useTranslation } from "react-i18next";
const NationalMassage = () => {
  const { t } = useTranslation("dropdownpages");
  const nations = [
    {
      country: t("massage.nationalMassage.nations.first.country"),
      cities: [
        t("massage.nationalMassage.nations.first.cities.0"),
        t("massage.nationalMassage.nations.first.cities.1"),
        t("massage.nationalMassage.nations.first.cities.2"),
        t("massage.nationalMassage.nations.first.cities.3"),
        t("massage.nationalMassage.nations.first.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.second.country"),
      cities: [
        t("massage.nationalMassage.nations.second.cities.0"),
        t("massage.nationalMassage.nations.second.cities.1"),
        t("massage.nationalMassage.nations.second.cities.2"),
        t("massage.nationalMassage.nations.second.cities.3"),
        t("massage.nationalMassage.nations.second.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.third.country"),
      cities: [
        t("massage.nationalMassage.nations.third.cities.0"),
        t("massage.nationalMassage.nations.third.cities.1"),
        t("massage.nationalMassage.nations.third.cities.2"),
        t("massage.nationalMassage.nations.third.cities.3"),
        t("massage.nationalMassage.nations.third.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.fourth.country"),
      cities: [
        t("massage.nationalMassage.nations.fourth.cities.0"),
        t("massage.nationalMassage.nations.fourth.cities.1"),
        t("massage.nationalMassage.nations.fourth.cities.2"),
        t("massage.nationalMassage.nations.fourth.cities.3"),
        t("massage.nationalMassage.nations.fourth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.fifth.country"),
      cities: [
        t("massage.nationalMassage.nations.fifth.cities.0"),
        t("massage.nationalMassage.nations.fifth.cities.1"),
        t("massage.nationalMassage.nations.fifth.cities.2"),
        t("massage.nationalMassage.nations.fifth.cities.3"),
        t("massage.nationalMassage.nations.fifth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.sixth.country"),
      cities: [
        t("massage.nationalMassage.nations.sixth.cities.0"),
        t("massage.nationalMassage.nations.sixth.cities.1"),
        t("massage.nationalMassage.nations.sixth.cities.2"),
        t("massage.nationalMassage.nations.sixth.cities.3"),
        t("massage.nationalMassage.nations.sixth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.seventh.country"),
      cities: [
        t("massage.nationalMassage.nations.seventh.cities.0"),
        t("massage.nationalMassage.nations.seventh.cities.1"),
        t("massage.nationalMassage.nations.seventh.cities.2"),
        t("massage.nationalMassage.nations.seventh.cities.3"),
        t("massage.nationalMassage.nations.seventh.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.eighth.country"),
      cities: [
        t("massage.nationalMassage.nations.eighth.cities.0"),
        t("massage.nationalMassage.nations.eighth.cities.1"),
        t("massage.nationalMassage.nations.eighth.cities.2"),
        t("massage.nationalMassage.nations.eighth.cities.3"),
        t("massage.nationalMassage.nations.eighth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.ninth.country"),
      cities: [
        t("massage.nationalMassage.nations.ninth.cities.0"),
        t("massage.nationalMassage.nations.ninth.cities.1"),
        t("massage.nationalMassage.nations.ninth.cities.2"),
        t("massage.nationalMassage.nations.ninth.cities.3"),
        t("massage.nationalMassage.nations.ninth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.tenth.country"),
      cities: [
        t("massage.nationalMassage.nations.tenth.cities.0"),
        t("massage.nationalMassage.nations.tenth.cities.1"),
        t("massage.nationalMassage.nations.tenth.cities.2"),
        t("massage.nationalMassage.nations.tenth.cities.3"),
        t("massage.nationalMassage.nations.tenth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.eleventh.country"),
      cities: [
        t("massage.nationalMassage.nations.eleventh.cities.0"),
        t("massage.nationalMassage.nations.eleventh.cities.1"),
        t("massage.nationalMassage.nations.eleventh.cities.2"),
        t("massage.nationalMassage.nations.eleventh.cities.3"),
        t("massage.nationalMassage.nations.eleventh.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.twelfth.country"),
      cities: [
        t("massage.nationalMassage.nations.twelfth.cities.0"),
        t("massage.nationalMassage.nations.twelfth.cities.1"),
        t("massage.nationalMassage.nations.twelfth.cities.2"),
        t("massage.nationalMassage.nations.twelfth.cities.3"),
        t("massage.nationalMassage.nations.twelfth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.thirteenth.country"),
      cities: [
        t("massage.nationalMassage.nations.thirteenth.cities.0"),
        t("massage.nationalMassage.nations.thirteenth.cities.1"),
        t("massage.nationalMassage.nations.thirteenth.cities.2"),
        t("massage.nationalMassage.nations.thirteenth.cities.3"),
        t("massage.nationalMassage.nations.thirteenth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.fourteenth.country"),
      cities: [
        t("massage.nationalMassage.nations.fourteenth.cities.0"),
        t("massage.nationalMassage.nations.fourteenth.cities.1"),
        t("massage.nationalMassage.nations.fourteenth.cities.2"),
        t("massage.nationalMassage.nations.fourteenth.cities.3"),
        t("massage.nationalMassage.nations.fourteenth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.fifteenth.country"),
      cities: [
        t("massage.nationalMassage.nations.fifteenth.cities.0"),
        t("massage.nationalMassage.nations.fifteenth.cities.1"),
        t("massage.nationalMassage.nations.fifteenth.cities.2"),
        t("massage.nationalMassage.nations.fifteenth.cities.3"),
        t("massage.nationalMassage.nations.fifteenth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.sixteenth.country"),
      cities: [
        t("massage.nationalMassage.nations.sixteenth.cities.0"),
        t("massage.nationalMassage.nations.sixteenth.cities.1"),
        t("massage.nationalMassage.nations.sixteenth.cities.2"),
        t("massage.nationalMassage.nations.sixteenth.cities.3"),
        t("massage.nationalMassage.nations.sixteenth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.seventeenth.country"),
      cities: [
        t("massage.nationalMassage.nations.seventeenth.cities.0"),
        t("massage.nationalMassage.nations.seventeenth.cities.1"),
        t("massage.nationalMassage.nations.seventeenth.cities.2"),
        t("massage.nationalMassage.nations.seventeenth.cities.3"),
        t("massage.nationalMassage.nations.seventeenth.cities.4"),
      ],
    },
    {
      country: t("massage.nationalMassage.nations.eighteenth.country"),
      cities: [
        t("massage.nationalMassage.nations.eighteenth.cities.0"),
        t("massage.nationalMassage.nations.eighteenth.cities.1"),
        t("massage.nationalMassage.nations.eighteenth.cities.2"),
        t("massage.nationalMassage.nations.eighteenth.cities.3"),
        t("massage.nationalMassage.nations.eighteenth.cities.4"),
      ],
    },
  ];
  return (
    <div className="bg-[#F6F6F4] py-10 px-[2rem] flex flex-col items-center justify-center gap-5">
      <p className="font-helvetica text-[18px] sm:text-[25px] font-normal leading-[32.37px] text-center">
        {t("massage.nationalMassage.title")}
      </p>
      <input
        placeholder={t("massage.nationalMassage.inputPlaceholder")}
        className="sm:w-[322px] mb-5 w-full h-[28px] shadow-[0px_0px_4px_0px_#00000040] text-[#DDDDDD] font-helvetica text-[10px] font-normal leading-[17px] px-5 rounded-[2px] placeholder:text-[10px] placeholder:text-[#DDDDDD] tracking-[0.01em] "
      />
      <div className="flex flex-wrap px-7rem max-w-[1208px] sm:justify-start justify-center gap-5">
        {nations.map((nation, index) => (
          <NationCard
            key={index}
            cities={nation.cities}
            country={nation.country}
          />
        ))}
      </div>
      <button className="px-2 mt-10 mx-auto h-[33.67px] flex justify-center items-center bg-[#0D99FF] gap-2 font-[helvetica]  font-normal sm:leading-[24px] text-[14px] leading-[24px] text-left text-white">
        {t("massage.nationalMassage.button")}
      </button>
    </div>
  );
};

export default NationalMassage;
