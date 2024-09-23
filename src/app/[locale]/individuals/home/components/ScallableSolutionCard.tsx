"use client";
import React from "react";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

const ScallableSolutionCard = ({
  title,
  textContent,
  imageSrc,
}: {
  title: string;
  textContent: string;
  imageSrc: string;
}) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <div style={{ height: "80%", overflow: "hidden" }}>
          <Image
            alt="example"
            src={imageSrc}
            width={100}
            height={100}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      }
    >
      <Meta
        title={
          <div
            style={{
              fontFamily: "Helvetica",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0.01em",
              textAlign: "center",
            }}
          >
            {title}
          </div>
        }
        description={
          <div
            style={{
              fontFamily: "Helvetica",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "15px",
              letterSpacing: "0.01em",
              textAlign: "center",
            }}
          >
            {textContent}
          </div>
        }
      />
    </Card>
  );
};

export default ScallableSolutionCard;
