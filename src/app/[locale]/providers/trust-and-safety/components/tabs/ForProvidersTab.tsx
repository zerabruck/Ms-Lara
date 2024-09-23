"use client";

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
  gap: 32px;
`;
export default function ForProvidersTab() {
  const { t } = useTranslation();
  const baseNameSpace = "trustAndSafety.tabs.providers.sections";

  const props = useContext<any>(TabContext);
  if (props.currentTab == TABNAMES.PROVIDERS)
    return (
      <TabsWrapper>
        <Container>
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 312.png"}
            imgHeight={"213"}
            containerHeight={"213"}
            header={t(`${baseNameSpace}.firstSection.title`)}
            body={[
              t(`${baseNameSpace}.firstSection.paragraphs.firstParagraph`),
            ]}
          />
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 313.png"}
            imgHeight={"128"}
            containerHeight={"128"}
            header={t(`${baseNameSpace}.secondSection.title`)}
            body={[
              t(`${baseNameSpace}.secondSection.paragraphs.firstParagraph`),
            ]}
          />
          <ImageAndTextDisplay
            imgSrc={"/Rectangle 314.png"}
            imgHeight={"128"}
            containerHeight={"128"}
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
