"use client";
import React from "react";
import { Grid } from "antd";
import Image from "next/image";
const { useBreakpoint } = Grid;
interface SideImageCardProps {
  header?: string;
  title: string | React.ReactNode;
  body: string | React.ReactNode;
  footer?: string;
  isreverse: boolean;
  imageUrl: string;
  imageHeight?: string;
  hasMargin?: boolean;
}
const SideImageCard: React.FC<SideImageCardProps> = ({
  header,
  title,
  body,
  footer,
  isreverse,
  imageUrl,
  imageHeight = "438px",
  hasMargin = true,
}) => {
  const screen = useBreakpoint();
  const flexDirection = screen.lg ? "row" : "column";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isreverse
          ? `${flexDirection}-reverse`
          : `${flexDirection}`,
        justifyContent: "space-between",
        position: "relative",
        margin: hasMargin ? "3rem 0" : "0",
        alignItems: "center",
      }}
    >
      <div style={{ width: screen.lg ? "46%" : "100%" }}>
        {header && (
          <p
            style={{
              fontFamily: "Helvetica",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "23.31px",
              textAlign: "left",
              color: "#0D99FF",
              padding: "1rem 0",
            }}
          >
            {header}
          </p>
        )}

        <div
          style={{
            fontFamily: "Helvetica",
            fontSize: "25px",
            fontWeight: 400,
            lineHeight: "32.37px",
            color: "#000000",
            padding: "1rem 1rem",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0.01em",
            textAlign: "justify",
            color: "#5E596D",
            whiteSpace: "pre-line",
            marginBottom: "2rem",
          }}
        >
          {body}
        </div>
        {footer && (
          <p
            style={{
              fontFamily: "Helvetica",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              color: "#0D99FF",
              padding: "2rem 0",
            }}
          >
            {footer}
          </p>
        )}
      </div>
      <div
        style={{
          position: "relative",
          width: screen.lg ? "46%" : "100%",
          height: imageHeight,
        }}
      >
        <Image fill objectFit="cover" src={imageUrl} alt="Description" />
      </div>
    </div>
  );
};
export default SideImageCard;
