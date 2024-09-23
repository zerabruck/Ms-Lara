"use client";

import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";
import ImageAndTextDisplay from "../ImageAndTextDisplay";
import TabsWrapper from "./TabWrapper";
import { useContext } from "react";
import { TabContext } from "../TabContextProvider";
import { TABNAMES } from "../TabBar";
import { Grid } from "antd";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function ForConsumersTab() {
  const props = useContext<any>(TabContext);
  const screen = useBreakpoint();
  const { t } = useTranslation();
  const baseNameSpace = "trustAndSafety.tabs.consumers.sections";

  if (props.currentTab == TABNAMES.CONSUMERS)
    return (
      <TabsWrapper>
        <Container>
          <TextContainer>
            <H6>
              {t(`${baseNameSpace}.firstSection.paragraphs.firstParagraph`)}
            </H6>
          </TextContainer>
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 310.png"}
            imgHeight={"261"}
            containerHeight={"261"}
            header={t(`${baseNameSpace}.secondSection.title`)}
            body={[
              t(`${baseNameSpace}.secondSection.paragraphs.firstParagraph`),
              t(`${baseNameSpace}.secondSection.paragraphs.secondParagraph`),
            ]}
          />
          <ImageAndTextDisplay
            imgSrc={screen.lg ? "/Rectangle 311.png" : "/Rectangle 311 (1).png"}
            imgHeight={"184"}
            containerHeight={"184"}
            header={t(`${baseNameSpace}.thirdSection.title`)}
            body={[
              t(`${baseNameSpace}.thirdSection.paragraphs.firstParagraph`),
              t(`${baseNameSpace}.thirdSection.paragraphs.secondParagraph`),
            ]}
          />
        </Container>
      </TabsWrapper>
    );
  else return <></>;
}
