import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ClientSayingCard = () => {
  const { t } = useTranslation("dropdownpages");
  return (
    <div className="flex items-center justify-center sm:justify-start gap-5">
      <div className=" relative w-[100px] h-[100px]">
        <Image
          fill
          src="/drop-down-images/women-client.png"
          alt="client image"
        />
      </div>
      <div>
        <p className="font-helvetica text-[#0D99FF] text-[20px] font-normal leading-[25.9px] text-left">
          {t("massage.clientSaying.clientCard.name")}
        </p>
        <p className="font-helvetica text-[#C4C4C4] text-[14px] font-normal leading-[18.13px] text-left">
          {t("massage.clientSaying.clientCard.position")}
        </p>
      </div>
    </div>
  );
};
export default ClientSayingCard;
