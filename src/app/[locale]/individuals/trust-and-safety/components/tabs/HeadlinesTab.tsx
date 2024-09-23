"use client";

import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";
import ImageAndTextDisplay from "../ImageAndTextDisplay";
import TabsWrapper from "./TabWrapper";
import { useContext } from "react";
import { TabContext } from "../TabContextProvider";
import { TABNAMES } from "../TabBar";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function HeadlinesTab() {
  const { t } = useTranslation();
  const baseNameSpace = "trustAndSafety.tabs.headlines.sections";
  const props = useContext<any>(TabContext);
  if (props.currentTab == TABNAMES.HEAD)
    return (
      <TabsWrapper>
        <Container>
          <TextContainer>
            <H6>
              {t(`${baseNameSpace}.firstSecond.paragraphs.firstParagraph`)}
            </H6>
            <H6>
              {t(`${baseNameSpace}.firstSecond.paragraphs.secondParagraph`)}
            </H6>
            <H6>
              {t(`${baseNameSpace}.firstSecond.paragraphs.thirdParagraph`)}
            </H6>
          </TextContainer>
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 309.png"}
            imgHeight={"261"}
            containerHeight={"261"}
            header={t(`${baseNameSpace}.secondSecond.title`)}
            body={[
              t(`${baseNameSpace}.secondSecond.paragraphs.firstParagraph`),
              t(`${baseNameSpace}.secondSecond.paragraphs.secondParagraph`),
            ]}
          />
        </Container>
      </TabsWrapper>
    );
  else return <></>;
}
