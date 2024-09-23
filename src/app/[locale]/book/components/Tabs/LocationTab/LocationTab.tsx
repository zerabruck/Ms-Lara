"use client";
import H1 from "@/components/ui/typography/H1";
import { Input } from "antd";
import styled from "styled-components";
import { useContext, useState } from "react";
import { TabContext } from "@/app/[locale]/book/lib/TabContextProvider";
import { useTranslation } from "react-i18next";
const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
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
  //   width: 487px;
  height: 54px;
  border: 1px solid #858585;
  display: flex;
`;
const StyledTextFormInput = styled(Input)`
  //   width: 487px;
  height: 54px;
  border: 1px solid #858585;
  display: flex;
`;

const FormButton = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background:${(props) =>
    props.selected
      ? "linear-gradient( 270deg,rgba(166, 207, 245, 0.17) 0%,rgba(184, 167, 238, 0.17) 50%,rgba(215, 209, 233, 0.17) 100%"
      : "white"}
  );
  flex-grow:1;
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

const SecondContainer = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "grid" : "none")};
  gap: 24px;
  grid-template-columns: repeat(24, 1fr);

  @media screen and (max-width: 600px) {
    gap: 0px;
  }
`;

const SecondCardContainer = styled.div`
  grid-column-start: 5;
  grid-column-end: 19;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 25;
  }
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

export default function LocationTab() {
  const { handleTabChange } = useContext(TabContext);
  const [massageTabel, setMassageTabel] = useState("No Table");
  const [stairs, setStairs] = useState("No");
  const { t } = useTranslation();
  const baseNameSpace = "tabs.locationTab";
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-2 mb-10">
        <H1>{t(`${baseNameSpace}.header`)}</H1>
        <Text>{t(`${baseNameSpace}.subText`)}</Text>
        <Text>{t(`${baseNameSpace}.cantFindAddress`)}</Text>
      </div>
      <SecondContainer show={true}>
        <SecondCardContainer>
          <FormContainer>
            <FormFieldContainer>
              <FormLabelFontStyle>
                {t(`${baseNameSpace}.form.formFields.address.label`)}
              </FormLabelFontStyle>
              <StyledTextFormInput />
            </FormFieldContainer>
            <FormFieldContainer>
              <FormLabelFontStyle>
                {t(`${baseNameSpace}.form.formFields.unit.label`)}
              </FormLabelFontStyle>
              <StyledTextFormInput />
            </FormFieldContainer>

            <FormFieldContainer>
              <FormLabelFontStyle>
                {t(`${baseNameSpace}.form.formFields.tabel.label`)}
              </FormLabelFontStyle>
              <FormInput>
                <FormButton
                  selected={massageTabel == "No Table"}
                  onClick={() => setMassageTabel("No Table")}
                >
                  <FormButtonText selected={massageTabel == "No Table"}>
                    {t(`${baseNameSpace}.form.formFields.tabel.options.first`)}
                  </FormButtonText>
                </FormButton>
                <FormButton
                  selected={massageTabel == "1 Table"}
                  onClick={() => setMassageTabel("1 Table")}
                >
                  <FormButtonText selected={massageTabel == "1 Table"}>
                    {t(`${baseNameSpace}.form.formFields.tabel.options.second`)}
                  </FormButtonText>
                </FormButton>
                <FormButton
                  selected={massageTabel == "2 Table"}
                  onClick={() => setMassageTabel("2 Table")}
                >
                  <FormButtonText selected={massageTabel == "2 Table"}>
                    {t(`${baseNameSpace}.form.formFields.tabel.options.third`)}
                  </FormButtonText>
                </FormButton>
              </FormInput>
            </FormFieldContainer>

            <FormFieldContainer>
              <FormLabelFontStyle>
                {t(`${baseNameSpace}.form.formFields.stairs.label`)}
              </FormLabelFontStyle>
              <FormInput>
                <FormButton selected={stairs == "No"}>
                  <FormButtonText
                    selected={stairs == "No"}
                    onClick={() => setStairs("No")}
                  >
                    {t(`${baseNameSpace}.form.formFields.stairs.options.first`)}
                  </FormButtonText>
                </FormButton>
                <FormButton
                  selected={stairs == "1 Flight"}
                  onClick={() => setStairs("1 Flight")}
                >
                  <FormButtonText selected={stairs == "1 Flight"}>
                    {t(
                      `${baseNameSpace}.form.formFields.stairs.options.second`
                    )}
                  </FormButtonText>
                </FormButton>
                <FormButton
                  selected={stairs == "2+ Flight"}
                  onClick={() => setStairs("2+ Flight")}
                >
                  <FormButtonText selected={stairs == "2+ Flight"}>
                    {t(`${baseNameSpace}.form.formFields.stairs.options.third`)}
                  </FormButtonText>
                </FormButton>
              </FormInput>
            </FormFieldContainer>
          </FormContainer>
        </SecondCardContainer>
      </SecondContainer>
      <div className="flex items-center justify-center mt-20 flex-col gap-10">
        <Text> {t(`${baseNameSpace}.form.formFields.parking.label`)}</Text>
        <ContinueButton onClick={() => handleTabChange("3")}>
          {t(`${baseNameSpace}.form.finishTab`)}
        </ContinueButton>
      </div>
    </div>
  );
}
