"use client";
import React from "react";
import { Grid } from "antd";
import Image from "next/image";
import styled from "styled-components";

const { useBreakpoint } = Grid;

interface TrustAndSafetySideImageCardProps {
  title: string;
  body: string;
  isreverse?: boolean;
  imageUrl: string;
}

const Container = styled.div<{ isreverse: boolean; flexDirection: string }>`
  display: flex;
  gap: 1rem;
  flex-direction: ${({ isreverse, flexDirection }) =>
    isreverse ? `${flexDirection}-reverse` : flexDirection};
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 3rem 0;
`;

const TextContainer = styled.div<{ screenLg: boolean }>`
  width: ${({ screenLg }) => (screenLg ? "70%" : "100%")};
`;

const Title = styled.p<{ screenMd: boolean }>`
  font-family: Helvetica;
  font-size: ${({ screenMd }) => (screenMd ? "36px" : "20px")};
  font-weight: 400;
  line-height: 32.37px;
  color: #000000;
  padding: ${({ screenMd }) => (screenMd ? "2rem 0" : "1rem 0")};
`;

const Body = styled.p`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: justify;
  color: #000000;
  white-space: pre-line;
`;

const ImageContainer = styled.div<{ screenLg: boolean }>`
  position: relative;
  width: ${({ screenLg }) => (screenLg ? "30%" : "100%")};
  height: 261px;
`;

const TrustAndSafetySideImageCard: React.FC<
  TrustAndSafetySideImageCardProps
> = ({ title, body, isreverse = true, imageUrl }) => {
  const screen = useBreakpoint();
  const flexDirection = screen.lg ? "row" : "column";

  return (
    <Container isreverse={isreverse} flexDirection={flexDirection}>
      <TextContainer screenLg={screen.lg || false}>
        <Title screenMd={screen.md || false}>{title}</Title>
        <Body>{body}</Body>
      </TextContainer>
      <ImageContainer screenLg={screen.lg || false}>
        <Image fill objectFit="cover" src={imageUrl} alt="Description" />
      </ImageContainer>
    </Container>
  );
};

export default TrustAndSafetySideImageCard;
