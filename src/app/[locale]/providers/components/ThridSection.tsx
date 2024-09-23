"use client";
import H1 from "@/components/ui/typography/H1";
import H5 from "@/components/ui/typography/H5";
import ApplyToJoin from "./ApplyToJoinNetworkButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function ThirdSection() {
  const { t } = useTranslation();
  const massageSpecialties = [
    t("landing.thirdSection.bulletPoints.first"),
    t("landing.thirdSection.bulletPoints.second"),
    t("landing.thirdSection.bulletPoints.third"),
    t("landing.thirdSection.bulletPoints.fourth"),
    t("landing.thirdSection.bulletPoints.fifth"),
    t("landing.thirdSection.bulletPoints.sixth"),
  ];
  return (
    <div className="sm:grid sm:grid-cols-12 mb-10 sm:mt-0 mt-20 ">
      <div className="col-start-2 col-end-7 sm:px-0 px-10">
        <div className="flex flex-col gap-5">
          <H1>{t("landing.thirdSection.header")}</H1>

          <div className="flex flex-col gap-2">
            <H5 color="#5E596D">
              {t("landing.thirdSection.paragraphs.first")}
            </H5>
            <H5 color="#5E596D">
              {t("landing.thirdSection.paragraphs.second")}
            </H5>
            <div className="flex flex-col gap-1">
              {massageSpecialties.map((text, key) => (
                <H5 color="#5E596D" key={key}>
                  {text}
                </H5>
              ))}
            </div>
          </div>

          <ApplyToJoin />
        </div>
      </div>

      <div className="col-start-8 col-end-12 sm:mt-0 mt-10 sm:px-0 px-5">
        <Image
          src={"/providers/Rectangle 343.png"}
          width={537}
          height={600}
          alt="Back rub massage"
        />
      </div>
    </div>
  );
}
