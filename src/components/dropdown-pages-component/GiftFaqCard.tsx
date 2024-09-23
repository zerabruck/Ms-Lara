"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface GiftFaqCardProp {
  question: string;
  answer: string;
}
const GiftFaqCard: React.FC<GiftFaqCardProp> = ({ question, answer }) => {
  const [display, setDisplay] = useState<boolean>(true);
  return (
    <div
      onClick={() => {
        setDisplay((prev) => !prev);
      }}
      className=" cursor-pointer w-full "
    >
      <div className="  border-b pb-4 border-[#99BDFF]">
        <div className="flex items-center justify-between ">
          <p className="font-helvetica text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
            {question}
          </p>
          <div
            className={`relative w-[24px] block h-[24px] transform ${
              display ? " rotate-0" : " rotate-180"
            }`}
          >
            <Image
              src="/icons/chevron_big_down.svg"
              alt="Drop down arrow"
              fill
            />
          </div>
        </div>
        {display && (
          <p className="font-helvetica pt-4 text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default GiftFaqCard;
