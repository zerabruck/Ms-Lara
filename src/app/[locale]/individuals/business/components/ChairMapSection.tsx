"use client";
import Image from "next/image";
import { Grid } from "antd";
import { useTranslation } from "react-i18next";
const { useBreakpoint } = Grid;
const ChairMapSection = () => {
  const { t } = useTranslation();
  const screen = useBreakpoint();

  const cities = t("bookAChair.availability.cities", { returnObjects: true }) as string[];
  const flexDirection = screen.lg ? "row" : "column";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        margin: screen.sm ? "3rem 0" : "1rem 0",
        padding: screen.lg ? "2rem 7rem" : "2rem 2rem",
        paddingRight: "1rem",
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      <div style={{ width: screen.lg ? "30%" : "100%" }}>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "left",
            color: "#343030",
            paddingTop: "1rem",
          }}
        >
          {t("bookAChair.availability.title")}
        </p>

        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "25px",
            fontWeight: 400,
            lineHeight: "32.37px",
            color: "#000000",
            padding: "1rem 0",
          }}
        >
          {t("bookAChair.availability.subtitle")}
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          <div>
            {cities.slice(0, cities.length / 2 ).map((city, index) => (
              <p
                key={index}
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  letterSpacing: "0.01em",
                  textAlign: "justify",
                  color: "#5E596D",
                  whiteSpace: "pre-line",
                  marginBottom: "1rem",
                }}
              >
                {city}
              </p>
            ))}
          </div>
          <div>
            {cities.slice(cities.length / 2 ).map((city, index) => (
              <p
                key={index}
                style={{
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  letterSpacing: "0.01em",
                  textAlign: "justify",
                  color: "#5E596D",
                  whiteSpace: "pre-line",
                  marginBottom: "1rem",
                }}
              >
                {city}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: screen.lg ? "50%" : "100%",
          height: screen.sm ? "329px" : "170px",
        }}
      >
        <Image
          fill
          objectFit="cover"
          src="/business-images/chairmap-image.png"
          alt="Description"
        />
      </div>
    </div>
  );
};

export default ChairMapSection;
