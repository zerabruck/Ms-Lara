"use client";
import styled from "styled-components";
import { TabContext } from "./TabContextProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledTabButton = styled.div<{ tabName: string; selectedTab: string }>`
  width: 192px;
  height: 58px;
  background-color: ${(props) =>
    props.tabName === props.selectedTab ? "#0D99FF" : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 16px;
  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0px;
    height: 25px;
  }
`;

const ButtonText = styled.span<{ tabName: string; selectedTab: string }>`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: center;
  color: ${(props) =>
    props.tabName === props.selectedTab ? "white" : "#2E3E4B"};

  @media screen and (max-width: 600px) {
    font-size: 7px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.01em;
  }
`;

export enum TABNAMES {
  HEAD = "head",
  CONSUMERS = "consumers",
  PROVIDERS = "providers",
  BUSSINESS = "business",
  TRUSTANDSAFTEY = "trustandsafety",
}

export default function TabBar() {
  const { currentTab, setCurrentTab } = useContext<any>(TabContext);

  const handleTabChange = (tabName: TABNAMES) => {
    setCurrentTab(tabName);
  };

  const { t } = useTranslation();
  return (
    <Container>
      <StyledTabButton
        tabName={TABNAMES.HEAD}
        selectedTab={currentTab}
        onClick={() => handleTabChange(TABNAMES.HEAD)}
      >
        <ButtonText tabName={TABNAMES.HEAD} selectedTab={currentTab}>
          {t("trustAndSafety.tabs.headlines.tabButtonText")}
        </ButtonText>
      </StyledTabButton>
      <StyledTabButton
        tabName={TABNAMES.CONSUMERS}
        selectedTab={currentTab}
        onClick={() => handleTabChange(TABNAMES.CONSUMERS)}
      >
        <ButtonText tabName={TABNAMES.CONSUMERS} selectedTab={currentTab}>
          {t("trustAndSafety.tabs.consumers.tabButtonText")}
        </ButtonText>
      </StyledTabButton>
      <StyledTabButton
        tabName={TABNAMES.PROVIDERS}
        selectedTab={currentTab}
        onClick={() => handleTabChange(TABNAMES.PROVIDERS)}
      >
        <ButtonText tabName={TABNAMES.PROVIDERS} selectedTab={currentTab}>
          {t("trustAndSafety.tabs.providers.tabButtonText")}
        </ButtonText>
      </StyledTabButton>
      <StyledTabButton
        tabName={TABNAMES.BUSSINESS}
        selectedTab={currentTab}
        onClick={() => handleTabChange(TABNAMES.BUSSINESS)}
      >
        <ButtonText tabName={TABNAMES.BUSSINESS} selectedTab={currentTab}>
          {t("trustAndSafety.tabs.businesses.tabButtonText")}
        </ButtonText>
      </StyledTabButton>
      <StyledTabButton
        tabName={TABNAMES.TRUSTANDSAFTEY}
        selectedTab={currentTab}
        onClick={() => handleTabChange(TABNAMES.TRUSTANDSAFTEY)}
      >
        <ButtonText tabName={TABNAMES.TRUSTANDSAFTEY} selectedTab={currentTab}>
          {t("trustAndSafety.tabs.trustAndSafetyTeam.tabButtonText")}
        </ButtonText>
      </StyledTabButton>
    </Container>
  );
}
