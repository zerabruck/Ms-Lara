"use client";

import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";

import OurBlogsCardsContainer from "./OurBlogsCardsContainer";
import UpcomingBlogs from "./UpcomingBlogSection";
import MediaAndNewsSection from "./MediaAndNews";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 16px;
  padding-top: 10vh;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const OurBlogsContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 18;

  display: flex;
  flex-direction: column;
  gap: 24px;
  minheight: 300px;
`;

const CenteredAlignedHeader = styled(H1)`
  text-align: center;
  color: #242424;
`;

const OurBlogHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const CenterAlignedH1 = styled(H1)`
  text-align: center;
  color: #242424;
`;

const OurBlogsCards = styled.div`
  width: 293.27px;
  minheight: 416px;
  display: flex;
`;

const UpcomingBlogsAndMedia = styled.div`
  grid-column-start: 18;
  grid-column-end: 24;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 600px) {
    gap: 5px;
  }
`;
export default function OurBlogSection() {
  return (
    <Container>
      <OurBlogsContainer>
        <OurBlogHeaderContainer>
          <CenterAlignedH1>Our blogs</CenterAlignedH1>
        </OurBlogHeaderContainer>
        <OurBlogsCardsContainer />
      </OurBlogsContainer>

      <UpcomingBlogsAndMedia>
        <UpcomingBlogs />
        <MediaAndNewsSection />
      </UpcomingBlogsAndMedia>
    </Container>
  );
}
