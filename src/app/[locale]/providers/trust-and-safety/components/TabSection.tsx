"use client";

import React from "react";
import styled from "styled-components";
// import HeadlinesTab from "./tabs/HeadlinesTab";
import HeadlinesTab from "./tabs/HeadlinesTab";
// import ForConsumersTab from "./tabs/ForConsumersTab";
import ForConsumersTab from "./tabs/ForConsumersTab";
// import ForProvidersTab from "./tabs/ForProvidersTab";
import ForProvidersTab from "./tabs/ForProvidersTab";
// import ForBussinessTab from "./tabs/ForBussinessTab";
import ForBussinessTab from "./tabs/ForBussinessTab";
// import TrustAndSafteyTeamTab from "./tabs/TrustAndSafteyTeamTab";
import TrustAndSafteyTeamTab from "./tabs/TrustAndSafteyTeamTab";
import TabContextProvider from "./TabContextProvider";
import TabBar from "./TabBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 56px;
`;

const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
`;

const TabSection = () => {
  return (
    <Wrapper>
      <TabContextProvider>
        <Container>
          <TabBar />
          <ForBussinessTab />
          <ForConsumersTab />
          <ForProvidersTab />
          <HeadlinesTab />
          <TrustAndSafteyTeamTab />
        </Container>
      </TabContextProvider>
    </Wrapper>
  );
};
export default TabSection;
