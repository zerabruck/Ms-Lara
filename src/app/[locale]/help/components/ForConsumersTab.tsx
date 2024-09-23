"use client";

import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import { Content } from "../types/types";
import { fetchContent } from "../api";
import styled from "styled-components";
import TabBody from "./WithContent";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Item = styled.div`
  flex: 1 1 calc(50% - 16px);
  box-sizing: border-box;
  padding: 16px;
  text-align: center;
`;

export default function ForConsumersTab() {
  return <TabBody method={fetchContent} />;
}
