"use client";

import React, { useState } from "react";
import { Collapse } from "antd";
import styled from "styled-components";
import H6 from "@/components/ui/typography/H6";
import { Content } from "../types/types";
const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  border: none;

  .ant-collapse-header {
    background-color: white;
  }
`;

const StyledPanelHeader = styled.div`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 25.9px;
    color: #000000;
  }
`;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MoreButton = styled.div`
  background-color: white;
  border: none;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  cursor: pointer;
  margin-top: 2%;
`;

const LinkText = styled(H6)<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? "#0d99ff" : "black")};
  cursor: pointer;
`;
const Accordion = ({ title, questions }: Content) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const visibleQuestions = isExpanded ? questions : questions.slice(0, 3);

  const handleClick = ({ index }: { index: number }) => {
    setSelectedItem(index);
  };
  return (
    <StyledCollapse defaultActiveKey={["1"]} expandIconPosition={"end"}>
      <Panel header={<StyledPanelHeader>{title}</StyledPanelHeader>} key="1">
        <ListItemContainer>
          {visibleQuestions.map((question, index) => (
            <LinkText
              key={index}
              selected={index === selectedItem}
              onClick={() => handleClick({ index })}
            >
              {question}
            </LinkText>
          ))}
          <MoreButtonContainer>
            {questions.length > 3 && (
              <H6 onClick={handleToggle}>
                {isExpanded ? "Show Less" : "More"}
              </H6>
            )}
          </MoreButtonContainer>
        </ListItemContainer>
      </Panel>
    </StyledCollapse>
  );
};

export default Accordion;
