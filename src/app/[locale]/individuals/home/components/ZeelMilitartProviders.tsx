"use client";

import Image from "next/image";
import { Grid } from "antd";
import { StyleObject } from "@/types/cssProps";
import styled from "styled-components";
import H1 from "@/components/ui/typography/H1";
import H6 from "@/components/ui/typography/H6";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  grid-gap: 40px;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    grid-gap: 0px;
    margin-top: 8%;
    margin-bottom: 8%;
  }
`;

const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 600px) {
    grid-column-start: 5;
    grid-column-end: 21;
  }
`;

const InTheNewsText = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.31px;
  text-align: left;
  color: #0d99ff;
`;

const BottomText = styled.span`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #0d99ff;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 538px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledHeader = styled(H1)`
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const MilitaryProviders = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <TextContentContainer>
        <InTheNewsText>
          {t("landingPage.militaryProviders.header")}
        </InTheNewsText>
        <StyledHeader> {t("landingPage.militaryProviders.title")}</StyledHeader>

        <H6 color="#5E596D">{t("landingPage.militaryProviders.body")}</H6>
        <BottomText>{t("landingPage.militaryProviders.footer")}</BottomText>
      </TextContentContainer>

      <ImageContainer>
        <Image
          src="/Rectangle 523 (1).png"
          layout="responsive"
          width={538}
          height={309}
          objectFit="contain"
          alt="Military Providers"
        />
      </ImageContainer>
    </Container>
  );
};

export default MilitaryProviders;
