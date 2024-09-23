"use client";
import React from "react";

interface ServiceCardProps {
  body: string;
  bgColor?: string;
  number?: string;
  header?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  body,
  bgColor,
  header,
  number,
}) => {
  return (
    <div
      style={{
        background: bgColor ? bgColor : "",
      }}
      className="p-4 sm:p-8 rounded flex flex-col shadow items-center justify-center gap-4 text-[#5E596D] flex-1 min-w-[200px]"
    >
      <div className="relative border-2 rounded-full h-[70px] w-[70px] p-2 border-[#001E54] flex justify-center items-center">
        <div className="relative border text-white rounded-full h-[50px] w-[50px] p-2 bg-[#0D99FF] flex justify-center items-center ">
          {number}
        </div>
      </div>
      {header && (
        <div className="font-helvetica   w-full text-[20px] font-normal leading-6 tracking-[0.01em] text-[#343030]">
          {header}
        </div>
      )}
      <span className="font-helvetica text-xs font-normal leading-[15px] tracking-[0.01em] ">
        {body}
      </span>
    </div>
  );
};

export default ServiceCard;
