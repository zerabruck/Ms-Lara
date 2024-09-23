"use client";
import styled from "styled-components";
import SideBar from "./SideBar";
import Body from "./Body";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 40px;
`;

const Container = styled.div`
  border: 1px solid;
  grid-column-start: 2;
  grid-column-end: 12;
  border-image-source: linear-gradient(
    180deg,
    rgba(228, 218, 243, 0.64) 0%,
    rgba(134, 124, 151, 0.3712) 100%
  );
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );
  height: 930px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
    margin-left: 3%;
    margin-right: 3%;
  }
`;

const SideBarContainer = styled.div`
  grid-column: span 3;
  height: 100%;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const BodyContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 12;
  height: 100%;

  @media screen and (max-width: 600px) {
    grid-column-start: 2;
  }
`;

export default function AccountInfo() {
  return (
    <Wrapper>
      <Container>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <BodyContainer>
          <Body />
        </BodyContainer>
      </Container>
    </Wrapper>
  );
}
