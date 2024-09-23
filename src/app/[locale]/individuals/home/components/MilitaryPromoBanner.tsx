"use client";
import { StyleObject } from "@/types/cssProps";
import { Grid, Space } from "antd";
import Image from "next/image";
const { useBreakpoint } = Grid;
const MilitartPromoBanner = () => {
  const screen = useBreakpoint();
  const styles: StyleObject = {
    mainContainer: {
      paddingLeft: screen.lg ? "20%" : "10%",
      paddingRight: screen.lg ? "20%" : "10%",
      paddingTop: screen.lg ? "0px" : "10%",
      paddingBottom: screen.lg ? "0px" : "10%",
      display: "grid",
      gridTemplateColumns: screen.lg ? "repeat(12,1fr)" : "1fr",
      minHeight: "163px",
      background:
        "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
    },
    imageContainer: {
      position: "relative" as "relative",
      width: "104px",
      height: "104px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gridColumn: "span 10",
    },
    itemsContainer: {},

    item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "24px",
      gridColumn: screen.lg ? "span 1" : "span 10",
      marginBottom: screen.lg ? 0 : "20px",
    },
    textItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "24px",
      gridColumn: "span 11",
      textAlign: "center",
    },
  };
  return (
    <div style={styles.mainContainer}>
      <div style={styles.item}>
        <div style={styles.imageContainer}>
          <Image
            src="/blue_carbon_badge.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div style={{ ...styles.textItem }}>
        <span
          style={{
            fontFamily: "Helvetica",
            fontSize: "25px",
            fontWeight: 400,
            lineHeight: "32.37px",
            color: "#000000",
          }}
        >
          Are You a US Military Veteran?
        </span>

        <span
          style={{
            fontFamily: "Helvetica",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "0.01em",
            textAlign: screen.lg ? "left" : "center",
            color: "#000000",
          }}
        >
          Zeel in-home massage therapy is now a fully covered VA benefit—FREE
          for VA members... Find Out More
        </span>
      </div>
    </div>
  );
};

export default MilitartPromoBanner;
