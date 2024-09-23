"use client";
import { StyleObject } from "@/types/cssProps";
import { Grid, Space } from "antd";
import Image from "next/image";
const { useBreakpoint } = Grid;
const JoinTheZeelNetwork = () => {
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
      gridGap: screen.lg ? "24px" : "0px",
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
      gap: "16px",
      gridColumn: screen.lg ? "span 1" : "span 10",
      marginBottom: screen.lg ? 0 : "20px",
    },
    textItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "16px",
      gridColumn: "span 11",
      textAlign: "center",
    },
  };
  return (
    <div style={styles.mainContainer}>
      <div style={styles.item}>
        <div style={styles.imageContainer}>
          <Image
            src="/Group 642 (1).png"
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
          Join the Zeel Provider Network
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
          Bring your expertise to the most trusted network of in-home healthcare
          professionals. Apply Now
        </span>
      </div>
    </div>
  );
};

export default JoinTheZeelNetwork;
