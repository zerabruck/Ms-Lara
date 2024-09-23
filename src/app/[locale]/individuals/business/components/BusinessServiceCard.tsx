"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface BusinessServiceCardProps {
  title: string;
  iconUrl: string;
  bgColor?: string;
  header?: string;
  circleContainer?: boolean;
}

const BusinessServiceCard: React.FC<BusinessServiceCardProps> = ({
  title,
  iconUrl,
  bgColor,
  header,
  circleContainer = true,
}) => {
  const HeaderContainer = styled.div`
    font-family: "Helvetica";
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #343030;
  `;

  return (
    <div
      style={{
        background: bgColor ? bgColor : "",
        boxShadow: "0 0px 7px rgba(0, 0, 0, 0.1)",
        padding: circleContainer ? "1rem 2rem" : "1rem 1rem",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        color: "#5E596D",
        flex: "1 1 200px",
      }}
    >
      <div
        style={{
          position: "relative",
          border: circleContainer ? "solid" : "none",
          borderRadius: circleContainer ? "100%" : "0px",
          height: circleContainer ? "70px" : "50px",
          width: circleContainer ? "70px" : "50px",
          padding: ".5rem",
          borderColor: "#858585",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: circleContainer ? "white" : "",
        }}
      >
        {circleContainer ? (
          <Image src={iconUrl} width={35} height={35} alt="service icon" />
        ) : (
          <Image fill={!circleContainer} src={iconUrl} alt="service icon" />
        )}
      </div>
      {header && <HeaderContainer>{header}</HeaderContainer>}
      <span
        style={{
          fontFamily: "Helvetica",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "15px",
          letterSpacing: "0.01em",
          textAlign: "center",
        }}
      >
        {title}
      </span>
    </div>
  );
};
export default BusinessServiceCard;
