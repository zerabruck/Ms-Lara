"use client";
import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import GradientBackground from "./GradientBackground";
import { Button, Form, Input } from "antd";
import H5 from "@/components/ui/typography/H5";
import H6 from "@/components/ui/typography/H6";
import { useTranslation } from "react-i18next";
const StyledInput = styled(Input)`
  height: 50px;
  border: solid;
  border-color: rgba(94, 89, 109, 0.5);
  border-width: 2px;
  border-radius: 5px;
  background-color: transparent; /* Make the background transparent */
`;

const InputLabel = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #5e596d;
  text-align: left;
  padding: 0.5rem 0;
`;

const StyledButton = styled.div`
  width: 175px;
  height: 48px;
  background-color: #0d99ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const StyledHeader = styled(H1)`
  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.9px;
    text-align: left;
  }
`;
export default function FourthSection() {
  const { t } = useTranslation();
  return (
    <GradientBackground className="sm:grid sm:grid-cols-12 min-h-[435px] sm:gap-10 sm:px-0 px-7 sm:mt-0 sm:pt-0 pt-10 bg-red-500">
      <div className="col-start-2 col-end-6 flex items-center justify-center ">
        <StyledHeader>{t("landing.fourthSection.title")}</StyledHeader>
      </div>
      <div className="col-start-6 col-end-12 py-10">
        <Form>
          <InputItemsContainer>
            <Form.Item className="w-[100%]">
              <InputLabel>
                {t("landing.fourthSection.form.labels.firstName")}
              </InputLabel>
              <StyledInput />
            </Form.Item>
            <Form.Item className="w-[100%]">
              <InputLabel>
                {t("landing.fourthSection.form.labels.lastName")}
              </InputLabel>
              <StyledInput />
            </Form.Item>
          </InputItemsContainer>

          <InputItemsContainer>
            <Form.Item className="w-[100%]">
              <InputLabel>
                {t("landing.fourthSection.form.labels.bussinessEmail")}
              </InputLabel>
              <StyledInput />
            </Form.Item>
            <Form.Item className="w-[100%]">
              <InputLabel>
                {t("landing.fourthSection.form.labels.phoneNumber")}
              </InputLabel>
              <StyledInput />
            </Form.Item>
          </InputItemsContainer>
          <InputItemsContainer>
            <Form.Item className="w-[100%]">
              <InputLabel>
                {t("landing.fourthSection.form.labels.areaOfPractice")}
              </InputLabel>
              <StyledInput />
            </Form.Item>
            <div className="w-[100%]  flex gap-3">
              <Form.Item className="w-[50%]">
                <InputLabel>
                  {t("landing.fourthSection.form.labels.state")}
                </InputLabel>
                <StyledInput />
              </Form.Item>
              <Form.Item className="w-[50%]">
                <InputLabel>
                  {t("landing.fourthSection.form.labels.zipCode")}
                </InputLabel>
                <StyledInput />
              </Form.Item>
            </div>
          </InputItemsContainer>

          <StyledButton>
            <H6 color="#FFFFFF">
              {t("landing.fourthSection.form.buttonText")}
            </H6>
          </StyledButton>
        </Form>
      </div>
    </GradientBackground>
  );
}
