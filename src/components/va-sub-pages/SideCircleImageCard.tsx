import Image from "next/image";
import React from "react";
interface ISideCircleImageCardProps {
  author: string;
  body: string;
  imageUrl: string;
}
const SideCircleImageCard: React.FC<ISideCircleImageCardProps> = ({
  author,
  body,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row max-w-[700px] mx-auto sm:gap-10 items-center py-5">
      <div>
        <p className="font-helvetica text-[15px] font-normal leading-[28px] tracking-[0.01em] text-justify text-[#5E596D] whitespace-pre-line mb-2">
          {body}
        </p>
        <p className="font-helvetica text-[14px] font-normal leading-[24px] text-left text-[#0D99FF] py-8">
          {author}
        </p>
      </div>
      <div>
        <div className="relative w-[100px] h-[100px] sm:w-[350] sm:h-[350]">
          <Image src={imageUrl} fill alt="circle image" />
        </div>
      </div>
    </div>
  );
};

export default SideCircleImageCard;
