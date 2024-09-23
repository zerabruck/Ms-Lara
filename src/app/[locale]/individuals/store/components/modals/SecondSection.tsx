"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media screen and (max-width: 600px) {
    grid-gap: 16px;
  }
`;

const LeftSection = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

const RightSection = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #2a2a2a;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export default function SecondSection({
  leftSectionHeader,
  leftSectionContent,
  rightSectionHeader,
  rightSectionContent,
  rightSectionComp,
  featureSection,
}: {
  leftSectionHeader: string;
  leftSectionContent: string;
  rightSectionHeader: string;
  rightSectionContent: Array<string>;
  rightSectionComp?: Array<React.ReactNode>;
  featureSection?: string;
}) {
  return (
    <Container>
      <LeftSection>
        <Header>{leftSectionHeader}</Header>
        <Text>{leftSectionContent}</Text>
      </LeftSection>
      <RightSection>
        <Header>{rightSectionHeader}</Header>
        <ListContainer>
          {rightSectionContent &&
            rightSectionContent.map((item, key) => (
              <TextContainer key={key}>{item}</TextContainer>
            ))}
        </ListContainer>
      </RightSection>
    </Container>
  );
}
