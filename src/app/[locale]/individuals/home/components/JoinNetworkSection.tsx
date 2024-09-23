"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import H1 from "@/components/ui/typography/H1";
import H5Font15 from "@/components/ui/typography/H5-font-15";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div`
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );
  min-height: 163px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(24, 1fr);

  @media screen and (max-width: 600px) {
    min-height: 317px;
  }
`;

const Container = styled.div`
  grid-column-start: 6;
  grid-column-end: 22;
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    grid-column-start: 2;
    grid-column-end: 24;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 104px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled(H1)`
  @media screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`;

const StyledH5 = styled(H5Font15)`
  @media screen and (max-width: 600px) {
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }
`;
const JoinTheNetworkSection = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image
            src="/Group 642 (1).png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </ImageContainer>
        <TextContainer>
          <StyledHeader>
            {t("landingPage.joinTheNetworkSection.header")}
          </StyledHeader>
          <StyledH5 align="left">
            {t("landingPage.joinTheNetworkSection.body")}
          </StyledH5>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default JoinTheNetworkSection;
