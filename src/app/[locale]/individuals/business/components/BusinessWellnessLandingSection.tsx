"use client";

import H1 from "@/components/ui/typography/H1";
import { Space } from "antd";
import { useTranslation } from "react-i18next";

export default function BusinessWellnessLandingSection() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem",
        gap: "1rem",
        width: "95vw",
        height: "80vh",
        overflow: "hidden",
        transform: "translateY(15px)",
      }}
    >
      <H1 color="white" style={{ textAlign: "center" }}>
        {t("workplacewellness.intro.headline")}
      </H1>
      <span
        style={{
          fontFamily: "Helvetica",
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "15px",
          letterSpacing: "0.01em",
          textAlign: "center",
          color: "#FFFFFF",
          maxWidth: "550px",
        }}
      >
        {t("workplacewellness.intro.description")}
      </span>

      <Space direction="vertical" size="large">
        <div
          style={{
            width: "100%",
            height: "48px",
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "0 2rem",
            lineHeight: "22px",
            letterSpacing: "0.01em",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0D99FF",
            textAlign: "center",
          }}
        >
          {t("workplacewellness.intro.button")}
        </div>
      </Space>
    </div>
  );
}
