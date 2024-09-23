"use client";
import React from "react";
import { Input, Button, Grid } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const { useBreakpoint } = Grid;

const Container = styled.div<{ screenSm: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.screenSm ? "center" : "center")};
  gap: 2rem;
  padding: 4rem 2rem;
`;

const Title = styled.p<{ screenSm: boolean }>`
  font-family: "Helvetica";
  font-size: ${(props) => (props.screenSm ? "36px" : "20px")};
  text-align: center;
  font-weight: 400;
  line-height: 30px;
  color: #000000;
  padding: 0 1rem;
`;

const Text = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #5e596d;
`;

const InputGroup = styled.div<{ screenSm: boolean }>`
  width: ${(props) => (props.screenSm ? "60%" : "100%")};
`;

const InputField = styled.div<{ screenSm: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.screenSm ? "row" : "column")};
  gap: 2rem;
  padding: 2rem 0;
`;

const InputLabel = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #5e596d;
  text-align: left;
  padding: 0.5rem 0;
`;

const StyledInput = styled(Input)`
  height: 50px;
  border: solid;
  border-color: rgba(94, 89, 109, 0.5);
  border-width: 2px;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  background-color: #0d99ff;
  color: white;
  border-radius: 0px;
  border: white;
  padding: 1.5rem 2rem;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: #5e596d;
`;

const Divider = styled.div<{ screenSm: boolean }>`
  border-bottom: 1px solid #b7b7b7;
  margin: ${(props) => (props.screenSm ? "1rem 7rem" : "1rem 1rem")};
  width: 100%;
`;

const SpaCallToActionSection = () => {
  const { t } = useTranslation();
  const screen = useBreakpoint();
  const screenSm = screen.sm || false;

  return (
    <Container screenSm={screenSm}>
      <Title screenSm={screenSm}>{t("spaStaffing.form.title")}</Title>
      <Text>{t("spaStaffing.form.description")}</Text>
      <InputGroup screenSm={screenSm}>
        <InputField screenSm={screenSm}>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>{t("spaStaffing.form.fields.firstName")}</InputLabel>
            <StyledInput />
          </div>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>{t("spaStaffing.form.fields.email")}</InputLabel>
            <StyledInput />
          </div>
        </InputField>
        <InputField screenSm={screenSm}>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>{t("spaStaffing.form.fields.phone")}</InputLabel>
            <StyledInput />
          </div>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>{t("spaStaffing.form.fields.spaName")}</InputLabel>
            <StyledInput />
          </div>
        </InputField>
        <InputField screenSm={screenSm}>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>{t("spaStaffing.form.fields.zipCode")}</InputLabel>
            <StyledInput />
          </div>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>Number of SPA Rooms</InputLabel>
            <StyledInput />
          </div>
        </InputField>
      </InputGroup>
      <StyledButton>
        <span style={{ fontSize: "16px" }}>
          {t("spaStaffing.form.submitButton")}
        </span>
      </StyledButton>
      <Text> {t("spaStaffing.form.confirmation")}</Text>
      <Divider screenSm={screenSm} />
    </Container>
  );
};

export default SpaCallToActionSection;
