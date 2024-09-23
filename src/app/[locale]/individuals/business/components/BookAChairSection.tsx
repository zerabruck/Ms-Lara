import React, { useState } from "react";
import { CSSProperties } from "react";
import { Input, Button } from "antd";
import { Grid } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const { useBreakpoint } = Grid;
const BookAChairSection = () => {
  const { t } = useTranslation();
  const screen = useBreakpoint();
  const [isParticipant, setIsParticipant] = useState(true);
  const [isCorporate, setIsCorporate] = useState(true);

  const style: { [key: string]: CSSProperties } = {
    title: {
      fontFamily: "Helvetica",
      fontSize: screen.sm ? "36px" : "20px",
      fontWeight: 400,
      lineHeight: "32.37px",
      color: "#000000",
      padding: "1rem 1rem",
      textAlign: "center",
      width: "fit-content",
      margin: "0 auto",
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
        backgroundColor: "white",
        width: "100%",
        padding: screen.sm ? "1rem 3rem" : "1rem 1rem",
        boxShadow: "0 0px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <p style={style.title}>{t('bookAChair.buildEvent.title')}</p>
      <div
        style={{
          width: "100%",
          borderBottom: "solid 1px #5E596D",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <p
          onClick={() => {
            setIsParticipant(true);
          }}
          style={{
            ...style.text,
            border: "none solid",
            fontSize: screen.sm ? "15px" : "10px",
            padding: screen.sm ? "1rem 3rem" : "1rem 1rem 1rem 0rem",
            borderTop:
              isParticipant && screen.sm ? "solid 1px #0D99FF" : "none",
            borderBottom: isParticipant ? "solid 1px #0D99FF" : "none",
            width: screen.sm ? "" : "50%",
          }}
        >
          {t('bookAChair.buildEvent.tabs.numberOfParticipants')}
        </p>
        <p
          onClick={() => {
            setIsParticipant(false);
          }}
          style={{
            ...style.text,
            width: screen.sm ? "" : "50%",
            border: "none solid",
            fontSize: screen.sm ? "15px" : "10px",
            padding: screen.sm ? "1rem 3rem" : "1rem 1rem 1rem 0rem",
            borderTop:
              !isParticipant && screen.sm ? "solid 1px #0D99FF" : "none",
            borderBottom: !isParticipant ? "solid 1px #0D99FF" : "none",
          }}
        >
          {t('bookAChair.buildEvent.tabs.numberOfTherapists')}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          padding: "1rem 0",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <div style={{ width: screen.sm ? "50%" : "100%", flex: "1 1 200px" }}>
          <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
          {t('bookAChair.buildEvent.fields.participants')}
          </p>
          <Input
            style={{
              height: "53px",
              border: "solid",
              borderColor: "rgba(94, 89, 109, .5)",
              borderWidth: "2px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ width: screen.sm ? "50%" : "100%", flex: "1 1 200px" }}>
          <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
            {t('bookAChair.buildEvent.fields.zipCode')}
          </p>
          <Input
            style={{
              height: "53px",
              border: "solid",
              borderColor: "rgba(94, 89, 109, .5)",
              borderWidth: "2px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ width: screen.sm ? "50%" : "100%", flex: "1 1 200px" }}>
          <p style={{ ...style.text, textAlign: "left", padding: ".5rem 0" }}>
            {t('bookAChair.buildEvent.fields.eventDuration')}
          </p>
          <Input
            style={{
              height: "53px",
              border: "solid",
              borderColor: "rgba(94, 89, 109, .5)",
              borderWidth: "2px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div
          style={{
            border: "solid 2px rgba(94, 89, 109, .5)",
            borderRadius: "5px",
            flex: "1 1 200px",
            width: "20%",
            padding: ".3rem",
            display: "flex",
            height: "53px",
          }}
        >
          <Button
            onClick={() => {
              setIsCorporate(true);
            }}
            style={{
              backgroundColor: isCorporate ? "#0D99FF" : "white",
              borderRadius: "5px",
              border: "white",
              padding: "1.3rem 2rem",
              margin: "0 auto",
              width: "50%",
            }}
          >
            <span
              style={{
                ...style.text,
                color: isCorporate ? "white" : "#5E596D",
                fontSize: "15px",
              }}
            >
              {t('bookAChair.buildEvent.fields.options.corporate')}
            </span>
          </Button>
          <Button
            onClick={() => {
              setIsCorporate(false);
            }}
            style={{
              backgroundColor: !isCorporate ? "#0D99FF" : "white",
              borderRadius: "5px",
              flex: "1 1 200px",
              border: "white",
              padding: "1.3rem 2rem",
              margin: "0 auto",
              width: "50%",
            }}
          >
            <span
              style={{
                ...style.text,
                color: !isCorporate ? "white" : "#5E596D",
                fontSize: "15px",
              }}
            >
              {t('bookAChair.buildEvent.fields.options.personal')}
            </span>
          </Button>
        </div>
        <Button
          style={{
            backgroundColor: "#0D99FF",
            borderRadius: "5px",
            border: "white",
            padding: "1.5rem 4rem",
            margin: "0 auto",
            height: "53px",
          }}
        >
          <span
            style={{
              ...style.text,
              color: "white",
              fontSize: "15px",
            }}
          >
            Book
            {t('bookAChair.buildEvent.fields.bookButton')}
          </span>
          <Image
            alt="arrow"
            src="/icons/right-arrow-icon.svg"
            width={15}
            height={15}
          />
        </Button>
      </div>
    </div>
  );
};

export default BookAChairSection;
