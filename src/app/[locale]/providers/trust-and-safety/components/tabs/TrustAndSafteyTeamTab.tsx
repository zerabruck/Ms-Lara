"use client";

import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";
import TabsWrapper from "./TabWrapper";
import { useContext } from "react";
import { TabContext } from "../TabContextProvider";
import { TABNAMES } from "../TabBar";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default function TrustAndSafteyTeamTab() {
  const props = useContext<any>(TabContext);
  const { t } = useTranslation();
  const baseNameSpace = "trustAndSafety.tabs.trustAndSafetyTeam.paragraphs";

  if (TABNAMES.TRUSTANDSAFTEY == props.currentTab)
    return (
      <TabsWrapper>
        <Container>
          <H6>{t(`${baseNameSpace}.firstParagraph`)}</H6>
          <H6>{t(`${baseNameSpace}.secondParagraph`)}</H6>
        </Container>
      </TabsWrapper>
    );
  else return <></>;
}
