"use client";

import H2 from "@/components/ui/typography/H2";
import H6 from "@/components/ui/typography/H6";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  min-height: 130px;
`;

const Container = styled.div`
  grid-column-start: 3;
  grid-column-end: 23;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  margin-top: -8%;
  grid-gap: 40px;

  @media screen and (max-width: 600px) {
    padding-bottom: 10%;
  }
`;
interface ICardData {
  title: string;
  body: string;
  bgColor?: string;
}

const StyledCardContainer = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 196px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding-left: 10%;

  justify-content: center;
  background-color: ${(props) => props.backgroundColor};

  border-radius: 2%;
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-column: span 3;
  }
`;

const CardTextContainer = styled.div`
  display: flex;
  // padding-left: 10%;
  padding-right: 5%;
`;

const CenterAlignedInnerText = styled(H6)`
  text-align: left;
  color: #5e596d;
`;

const Card = ({ title, body, bgColor = "white" }: ICardData) => (
  <StyledCardContainer backgroundColor={bgColor}>
    <H2>{title}</H2>

    <CardTextContainer>
      <CenterAlignedInnerText>{body}</CenterAlignedInnerText>
    </CardTextContainer>
  </StyledCardContainer>
);

export default function CardsContainer() {
  const { t } = useTranslation();
  const CardData: ICardData[] = [
    {
      title: t("landingPage.focalPoint.cards.first.title"),
      body: t("landingPage.focalPoint.cards.first.body"),
      bgColor: "#F2F2F2",
    },
    {
      title: t("landingPage.focalPoint.cards.second.title"),
      body: t("landingPage.focalPoint.cards.second.body"),
    },
    {
      title: t("landingPage.focalPoint.cards.third.title"),
      body: t("landingPage.focalPoint.cards.third.body"),
    },
  ];

  return (
    <Wrapper>
      <Container>
        {CardData.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </Container>
    </Wrapper>
  );
}
