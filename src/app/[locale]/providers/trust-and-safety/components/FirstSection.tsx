"use client";

import H1 from "@/components/ui/typography/H1";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("/Rectangle 85 (1).png");
  width: 100%;
  height: 506px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 600px) {
    background-image: url("/Rectangle 90 (1).png");
    height: 387px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 94px;
  background-color: #eae2f799;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FirstSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <TextContainer>
        <H1 color="#242424">{t("trustAndSafety.title")}</H1>
      </TextContainer>
    </Container>
  );
}
