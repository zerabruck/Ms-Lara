"use client";
import Image from "next/image";
import React, { useState } from "react";
interface HealthcareFaqCardProp {
  question: string;
  answer: string;
}
const HealthcareFaqCard: React.FC<HealthcareFaqCardProp> = ({
  question,
  answer,
}) => {
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
          <p className="font-helvetica w-[90%] text-[15px] font-normal leading-[22px] tracking-[0.01em] text-left">
            {question}
          </p>
          <div className=" w-[10%] relative h-[23.82px]">
            <Image fill src="/icons/blue-left-circle.svg" alt="left icon" />
          </div>
        </div>
        {display && (
          <p className="font-helvetica sm:w-[90%] pt-4 text-[#5E596D] text-[15px] font-normal leading-[18px] tracking-[0.01em] text-left">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default HealthcareFaqCard;
