import React from "react";
interface MassageLandingCardProps {
  title: string;
  description: string;
}
const MassageLandingCard: React.FC<MassageLandingCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <p className="font-helvetica text-[20px] sm:text-[25px] font-normal leading-[25.9px] sm:leading-[32.37px] text-center">
        {title}
      </p>
      <p className="font-helvetica text-[12px] max-w-[473px] font-normal leading-[15px] tracking-[0.01em] text-center">
        {description}
      </p>
    </div>
  );
};

export default MassageLandingCard;
