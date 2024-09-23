import React from "react";
interface OnDemandCardProps {
  title: string;
  description: string;
}

const OnDemandCard: React.FC<OnDemandCardProps> = ({ title, description }) => {
  return (
    <div className=" md:w-[300px] sm:w-[354.9px] mx-5 h-[170px] flex flex-col gap-5 items-start p-5 justify-center rounded-[5px] bg-white">
      <p className="font-helvetica text-[20px] font-normal leading-[25.9px] text-left">
        {title}
      </p>
      <p className="font-helvetica text-[12px]  font-normal leading-[15px] tracking-[0.01em] text-left text-[#5E596D]">
        {description}
      </p>
    </div>
  );
};

export default OnDemandCard;
