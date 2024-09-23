"use client";
import Image from "next/image";
import React from "react";

interface ResourceCardProps {
  body: string;
  bgColor?: string;
  header?: string;
  footer: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  body,
  bgColor,
  header,
  footer,
}) => {
  return (
    <div
      className={`shadow-md p-4 max-w-[354.9px] h-[250.2px] rounded-md flex flex-col items-start justify-center gap-4 text-[#5E596D] flex-1`}
      style={{ background: bgColor ? bgColor : "" }}
    >
      {header && (
        <div className="font-helvetica text-[20px] font-normal leading-[25.9px] text-left">
          {header}
        </div>
      )}
      <div className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
        {body}
      </div>
      <span className="font-helvetica text-[#0D99FF] text-[12px] font-normal leading-[22px] tracking-[0.01em] text-left">
        {footer}
      </span>
    </div>
  );
};

export default ResourceCard;
