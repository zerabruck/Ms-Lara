"use client";

import Image from "next/image";
import { Button, Grid } from "antd";
import styled from "styled-components";
import H1 from "@/components/ui/typography/H1";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  // grid-gap: 24px;
  min-height: 201px;
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );

  @media screen and (max-width: 600px) {
    grid-gap: 10px;
  }
`;

const TextContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 14;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    grid-column-start: 3;
    grid-column-end: 23;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  grid-column: span 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    // grid-column: span 12;
    grid-column-start: 1;
    grid-column-end: 25;
  }
`;

const StyledButton = styled(Button)`
  min-width: 231px;
  height: 48px;
  padding: 12px 30px;
  gap: 10px;
  border: 1px solid #0d99ff;
  background: transparent;
  border-radius: 0px;
`;

const ButtonText = styled.div`
  font-family: "Helvetica";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const StyledText = styled(H1)`
  @media screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`;

const HiddenSectionContainer = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;

    grid-column-start: 3;
    grid-column-end: 23;
  }
`;

const ImageContainer = styled.div`
  height: 167px;
  position: relative;
`;

const { useBreakpoint } = Grid;
const NeedPainReliefNow = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HiddenSectionContainer>
        <ImageContainer>
          <Image
            src={"/Rectangle 523 (1).png"}
            layout="fill"
            objectFit="contain"
            alt="veteran image"
          />
        </ImageContainer>
      </HiddenSectionContainer>
      <TextContainer>
        <StyledText>{t("landingPage.needReliefSection.header")}</StyledText>
      </TextContainer>

      <ButtonContainer>
        <StyledButton>
          <ButtonText>
            {t("landingPage.needReliefSection.buttonText")}
          </ButtonText>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default NeedPainReliefNow;
