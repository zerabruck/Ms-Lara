"use client";

import { Button, Col, Flex, Grid } from "antd";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const { useBreakpoint } = Grid;

const Container = styled.div`
  height: 89vh;
  background-image: url("/Rectangle 84.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: 600px) {
    background-image: url("/Rectangle 90.png");
  }
`;

const Header = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;
  text-align: center;
  color: #ffffff;
`;

const BodyText = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #ffffff;
`;

const StyledButton = styled(Button)`
  width: 124px;
  height: 48px;
  padding: 12px 30px;
  gap: 10px;
  background-color: #0d99ff;
  border: 1px solid #0d99ff;
`;

const StyledText = styled.span`
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #ffffff;
`;

const CallToAction = () => {
  const { t } = useTranslation();
  const baseNameSpace = "storePage.callToActionSection";
  return (
    <Container>
      <Header>{t(`${baseNameSpace}.title`)}</Header>

      <BodyText>{t(`${baseNameSpace}.body`)}</BodyText>

      <StyledButton>
        <StyledText>{t(`${baseNameSpace}.buttonText`)}</StyledText>
      </StyledButton>
    </Container>
  );
};
export default CallToAction;
