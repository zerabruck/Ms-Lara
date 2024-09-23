"use client";
import React from "react";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
import { CSSProperties } from "react";
import BookAChairSection from "@/app/[locale]/individuals/business/components/BookAChairSection";
import SideImageCard from "@/app/[locale]/individuals/business/components/SideImageCard";
import ChairMapSection from "@/app/[locale]/individuals/business/components/ChairMapSection";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function Page() {
  const { t } = useTranslation();
  const screen = useBreakpoint();
  const styles: { [key: string]: CSSProperties } = {
    top: {
      position: "relative",
      height: "89vh",
      backgroundImage: `url(/business-images/bookachair-landing-image.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "grid",
      gridTemplateColumns: "repeat(24, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
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
    content: {
      position: "relative",
      zIndex: 2,
    },
    cardContainer: {
      position: "relative",
      marginTop: "-10rem",
      padding: screen.lg ? "0 7rem" : "0 2rem",
      zIndex: 3,
      display: "flex",
      flexWrap: "wrap",
      gap: "4rem",
    },
  };

  const chairEvents = [
    {
      header: t("bookAChair.chairMassageEvent.header"),
      title: t("bookAChair.chairMassageEvent.title"),
      body: t("bookAChair.chairMassageEvent.description"),
      footer: "",
      isreverse: false,
      imageUrl: "/business-images/bookachair-service-one.png",
    },
    {
      header: t("bookAChair.planningEvent.header"),
      title: t("bookAChair.planningEvent.title"),
      body: t("bookAChair.planningEvent.description"),
      footer: "",
      isreverse: true,
      imageUrl: "/business-images/bookachair-service-two.png",
    },
  ];
  return (
    <>
      <div style={styles.top}></div>
      <div style={styles.cardContainer}>
        <BookAChairSection />
      </div>
      <p
        style={{
          ...styles.text,
          fontSize: "20px",
          margin: "1rem auto",
          width: "fit-content",
        }}
      >
        {t("bookAChair.stats")}
      </p>
      <div style={{ padding: screen.sm ? "5rem 7rem" : "5rem 1rem" }}>
        {chairEvents.map((service, index) => (
          <SideImageCard
            key={index}
            header={service.header}
            title={service.title}
            body={service.body}
            footer={service.footer}
            isreverse={service.isreverse}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      <ChairMapSection />
      <div
        style={{
          margin: screen.sm ? "5rem 2rem" : "0rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "Helvetica",
            textAlign: "center",
            fontSize: screen.sm ? "25px" : "20px",
            fontWeight: 400,
            lineHeight: "32.37px",
            color: "#000000",
            padding: screen.sm ? "1rem 0" : "0",
          }}
        >
          {t("bookAChair.corporateProgram.title")}
        </p>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.01em",
            textAlign: "center",
            color: "#414141",
            maxWidth: "847px",
          }}
        >
          {t("bookAChair.corporateProgram.description")}
        </p>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.01em",
            textAlign: "center",
            color: "#414141",
            maxWidth: "847px",
          }}
        >
          {t("bookAChair.corporateProgram.cta")}
        </p>
        <div
          style={{
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.01em",
            textAlign: "center",
            color: "#414141",
            maxWidth: "847px",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <p>{t("bookAChair.corporateProgram.link")}</p>
          <Image
            alt="arrow"
            src="/icons/mdi-arrow.svg"
            width={15}
            height={15}
          />
        </div>
        <div
          style={{
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.01em",
            textAlign: "center",
            color: "#414141",
            maxWidth: "847px",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <p>{t("bookAChair.corporateProgram.contact")}</p>
          <Image
            alt="arrow"
            src="/icons/mail-icon.svg"
            width={15}
            height={15}
          />
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #B7B7B7",
          margin: screen.sm ? "1rem 7rem" : "1rem 1rem",
        }}
      ></div>
    </>
  );
}
