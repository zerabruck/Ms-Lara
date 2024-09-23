"use client";

import { useTranslation } from "react-i18next";
import styled from "styled-components";

const CardItemContainer = styled.div`
  width: 348px;
  height: 323px;
  padding: 8px;
  border: 1px solid #bfbfbf;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const InnerContainer = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f4ebb2;
  opacity: 0.7;
  min-height: 82px;
  width: 100%;
`;

const Title = styled.span`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #2a2a2a;
`;

const Body = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #5e596d;
`;
const Card = ({
  imgSrc,
  body,
  title,
}: {
  imgSrc: string;
  body: string;
  title: string;
}) => {
  return (
    <CardItemContainer>
      <InnerContainer bgImage={imgSrc}>
        <TextContainer>
          <Title>{title}</Title>
          <Body>{body}</Body>
        </TextContainer>
      </InnerContainer>
    </CardItemContainer>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const HeaderContainer = styled.div`
  grid-column: span 12;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 5%;
  padding-right: 5%;

  @media screen and (min-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const CardContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;
  text-align: left;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`;
const ScallableSolutionSection = () => {
  const { t } = useTranslation();
  const data = [
    {
      imgSrc: "/employee.png",
      title: t("landingPage.scallableSolutionSection.cards.first.title"),
      body: t("landingPage.scallableSolutionSection.cards.first.body"),
    },
    {
      imgSrc: "/spa.png",
      title: t("landingPage.scallableSolutionSection.cards.second.title"),
      body: t("landingPage.scallableSolutionSection.cards.second.body"),
    },
    {
      imgSrc: "/healthPlan.png",
      title: t("landingPage.scallableSolutionSection.cards.third.title"),
      body: t("landingPage.scallableSolutionSection.cards.third.body"),
    },
  ];
  return (
    <Container>
      <HeaderContainer>
        <Header>{t("landingPage.scallableSolutionSection.header")}</Header>
      </HeaderContainer>

      <CardContainer>
        {data.map((data, index) => (
          <Card
            body={data.body}
            title={data.title}
            imgSrc={data.imgSrc}
            key={index}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default ScallableSolutionSection;
