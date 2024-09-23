import Image from "next/image";
import React, { useState } from "react";

interface NationCardProps {
  country: string;
  cities: string[];
}

const NationCard: React.FC<NationCardProps> = ({ cities, country }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="border mb-1 border-[#858585] h-fit flex flex-col justify-center w-[223px] rounded-[2px]">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between h-[38.89px] px-4 items-center cursor-pointer"
      >
        <Image
          src="/icons/openmoji_alabama-flag.svg"
          width={23.25}
          height={14.25}
          alt="nation flag"
        />
        <p className="font-helvetica text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {country}
        </p>
        <Image
          src="/icons/ic_baseline-plus (1).svg"
          width={16}
          height={16}
          alt="nation card"
        />
      </div>
      {show && (
        <div className="mt-2">
          {cities.map((city, index) => {
            return (
              <p
                key={index}
                className="font-helvetica mt-2 px-4 text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left"
              >
                {city}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NationCard;