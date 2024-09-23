"use client";

import styled from "styled-components";
import Image from "next/image";
import H1 from "@/components/ui/typography/H1";
import H6 from "@/components/ui/typography/H6";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
const Wrapper = styled.div`
  background: linear-gradient(
    79.31deg,
    rgba(208, 179, 255, 0.26) 7.75%,
    rgba(137, 76, 236, 0.26) 57.3%
  );
  min-height: 506px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media screen and (max-width: 600px) {
    padding: 5%;
    height: 384px;
  }
`;

const ImageContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 12;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TextContentContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const TextContentContainerWrapper = styled.div`
  grid-column-start: 8;
  grid-column-end: 12;

  @media screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

const StyledH6 = styled(H6)`
  text-align: justify;
  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

export default function FocalPoint() {
  const screen = useBreakpoint();
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={
            screen.lg
              ? "/add-friends-concept-illustration_114360-5538 1 (2).png"
              : "/add-friends-concept-illustration_114360-5538 1.png"
          }
          width={screen.lg ? 406 : 164}
          height={screen.lg ? 396 : 160}
          alt=""
        />
      </ImageContainer>
      <TextContentContainerWrapper>
        <TextContentContainer>
          <H1>Profile Setting</H1>
          <StyledH6>
            Update your profile settings to personalize your experience and
            ensure your projects are secure. Keep your information up-to-date to
            make the most out of Mrs Lara features.
          </StyledH6>
        </TextContentContainer>
      </TextContentContainerWrapper>
    </Wrapper>
  );
}
