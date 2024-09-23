"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface FaqsDropdownCardProp {
  title: string;
  questions?: string[];
}
const FaqsDropdownCard: React.FC<FaqsDropdownCardProp> = ({
  title,
  questions,
}) => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className=" cursor-pointer w-full ">
      <div
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
        className="shadow-[0px_4px_15px_1px_#00000040] mb-5 cursor-pointer py-[20px] px-5 rounded-[5px]"
      >
        <div className="flex  justify-between items-center">
          <p className="font-helvetica text-[12px] sm:text-[18px] font-[400] tracking-[0.01em] leading-[10px] sm:leading-[23.31px] text-left">
            {title}
          </p>
          {display ? (
            <div className="relative w-[13px] h-[5.69px]">
              <Image src="/icons/down-arrow.svg" alt="Drop down arrow" fill />
            </div>
          ) : (
            <div className="relative w-[12.07px] h-[6.54px]">
              <Image src="/icons/right-arrow.svg" alt="Drop down arrow" fill />
            </div>
          )}
        </div>
      </div>
      {display &&
        questions?.map((question, index) => (
          <p
            key={index}
            className={`font-helvetica ${
              index === 0 ? "text-[#0D99FF]" : "text-black"
            }  pb-5 text-[12px] px-5 font-[400] leading-[15px] tracking-[0.01em] text-left`}
          >
            {question}
          </p>
        ))}
      {display && (
        <p
          className={`font-helvetica  px-5  flex gap-1 text-black pb-5 text-[12px] font-[400] leading-[15px] tracking-[0.01em] text-left`}
        >
          More{" "}
          <Image
            alt="arrow"
            src="/icons/left-black-arrow.svg"
            className="text-black"
            width={9}
            height={5.41}
          />
        </p>
      )}
    </div>
  );
};

export default FaqsDropdownCard;
