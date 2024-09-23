import Image from "next/image";
import React from "react";
import { parnterImage } from "../data/data";

const PartnersSection = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "3rem 7rem",
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      {parnterImage.map((partner, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: partner.width,
            height: partner.height,
          }}
        >
          <Image fill alt="Partners logo" src={partner.src} />
        </div>
      ))}
    </div>
  );
};

export default PartnersSection;
