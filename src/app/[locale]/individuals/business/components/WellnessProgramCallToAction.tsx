"use client";
import React from "react";
import { Input, Button, Grid } from "antd";
import { CSSProperties } from "react";
const { useBreakpoint } = Grid;
import { useTranslation } from "react-i18next";
const WellnessProgramCallToAction = () => {
  const { t } = useTranslation();
  const screen = useBreakpoint();

  const style: { [key: string]: CSSProperties } = {
    title: {
      fontFamily: "Helvetica",
      fontSize: screen.sm ? "36px" : "18px",
      fontWeight: 400,
      lineHeight: "30px",
      color: "#000000",
      padding: "0 1rem",
    },
    text: {
      fontFamily: "Helvetica",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.01em",
      textAlign: "center",
      color: "#5E596D",
      maxWidth: "646.06px",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: screen.sm ? "center" : "start",
        gap: "2rem",
        padding: "4rem 2rem",
      }}
    >
      <p style={style.title}>{t("workplacewellness.contactForm.headline")}</p>
      <p style={style.text}>{t("workplacewellness.contactForm.description")}</p>
      <div style={{ width: screen.sm ? "60%" : "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: screen.sm ? "row" : "column",
            gap: "2rem",
          }}
        >
          <div style={{ width: screen.sm ? "50%" : "100%" }}>
            <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
              {t("workplacewellness.contactForm.fields.firstName")}
            </p>
            <Input
              style={{
                height: "50px",
                border: "solid",
                borderColor: "rgba(94, 89, 109, .5)",
                borderWidth: "2px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ width: screen.sm ? "50%" : "100%" }}>
            <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
              {t("workplacewellness.contactForm.fields.lastName")}
            </p>
            <Input
              style={{
                height: "50px",
                border: "solid",
                borderColor: "rgba(94, 89, 109, .5)",
                borderWidth: "2px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: screen.sm ? "row" : "column",
            gap: "2rem",
            padding: "2rem 0",
          }}
        >
          <div style={{ width: screen.sm ? "50%" : "100%" }}>
            <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
              {t("workplacewellness.contactForm.fields.email")}
            </p>
            <Input
              style={{
                height: "50px",
                border: "solid",
                borderColor: "rgba(94, 89, 109, .5)",
                borderWidth: "2px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ width: screen.sm ? "50%" : "100%" }}>
            <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
              {t("workplacewellness.contactForm.fields.phone")}
            </p>
            <Input
              style={{
                height: "50px",
                border: "solid",
                borderColor: "rgba(94, 89, 109, .5)",
                borderWidth: "2px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "#0D99FF",
          color: "white",
          borderRadius: "0px",
          border: "white",
          padding: "1.5rem 2rem",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontSize: "16px",
          }}
        >
          {t("workplacewellness.contactForm.submit")}
        </span>
      </Button>
    </div>
  );
};

export default WellnessProgramCallToAction;
