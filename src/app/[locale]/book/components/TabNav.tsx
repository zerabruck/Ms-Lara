"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import "antd/dist/reset.css";
import DetailTab from "./Tabs/DetailTab/DetailTab";
import LocationTab from "./Tabs/LocationTab/LocationTab";
import TimeTab from "./Tabs/TimeTab/TimeTab";
import PriceTab from "./Tabs/PriceTab/PriceTab";
import SummaryTab from "./Tabs/SummaryTab/SummaryTab";
import { createContext, useContext } from "react";
import { TabContext } from "../lib/TabContextProvider";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  box-shadow: 0px 2px 6px 1px #00000040;
  height: 73px;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TabsContainer = styled.div`
  grid-column-start: 6;
  grid-column-end: 21;

  @media screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-column-end: 24;
    display: none;
  }
`;

const StyledTab = styled(Tabs)`
  .ant-tabs-nav {
    margin: 0;
  }

  .ant-tabs-tab {
    padding: 0;
    width: 138px;
    height: 73px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
    transition: background-color 0.3s ease;
    border-bottom: none; /* Remove bottom border on tab */
  }

  .ant-tabs-tab-btn {
    font-family: Helvetica;
    font-size: 22px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: left;
    color: inherit;
  }

  /* Change the entire tab's background when active */
  .ant-tabs-tab.ant-tabs-tab-active {
    background: linear-gradient(
      270deg,
      rgba(166, 207, 245, 0.17) 0%,
      rgba(184, 167, 238, 0.17) 50%,
      rgba(215, 209, 233, 0.17) 100%
    );
    .ant-tabs-tab-btn {
      color: #0d99ff;
    }
  }

  .ant-tabs-tab:not(.ant-tabs-tab-active) {
    background: none;
  }

  /* Remove the animated bottom bar */
  .ant-tabs-ink-bar {
    display: none !important;
  }
`;

const ContentWrapper = styled.div`
  padding: 16px;
  background-color: #ffffff; /* Background color for the content */
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
`;

export default function TabNav() {
  const { t } = useTranslation();
  const items = [
    { key: "1", label: t("tabs.detailsTab.tabButton") },
    { key: "2", label: t("tabs.locationTab.tabButton") },
    { key: "3", label: t("tabs.timeTab.tabButton") },
    { key: "4", label: t("tabs.paymentTab.tabButton") },
    { key: "5", label: t("tabs.finishTab.tabButton") },
  ];

  const renderContent = () => {
    switch (activeKey) {
      case "1":
        return <DetailTab />;
      case "2":
        return <LocationTab />;
      case "3":
        return <TimeTab />;
      case "4":
        return <PriceTab />;
      case "5":
        return <SummaryTab />;
      default:
        return null;
    }
  };

  const { activeKey, handleTabChange } = useContext(TabContext);
  return (
    <>
      <Wrapper>
        <TabsContainer>
          <StyledTab
            activeKey={activeKey}
            onChange={handleTabChange}
            items={items}
          />
        </TabsContainer>
      </Wrapper>
      <ContentWrapper>{renderContent()}</ContentWrapper>
    </>
  );
}
