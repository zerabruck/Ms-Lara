"use client";
import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import MassageTypeCard, { MassgeTypeInfo } from "../MassageTypeCard";
import MassageImage from "../../../../../../../public/book-massage-images/image 7.png";
import AssistedStrechImage from "../../../../../../../public/book-massage-images/image 8.png";
import { useContext, useState } from "react";
import SecondSection from "./SecondContainer";
import { TabContext } from "@/app/[locale]/book/lib/TabContextProvider";
import { useTranslation } from "react-i18next";
import { basename } from "path";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 20px;

  @media screen and (max-width: 600px) {
    gap: 0px;
  }
`;

const FirstContainer = styled.div<{ show: boolean }>`
  grid-column-start: 6;
  grid-column-end: 21;
  display: ${(props) => (props.show ? "flex" : "none")};
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 25;
  }
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const ContinueButton = styled.div`
  width: 224px;
  height: 48px;
  background-color: #0d99ff;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function DetailTab() {
  const { t } = useTranslation();
  const baseNameSpace = "tabs.detailsTab.steps";
  const MassgeType: MassgeTypeInfo[] = [
    {
      imgSrc: MassageImage,
      title: t(`${baseNameSpace}.firstStep.cards.first.title`),
      text: t(`${baseNameSpace}.firstStep.cards.first.text`),
    },
    {
      imgSrc: AssistedStrechImage,
      title: t(`${baseNameSpace}.firstStep.cards.second.title`),
      text: t(`${baseNameSpace}.firstStep.cards.second.text`),
    },
  ];

  const [currentSection, setCurrentSection] = useState(1);

  const { handleTabChange } = useContext(TabContext);
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-2 mb-10">
        <H1>{t(`${baseNameSpace}.firstStep.header`)}</H1>
        <Text>{t(`${baseNameSpace}.firstStep.subText`)}</Text>
      </div>
      <Wrapper>
        <FirstContainer show={currentSection == 1}>
          {MassgeType.map((item, index) => (
            <MassageTypeCard {...item} key={index} />
          ))}
        </FirstContainer>
        <SecondSection currentSection={currentSection} />
      </Wrapper>
      <div className="flex items-center justify-center mt-20">
        <ContinueButton
          onClick={() => {
            if (currentSection == 1) {
              setCurrentSection((state) => state + 1);
            } else {
              handleTabChange("2");
            }
          }}
        >
          {t(`${baseNameSpace}.firstStep.buttonText`)}
        </ContinueButton>
      </div>
    </div>
  );
}
