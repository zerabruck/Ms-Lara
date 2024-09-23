"use client";
import Image from "next/image";
import React from "react";

interface RitualCardProps {
  body: string;
  bgColor?: string;
  header?: string;
}

const RitualCard: React.FC<RitualCardProps> = ({ body, bgColor, header }) => {
  return (
    <div
      className={`shadow-[0px_4px_20px_0px_#D0D0D040] p-4 flex-[1_1_290px] max-w-[290px] h-[156px] rounded-md flex flex-col items-center justify-center gap-2 text-[#5E596D]  flex-shrink-0`}
      style={{ background: bgColor ? bgColor : "" }}
    >
      {header && (
        <div className="font-helvetica text-[14px] text-[#343030] font-normal leading-[24px] text-left">
          {header}
        </div>
      )}
      <div className="font-helvetica max-w-[206px] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-center text-[#5E596D]">
        {body}
      </div>
    </div>
  );
};

export default RitualCard;
