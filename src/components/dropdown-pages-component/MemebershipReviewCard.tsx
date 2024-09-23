import React from "react";
interface MembershipReviewCardProps {
  review: string | React.ReactNode;
  reviewer: string;
}
const MembershipReviewCard: React.FC<MembershipReviewCardProps> = ({
  review,
  reviewer,
}) => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center
 "
    >
      <p className="font-helvetica text-[100px] font-normal text-center">“</p>
      <div className=" max-w-[969px] font-helvetica -mt-16 mb-4 font-helvetica text-[20px]  leading-[25.9px]  sm:text-[25px] font-normal sm:leading-[32.37px] text-center">
        {review}
      </div>
      <p className="font-helvetica text-[14px] text-[#5E596D] sm:text-[12px] font-normal leading-[24px] text-center ">
        {reviewer}
      </p>
    </div>
  );
};

export default MembershipReviewCard;
