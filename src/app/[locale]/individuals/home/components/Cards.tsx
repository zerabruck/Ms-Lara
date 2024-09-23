"use client";

import { Flex, Typography } from "antd";

export default function Card({
  title,
  content,
  backgroundColor,
  height,
}: {
  title: string;
  content: string;
  backgroundColor: string;
  height: string;
}) {
  return (
    <Flex
      align="center"
      justify="center"
      gap={"16px"}
      style={{
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: "5px",
      }}
      vertical
    >
      <span
        style={{
          fontFamily: "Helvetica",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "25.9px",
          textAlign: "left",
          color: "#000000",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "Helvetica",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "15px",
          letterSpacing: "0.01em",
          textAlign: "center",
          color: "#5E596D",
        }}
      >
        {content}
      </span>
    </Flex>
  );
}
