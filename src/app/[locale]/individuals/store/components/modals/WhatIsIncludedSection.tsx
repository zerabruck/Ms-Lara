"use client";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  //   margin-top: 5%;

  @media screen and (max-width: 600px) {
    gap: 16px;
  }
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #2a2a2a;
`;

const ListText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #2a2a2a;
`;

const StyledUl = styled.ul`
  position: relative;
  left: 3%;
`;
export default function WhatsIncluded({
  bulletPoints,
}: {
  bulletPoints: Array<string>;
}) {
  return (
    <Container>
      <Header>What’s Included</Header>

      <StyledUl>
        {bulletPoints.map((item, index) => (
          <li key={index}>
            <ListText>{item}</ListText>
          </li>
        ))}
      </StyledUl>
    </Container>
  );
}
