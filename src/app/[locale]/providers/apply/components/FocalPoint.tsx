"use client";

import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  height: 506px;
  width: 100%;
  background-image: url("/providers/Rectangle 85 (3).png");
  //   background-image: url("/providers/Rectangle 317 (1).png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function FocalPoint() {
  const { t } = useTranslation();
  return (
    <Container>
      <H1 color="white">{t("apply.focalPoint.header")}</H1>
    </Container>
  );
}
