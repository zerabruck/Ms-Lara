"use client";

import styled from "styled-components";
import MassageTypeCard, { MassgeTypeInfo } from "../MassageTypeCard";

import MassageImage from "../../../../../../../public/book-massage-images/image 7.png";
import AssistedStrechImage from "../../../../../../../public/book-massage-images/image 8.png";
import PrenataMassageImage from "../../../../../../../public/book-massage-images/image 10.png";
import StressReliefImage from "../../../../../../../public/book-massage-images/fluent_desk-16-filled.png";
import PressureImage from "../../../../../../../public/book-massage-images/f7_hand-raised-fill.png";
import Image from "next/image";
import H5Font15 from "@/components/ui/typography/H5-font-15";
import { Modal } from "antd";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const SecondContainer = styled.div<{ show: boolean }>`
  grid-column-start: 1;
  grid-column-end: 24;
  display: ${(props) => (props.show ? "grid" : "none")};
  gap: 24px;
  grid-template-columns: repeat(24, 1fr);

  @media screen and (max-width: 600px) {
    gap: 0px;
    grid-column-start: 1;
    grid-column-end: 25;
  }
`;

const SecondCardContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 22;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-column-start: 1;
    grid-column-end: 25;
    margin-top: 24px;
  }
`;

const TextAndIconContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const FormContainer = styled.div`
  grid-column-start: 6;
  grid-column-end: 22;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-column-start: 1;
    grid-column-end: 25;
  }
`;

const FormLabelFontStyle = styled.span`
  font-family: Helvetica;
  font-size: 22px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const FormInput = styled.div`
  height: 54px;
  border: 1px solid #858585;
  display: flex;
`;

const FormButton = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(270deg, rgba(166, 207, 245, 0.17) 0%, rgba(184, 167, 238, 0.17) 50%, rgba(215, 209, 233, 0.17) 100%)"
      : "white"};
  flex-grow: 1;
  cursor: pointer;
`;

const FormButtonText = styled.span<{ selected: boolean }>`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${(props) => (props.selected ? "#0D99FF" : "#858585")};
`;

export default function SecondSection({
  currentSection,
}: {
  currentSection: number;
}) {
  const { t } = useTranslation();
  const baseNameSpace = "tabs.detailsTab.steps.secondStep";
  const [peopleSelection, setPeopleSelection] = useState("one");
  const [durationSelection, setDurationSelection] = useState("60m");
  const [genderSelection, setGenderSelection] = useState("male");
  const [massageForSelection, setMassageForSelection] = useState("one");

  const SecondCardData: MassgeTypeInfo[] = [
    {
      imgSrc: MassageImage,
      title: t(`${baseNameSpace}.cards.first.title`),
      text: t(`${baseNameSpace}.cards.first.text`),
      bottomSection: (
        <div className="flex justify-between">
          <TextAndIconContainer>
            <Image src={StressReliefImage} alt="stress" />
            <H5Font15>Medium Pressure</H5Font15>
          </TextAndIconContainer>
          <TextAndIconContainer>
            <Image src={PressureImage} alt="Pressure" />
            <H5Font15>Stress Relief</H5Font15>
          </TextAndIconContainer>
        </div>
      ),
    },
    {
      imgSrc: AssistedStrechImage,
      title: t(`${baseNameSpace}.cards.second.title`),
      text: t(`${baseNameSpace}.cards.second.text`),
      bottomSection: (
        <div className="flex justify-between">
          <TextAndIconContainer>
            <Image src={StressReliefImage} alt="stress" />
            <H5Font15>Therapeutic</H5Font15>
          </TextAndIconContainer>
          <TextAndIconContainer>
            <Image src={PressureImage} alt="Pressure" />
            <H5Font15>Deep Pressure</H5Font15>
          </TextAndIconContainer>
        </div>
      ),
    },
    {
      imgSrc: PrenataMassageImage,
      title: t(`${baseNameSpace}.cards.third.title`),
      text: t(`${baseNameSpace}.cards.third.text`),
      bottomSection: (
        <div className="flex justify-between">
          <TextAndIconContainer>
            <Image src={StressReliefImage} alt="stress" />
            <H5Font15>Comfort</H5Font15>
          </TextAndIconContainer>
          <TextAndIconContainer>
            <Image src={PressureImage} alt="Pressure" />
            <H5Font15>Custom Pressure</H5Font15>
          </TextAndIconContainer>
        </div>
      ),
    },
  ];

  return (
    <SecondContainer show={currentSection == 2}>
      <FormContainer>
        <FormFieldContainer>
          <FormLabelFontStyle>
            {t(`${baseNameSpace}.form.formFields.howManyPeople.label`)}
          </FormLabelFontStyle>
          <FormInput>
            <FormButton
              selected={peopleSelection === "one"}
              onClick={() => setPeopleSelection("one")}
            >
              <FormButtonText selected={peopleSelection === "one"}>
                {t(
                  `${baseNameSpace}.form.formFields.howManyPeople.options.first`
                )}
              </FormButtonText>
            </FormButton>
            <FormButton
              selected={peopleSelection === "multiple"}
              onClick={() => setPeopleSelection("multiple")}
            >
              <FormButtonText selected={peopleSelection === "multiple"}>
                {t(
                  `${baseNameSpace}.form.formFields.howManyPeople.options.second`
                )}
              </FormButtonText>
            </FormButton>
          </FormInput>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabelFontStyle>
            {" "}
            {t(`${baseNameSpace}.form.formFields.duration.label`)}
          </FormLabelFontStyle>
          <FormInput>
            <FormButton
              selected={durationSelection === "60m"}
              onClick={() => setDurationSelection("60m")}
            >
              <FormButtonText selected={durationSelection === "60m"}>
                60m
              </FormButtonText>
            </FormButton>
            <FormButton
              selected={durationSelection === "75m"}
              onClick={() => setDurationSelection("75m")}
            >
              <FormButtonText selected={durationSelection === "75m"}>
                75m
              </FormButtonText>
            </FormButton>
            <FormButton
              selected={durationSelection === "90m"}
              onClick={() => setDurationSelection("90m")}
            >
              <FormButtonText selected={durationSelection === "90m"}>
                90m
              </FormButtonText>
            </FormButton>
          </FormInput>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabelFontStyle>
            {t(`${baseNameSpace}.form.formFields.gender.label`)}
          </FormLabelFontStyle>
          <FormInput>
            <FormButton
              selected={genderSelection === "male"}
              onClick={() => setGenderSelection("male")}
            >
              <FormButtonText selected={genderSelection === "male"}>
                {t(`${baseNameSpace}.form.formFields.gender.options.first`)}
              </FormButtonText>
            </FormButton>
            <FormButton
              selected={genderSelection === "female"}
              onClick={() => setGenderSelection("female")}
            >
              <FormButtonText selected={genderSelection === "female"}>
                {t(`${baseNameSpace}.form.formFields.gender.options.second`)}
              </FormButtonText>
            </FormButton>
            <FormButton
              selected={genderSelection === "either"}
              onClick={() => setGenderSelection("either")}
            >
              <FormButtonText selected={genderSelection === "either"}>
                {t(`${baseNameSpace}.form.formFields.gender.options.third`)}
              </FormButtonText>
            </FormButton>
          </FormInput>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabelFontStyle>
            {t(`${baseNameSpace}.form.formFields.massageFor.label`)}
          </FormLabelFontStyle>
          <FormInput>
            <FormButton
              selected={massageForSelection === "one"}
              onClick={() => setMassageForSelection("one")}
            >
              <FormButtonText selected={massageForSelection === "one"}>
                {t(`${baseNameSpace}.form.formFields.massageFor.options.first`)}
              </FormButtonText>
            </FormButton>
            <FormButton
              selected={massageForSelection === "group"}
              onClick={() => setMassageForSelection("group")}
            >
              <FormButtonText selected={massageForSelection === "group"}>
                {t(`${baseNameSpace}.form.formFields.massageFor.options.first`)}
              </FormButtonText>
            </FormButton>
          </FormInput>
        </FormFieldContainer>
      </FormContainer>

      <SecondCardContainer>
        {SecondCardData.map((massageTypeInfo, index) => (
          <MassageTypeCard key={index} {...massageTypeInfo} />
        ))}
      </SecondCardContainer>
    </SecondContainer>
  );
}
