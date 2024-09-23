"use client";

import Image from "next/image";
import styled, { css } from "styled-components";
import PhoneImage from "../../../../../../public/Group 897 (1).png";
import HomePageBulletPointImage from "../../../../../../public//HomePageBulletPointFirst.png";
import SimpleLineImage from "../../../../../../public/simple-line-icons_calender.png";
import HealthIconImage from "../../../../../../public/healthicons_mobile.png";
import CarbonImage from "../../../../../../public/carbon_map.png";
import H1 from "@/components/ui/typography/H1";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  min-height: 550px;
`;

const Container = styled.div`
  @media screen and (min-width: 1024px) {
    position: relative;
    grid-column-start: 4;
    grid-column-end: 22;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-column-start: 3;
    grid-column-end: 23;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -7%;
  }
`;

const ImageContainer = styled.div`
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: -20%;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 3;
  grid-row-end: 10;
  gap: 16px;
`;

const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  align-items: center;
`;

const ListItemImageContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItemTextContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 13;
`;
const Text = styled.span`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #5e596d;
`;
export default function FastEasyBookingSection() {
  const { t } = useTranslation();
  const textWithIconsList = [
    {
      text: t("landingPage.fastAndEasyBookingSection.listItems.first"),
      imgSrc: HomePageBulletPointImage,
    },
    {
      text: t("landingPage.fastAndEasyBookingSection.listItems.second"),
      imgSrc: SimpleLineImage,
    },
    {
      text: t("landingPage.fastAndEasyBookingSection.listItems.third"),
      imgSrc: HealthIconImage,
    },
    {
      text: t("landingPage.fastAndEasyBookingSection.listItems.fourth"),
      imgSrc: CarbonImage,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <Image src={PhoneImage} alt="" width={460} height={696} />
        </ImageContainer>
        <ListContainer>
          <H1>{t("landingPage.fastAndEasyBookingSection.header")}</H1>
          {textWithIconsList.map((item, key) => (
            <ListItemContainer key={key}>
              <ListItemImageContainer>
                <Image src={item.imgSrc} alt={item.text} />
              </ListItemImageContainer>
              <ListItemTextContainer>
                <Text>{item.text}</Text>
              </ListItemTextContainer>
            </ListItemContainer>
          ))}
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
