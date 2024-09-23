"use client";

import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";

const Container = styled.div<{ height: string }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 24px;
  min-height: ${(props) => `${props.height}px`};
`;

const ImageContainer = styled.div<{ imageHeight?: string; imgSrc: string }>`
  grid-column-start: 1;
  grid-column-end: 5;
  background-image: url("${(props) => props.imgSrc}");
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: ${(props) => props.imageHeight || "auto"};

  @media (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
    height: 261px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 5;
  grid-column-end: 13;
  gap: 24px;

  @media (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function ImageAndTextDisplay({
  imgSrc,
  imgHeight,
  containerHeight,
  header,
  body,
}: {
  imgSrc: string;
  imgHeight: string;
  containerHeight: string;
  header: string;
  body: Array<string>;
}) {
  return (
    <Container height={containerHeight}>
      <ImageContainer imgSrc={imgSrc} imageHeight={imgHeight} />
      <TextContainer>
        <Header>{header}</Header>
        <BodyContainer>
          {body && body.map((text, index) => <H6 key={index}>{text}</H6>)}
        </BodyContainer>
      </TextContainer>
    </Container>
  );
}
