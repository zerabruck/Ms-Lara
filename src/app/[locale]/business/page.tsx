"use client";
import React from "react";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
import BusinessWellnessLandingSection from "../individuals/business/components/BusinessWellnessLandingSection";
import BusinessServiceCard from "../individuals/business/components/BusinessServiceCard";
import SideImageCard from "../individuals/business/components/SideImageCard";
import { CSSProperties } from "react";
import PatientsTreatedSection from "../individuals/business/components/PatientsTreatedSection";
import WellnessProgramCallToAction from "../individuals/business/components/WellnessProgramCallToAction";
import PartnersSection from "../individuals/business/components/PartnersSection";
import { useTranslation } from "react-i18next";
export default function Page() {
  const { t } = useTranslation();
  const screen = useBreakpoint();
  const styles: { [key: string]: CSSProperties } = {
    top: {
      position: "relative",
      height: "89vh",
      backgroundImage: `url(/businessLandingImage.jpeg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "grid",
      gridTemplateColumns: "repeat(24, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
    },
    overlay: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    content: {
      position: "relative",
      zIndex: 2,
    },
    cardContainer: {
      position: "relative",
      marginTop: "-5rem",
      padding: screen.sm ? "0 7rem" : "0 2rem",
      zIndex: 3,
      display: "flex",
      flexWrap: "wrap",
      gap: "4rem",
    },
  };
  const businessServicesData = [
    {
      title: t("workplacewellness.services.1"),
      iconUrl: "/icons/chair-message-icon.svg",
    },
    {
      title: t("workplacewellness.services.2"),
      iconUrl: "/icons/badge-icon.svg",
    },
    {
      title: t("workplacewellness.services.3"),
      iconUrl: "/icons/phone-icon.svg",
    },
    {
      title: t("workplacewellness.services.4"),
      iconUrl: "/icons/user-icon.svg",
    },
  ];
  const firstSideImageServiceData = [
    {
      header: t("workplacewellness.onSiteChairMassage"),
      title: t("workplacewellness.buildABetterOffice.title"),
      body: t("workplacewellness.buildABetterOffice.body"),
      footer: t("workplacewellness.buildABetterOffice.footer"),
      isreverse: false,
      imageUrl: "/business-images/business-side-first-image.png",
    },
    {
      header: t("workplacewellness.onSiteChairMassage"),
      title: t("workplacewellness.wellnessAtHome.title"),
      body: t("workplacewellness.wellnessAtHome.body"),
      footer: t("workplacewellness.wellnessAtHome.footer"),
      isreverse: true,
      imageUrl: "/business-images/business-side-second-image.png",
    },
  ];
  const secondSideImageServiceData = [
    {
      header: t("workplacewellness.enterpriseClient.header"),
      title: t("workplacewellness.enterpriseClient.title"),
      body: t("workplacewellness.enterpriseClient.body"),
      footer: t("workplacewellness.enterpriseClient.footer"),
      isreverse: false,
      imageUrl: "/business-images/business-side-third-image.png",
    },
    {
      header: t("workplacewellness.commitmentToSafety.header"),
      title: t("workplacewellness.commitmentToSafety.title"),
      body: t("workplacewellness.commitmentToSafety.body"),
      footer: t("workplacewellness.commitmentToSafety.footer"),
      isreverse: true,
      imageUrl: "/business-images/business-side-fourth-image.png",
    },
  ];
  return (
    <div>
      <div style={styles.top}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <BusinessWellnessLandingSection />
        </div>
      </div>
      <div style={styles.cardContainer}>
        {businessServicesData.map((service, index) => (
          <BusinessServiceCard
            key={index}
            title={service.title}
            iconUrl={service.iconUrl}
            bgColor={
              index === 0
                ? "linear-gradient(270deg, rgba(81, 164, 242, 0.1) 15%, rgba(133, 171, 247, 0.1) 54%, rgba(209, 181, 255, 0.1) 81%)"
                : "white"
            }
          />
        ))}
      </div>
      <div style={{ padding: screen.sm ? "5rem 7rem" : "5rem 1rem" }}>
        {firstSideImageServiceData.map((service, index) => (
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
      <div
        style={{
          width: "100%",
          padding: "2rem 0",
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p
          style={{
            maxWidth: "800px",
            textAlign: "center",
            color: "#5E596D",
            fontWeight: 500,
            lineHeight: "22px",
            fontSize: "15px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {t("workplacewellness.notReady")}
        </p>
      </div>
      <div style={{ padding: screen.sm ? "5rem 7rem" : "1rem 1rem" }}>
        {secondSideImageServiceData.map((service, index) => (
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
      <PatientsTreatedSection />
      <WellnessProgramCallToAction />
      <PartnersSection />
      <div
        style={{
          margin: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
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
          {t("workplacewellness.testimonial.description")}
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
          {t("workplacewellness.testimonial.author")}
        </p>
      </div>
      <div
        style={{
          borderBottom: "1px solid #B7B7B7",
          margin: screen.sm ? "1rem 7rem" : "1rem 1rem",
        }}
      ></div>
    </div>
  );
}
