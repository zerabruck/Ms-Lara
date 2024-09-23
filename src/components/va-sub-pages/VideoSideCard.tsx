"use client";
import React from "react";
import Image from "next/image";

interface VideoSideCardProps {
  header?: string;
  title: string | React.ReactNode;
  body: string | React.ReactNode;
  footer?: string;
  isreverse: boolean;
  imageUrl: string;
  linkUrl?: string;
}

const VideoSideCard: React.FC<VideoSideCardProps> = ({
  header,
  title,
  body,
  footer,
  isreverse,
  imageUrl,
  linkUrl,
}) => {
  const flexDirection = isreverse ? "flex-col-reverse" : "flex-col";

  return (
    <div
      className={`flex ${flexDirection} lg:flex-row justify-between relative py-[2rem]`}
    >
      <div className={`w-full sm:w-[568px] h-fit`}>
        {header && (
          <p className="font-helvetica text-[18px] font-normal leading-[23.31px] text-left text-[#0D99FF] py-4">
            {header}
          </p>
        )}

        <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[32.37px] text-left py-4">
          {title}
        </p>

        <p className=" font-helvetica max-w-[461px] whitespace-pre-line text-[#3B3B3B] text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {body}
        </p>

        {footer && (
          <a
            target="_blank"
            href={linkUrl ? linkUrl : ""}
            className="font-helvetica block text-[14px] font-normal leading-[24px]  text-left text-[#0D99FF] py-8"
          >
            {footer}
          </a>
        )}
      </div>

      <div className="relative sm:w-[568px] w-full  h-[278px]">
        <video
          className="object-cover w-full sm:w-[568px] h-[278px]"
          autoPlay
          muted
          loop
          playsInline
          poster={imageUrl} // Fallback image
        >
          <source src={linkUrl ? linkUrl : ""} type="video/mp4" />
          <div className="absolute inset-0 object-cover sm:w-[568px] w-full h-[278px]">
            <Image src={imageUrl} alt="Fallback image" fill />
          </div>
        </video>
      </div>
    </div>
  );
};

export default VideoSideCard;
