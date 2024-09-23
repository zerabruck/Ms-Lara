"use client";
import H1 from "@/components/ui/typography/H1";
import H6 from "@/components/ui/typography/H6";
import { Button } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Container = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 600px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const StyledButton = styled.div`
  min-width: 242px;
  min-height: 48px;
  padding: 12px 30px 12px 30px;
  background-color: #0d99ff;
  border: none;
  cursor: pointer;
`;

const StyledButtonText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: white;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const StyledH1 = styled(H1)`
  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.9px;
    text-align: center;
  }
`;

const StyledH6 = styled(H6)`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export default function CallToAction() {
  const { t } = useTranslation();
  return (
    <Container>
      <TextContainer>
        <StyledH1 color="white">
          {t("landing.callToActionSection.title")}
        </StyledH1>
        <StyledH6 color="white">
          {t("landing.callToActionSection.pitch")}
        </StyledH6>
      </TextContainer>
      <StyledButton>
        <StyledButtonText>
          {t("landing.callToActionSection.buttonText")}
        </StyledButtonText>
      </StyledButton>
    </Container>
  );
}
