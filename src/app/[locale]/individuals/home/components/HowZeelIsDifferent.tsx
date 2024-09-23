"use client";

import { StyleObject } from "@/types/cssProps";
import { Grid } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const { useBreakpoint } = Grid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  background: linear-gradient(
    270deg,
    rgba(166, 207, 245, 0.17) 0%,
    rgba(184, 167, 238, 0.17) 50%,
    rgba(215, 209, 233, 0.17) 100%
  );
`;

const Container = styled.div`
  grid-column-start: 5;
  grid-column-end: 21;

  @media screen and (max-width: 600px) {
    grid-column-start: 3;
    grid-column-end: 23;
  }
`;

const MainContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 349px;
`;

const TitleContainer = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;
  text-align: left;
  color: black;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Body = styled.div`
  min-height: 189px;
`;

const BodyHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 5px;
`;

const SelectedButton = styled.div`
  grid-column: span 4;
  background-color: #0d99ff;
  height: 56px;
  border-radius: 0px 5px 0px 0px;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.31px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 8px;
    line-height: 10px;
  }
`;

const NormalButton = styled.div`
  grid-column: span 4;
  height: 56px;
  border-radius: 0px 5px 0px 0px;
  font-family: Helvetica;
  font-weight: 400;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  line-height: 23.31px;
  @media screen and (max-width: 600px) {
    font-size: 8px;
    line-height: 10px;
  }
`;

const BodyContentContainer = styled.div`
  min-height: 133px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BodyContentText = styled.span`
  font-family: "Helvetica";
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #3b3b3b;
`;
const HowZeelIsDifferent = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <MainContainer>
          <TitleContainer>
            <Title>{t("landingPage.howZeelIsDifferent.header")}</Title>
          </TitleContainer>

          <Body>
            <BodyHeader>
              <SelectedButton>
                {t("landingPage.howZeelIsDifferent.tabs.buttons.first")}
              </SelectedButton>
              <NormalButton>
                {t("landingPage.howZeelIsDifferent.tabs.buttons.second")}
              </NormalButton>
              <NormalButton>
                {t("landingPage.howZeelIsDifferent.tabs.buttons.third")}
              </NormalButton>
            </BodyHeader>

            <BodyContentContainer>
              <BodyContentText>
                {t(
                  "landingPage.howZeelIsDifferent.tabs.content.paragraphs.first"
                )}
              </BodyContentText>
              <BodyContentText>
                {t(
                  "landingPage.howZeelIsDifferent.tabs.content.paragraphs.second"
                )}
              </BodyContentText>
            </BodyContentContainer>
          </Body>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default HowZeelIsDifferent;
