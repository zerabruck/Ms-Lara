"use client";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const LeftContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
`;
const RightContainer = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductDetailsSections() {
  return (
    <Container>
      <LeftContainer>
        <Header>Benefits</Header>
        <LeftContentContainer></LeftContentContainer>
      </LeftContainer>
      <RightContainer>
        <Header></Header>
        <RightContentContainer></RightContentContainer>
      </RightContainer>
    </Container>
  );
}
