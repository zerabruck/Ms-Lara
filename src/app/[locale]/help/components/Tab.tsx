"use client";
import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import ForConsumersTab from "./ForConsumersTab";
import TabBody from "./WithContent";
import { fetchContent } from "../api";
import { useTranslation } from "react-i18next";

const { TabPane } = Tabs;

const CustomTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    display: flex;
  }

  .ant-tabs-tab {
    width: 192px;
    height: 58px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    //styleName: H5-font-15;
    font-family: Helvetica;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #2e3e4b;

    @media screen and (max-width: 600px) {
      width: 120px;
      height: 50px;
      border-radius: 7%;
    }
  }

  .ant-tabs-tab-active {
    background-color: #0d99ff !important;
    opacity: 1;
    gap: 0px;
  }

  .ant-tabs-tab .ant-tabs-tab-btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    transition: color 0.3s ease;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: white !important;
  }

  /* Remove the animated line under the selected tab */
  .ant-tabs-ink-bar {
    display: none !important;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  padding-top: 5%;
`;

const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 24;
`;

const Tab = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <CustomTabs defaultActiveKey="1">
          <TabPane tab={t("tabs.consumers.tabButtonText")} key="1">
            <TabBody method={fetchContent} />
          </TabPane>
          <TabPane tab={t("tabs.business.tabButtonText")} key="2">
            <TabBody method={fetchContent} />
          </TabPane>
        </CustomTabs>
      </Container>
    </Wrapper>
  );
};
export default Tab;
