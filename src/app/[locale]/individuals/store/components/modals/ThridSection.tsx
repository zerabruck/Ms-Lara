"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  //   @media screen and (max-width: 600px) {
  //     grid-gap: 48px;
  //   }
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
    margin-bottom: 48px;
  }
`;

const RightSection = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 32px;

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
  gap: 12px;
  alignitems: left;
`;
export default function ThridSection({
  leftSectionHeader,
  leftSectionContent,

  featureSection,
  whisperQuietSection,
  recoverySection,
}: {
  leftSectionHeader: string;
  leftSectionContent: string;

  featureSection?: string;
  whisperQuietSection?: string;
  recoverySection?: string;
}) {
  return (
    <Container>
      <LeftSection>
        <Header>{leftSectionHeader}</Header>
        <Text>{leftSectionContent}</Text>
      </LeftSection>
      <RightSection>
        {featureSection && (
          <TextContainer>
            <Header>Features</Header>
            <Text>{featureSection}</Text>
          </TextContainer>
        )}
        {whisperQuietSection && (
          <TextContainer>
            <Header>Whisper quiet</Header>
            <Text>{whisperQuietSection}</Text>
          </TextContainer>
        )}
        {recoverySection && (
          <TextContainer>
            <Header>Recovery on demand</Header>
            <Text>{recoverySection}</Text>
          </TextContainer>
        )}
      </RightSection>
    </Container>
  );
}
