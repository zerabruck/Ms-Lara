"use client";
import { CSSProperties } from "react";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
import { useTranslation } from "react-i18next";
const PatientsTreatedSection = () => {
  const { t } = useTranslation();
  const screen = useBreakpoint();
  const style: { [key: string]: CSSProperties } = {
    title: {
      fontFamily: "Helvetica",
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "32.37px",
      color: "#000000",
      padding: "1rem 1rem",
      textAlign:"center",

    },
    body: {
      fontFamily: "Helvetica",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.01em",
      textAlign: "center",
      color: "#5E596D",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 0",
        display: "flex",
        flexDirection: screen.lg ? "row" : "column",
        background:
          "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
      }}
    >
      <div
        style={{
          width: screen.lg ? "50%" : "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding:"0 2rem"
        }}
      >
        <p style={style.title}>{t('workplacewellness.results.headline')}</p>
        <p style={{ ...style.body, maxWidth: "254px" }}>
          {t('workplacewellness.results.note')}
        </p>
      </div>
      <div
        style={{
          width: screen.lg ? "30%" : "100%",
          flexDirection: screen.lg ? "row" : "column",
          display: "flex",
          gap: "4rem",
          alignItems: "center",
          padding: "3rem 0",
        }}
      >
        <div>
          <p style={style.title}> {t('workplacewellness.results.percentages.1.percent')}</p>
          <p style={{ ...style.body, maxWidth: "89px" }}>
          {t('workplacewellness.results.percentages.1.description')}
          </p>
        </div>
        <div>
          <p style={style.title}>{t('workplacewellness.results.percentages.2.percent')}</p>
          <p style={{ ...style.body, maxWidth: "89px" }}>
          {t('workplacewellness.results.percentages.2.description')}
          </p>
        </div>
        <div>
          <p style={style.title}>{t('workplacewellness.results.percentages.3.percent')}</p>
          <p style={{ ...style.body, maxWidth: "89px" }}>
          {t('workplacewellness.results.percentages.3.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientsTreatedSection;
