"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 395px;
  background: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );
  display: grid;

  grid-template-columns: repeat(24, 1fr);

  @media screen and (max-width: 600px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
`;

const Container = styled.div`
  grid-column-start: 4;
  grid-column-end: 22;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CardWrapper = styled.div`
  width: 348px;
  height: 280.86px;
  border: 1px 0px 0px 0px;
  border: 1px solid #adb2d5;
  padding: 5px;
  background-color: white;
`;

const Card = styled.div<{ imgUrl: string }>`
  background-image: url(${(props) => `'${props.imgUrl}'`});
  display: flex;
  align-items: flex-end;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InnerCard = styled.div`
  width: 330.04px;
  height: 45.67px;
  opacity: 0.7;
  background-color: #f9f4ebb2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerCardContent = styled.span`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: center;
`;
export default function CardsWithImageSection() {
  return (
    <Wrapper>
      <Container>
        <CardWrapper>
          <Card imgUrl="/image 3 (5).png">
            <InnerCard>
              <InnerCardContent>Book a Massage</InnerCardContent>
            </InnerCard>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card imgUrl="/image 3 (6).png">
            <InnerCard>
              <InnerCardContent>Shop the Massage Store</InnerCardContent>
            </InnerCard>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card imgUrl="/image 3 (7).png">
            <InnerCard>
              <InnerCardContent>Workplace Wellness</InnerCardContent>
            </InnerCard>
          </Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}
