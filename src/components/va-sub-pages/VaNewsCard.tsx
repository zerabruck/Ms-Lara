import React from "react";
interface VaNewsCardProps {
  body: string;
  linkName: string;
}
const VaNewsCard: React.FC<VaNewsCardProps> = ({ body, linkName }) => {
  return (
    <p className="font-helvetica max-w-[556px] text-[#5E596D] text-[12px] font-normal leading-[17px] tracking-[0.01em] text-left">
      {body} {""}
      <a className="text-[#0D99FF] leading-[22px] tracking-[0.01em] text-center">
        {linkName}
      </a>
    </p>
  );
};

export default VaNewsCard;
