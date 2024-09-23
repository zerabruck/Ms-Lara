"use client";

import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";
import ImageAndTextDisplay from "../ImageAndTextDisplay";
import TabsWrapper from "./TabWrapper";
import { TabContext } from "../TabContextProvider";
import { useContext } from "react";
import { TABNAMES } from "../TabBar";
import { useTranslation } from "react-i18next";
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

export default function ForBussinessTab() {
  const props = useContext<any>(TabContext);
  const { t } = useTranslation();
  const baseNameSpace = "trustAndSafety.tabs.businesses.sections";

  if (props.currentTab == TABNAMES.BUSSINESS)
    return (
      <TabsWrapper>
        <Container>
          <TextContainer>
            <H6>
              {t(`${baseNameSpace}.firstSection.paragraphs.firstParagraph`)}
            </H6>
          </TextContainer>
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 315.png"}
            imgHeight={"213"}
            containerHeight={"213"}
            header={t(`${baseNameSpace}.secondSection.title`)}
            body={[
              t(`${baseNameSpace}.secondSection.paragraphs.firstParagraph`),
              t(`${baseNameSpace}.secondSection.paragraphs.secondParagraph`),
            ]}
          />
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 316.png"}
            imgHeight={"184"}
            containerHeight={"184"}
            header={t(`${baseNameSpace}.thirdSection.title`)}
            body={[
              t(`${baseNameSpace}.thirdSection.paragraphs.firstParagraph`),
            ]}
          />
        </Container>
      </TabsWrapper>
    );
  else return <></>;
}
