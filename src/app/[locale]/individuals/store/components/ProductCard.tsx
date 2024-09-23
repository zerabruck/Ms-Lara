"use client";
import React from "react";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

const ProductCard = ({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) => {
  return (
    <Card
      style={{
        width: "235.95px",
        minHeight: "280.86px",
        gap: "0px",
        border: "1px solid #2A2A2A",
        borderRadius: "0px",
        background: "transparent",
      }}
      cover={<Image alt="example" src={imageSrc} height={233} width={170} />}
    >
      <Meta
        title={
          <div
            style={{
              height: "45.67px",
              // backgroundColor: "#F9F4EBB2",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "22px",
                letterSpacing: "0.01em",
                textAlign: "center",
                color: "#2A2A2A",
              }}
            >
              {title}
            </span>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
