"use client";

import React from "react";
import { Button, Input, Form, Typography, Flex, Grid } from "antd";
import { CSSProperties } from "react";
import styled from "styled-components";
import H1 from "@/components/ui/typography/H1";
import H6 from "@/components/ui/typography/H6";
import { useTranslation } from "react-i18next";

const { Title, Link } = Typography;

const { useBreakpoint } = Grid;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89vh;
  background-image: url("/men_massge_pic.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 600px) {
    --padding: 10%;

    padding-left: var(--padding);
    padding-right: var(--padding);
  }
`;

const TextCenterAlignH1 = styled(H1)`
  text-align: center;
  color: #ffffff;
`;

const SubTitleStyle = styled.span`
  font-family: Helvetica;
  font-size: 10px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #ffffff;
  text-decoration: underline;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
  width: 100%;
`;

const StyledTextInputPlaceholder = styled(Input)`
  font-family: Helvetica;
  color: #858585;
`;

const StyledForm = styled(Form)`
  width: 413px;
  min-height: 423px;
  padding: 20px;
  border-radius: 5px 0 0 0;
  background: linear-gradient(
    180deg,
    rgba(228, 218, 243, 0.64) 0%,
    rgba(134, 124, 151, 0.3712) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #0d99ff;
  border: none;
`;

const ButtonContainer = styled(Form.Item)`
  margin-bottom: 16px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const FormFieldRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const SignupForm = () => {
  const screen = useBreakpoint();

  const { t } = useTranslation();
  const subTitleStyle: CSSProperties = {
    fontFamily: "Helvetica",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0.01em",
    textAlign: "center",
    color: "#FFFFFF",
    textDecoration: "underline",
  };

  return (
    <Container>
      <StyledForm layout="vertical">
        <Flex
          vertical
          style={{
            marginBottom: "12px",
            gap: "4px",
          }}
        >
          {screen.lg ? (
            <TextCenterAlignH1>
              {t("signup.largeScreenTitle")}
            </TextCenterAlignH1>
          ) : (
            <TextCenterAlignH1>
              {t("signup.smallScreenTitle")}
            </TextCenterAlignH1>
          )}

          <div style={subTitleStyle}>
            <Link href="/auth" style={subTitleStyle}>
              {t("signup.alreadyHaveAnAccount")}
            </Link>
          </div>
        </Flex>

        <StyledFormItem name="email">
          <StyledTextInputPlaceholder
            placeholder={t("signup.formFields.email.inputPlaceholder")}
          />
        </StyledFormItem>
        <FormFieldRow>
          <StyledFormItem name="password">
            <StyledTextInputPlaceholder
              placeholder={t("signup.formFields.password.inputPlaceholder")}
            />
          </StyledFormItem>
          <StyledFormItem name="confirmPassword">
            <StyledTextInputPlaceholder
              placeholder={t(
                "signup.formFields.confirmPassword.inputPlaceholder"
              )}
            />
          </StyledFormItem>
        </FormFieldRow>
        <FormFieldRow>
          <StyledFormItem name="zipCode">
            <StyledTextInputPlaceholder
              placeholder={t("signup.formFields.zipCode.inputPlaceholder")}
            />
          </StyledFormItem>
          <StyledFormItem name="promoCode">
            <StyledTextInputPlaceholder
              placeholder={t("signup.formFields.promoCode.inputPlaceholder")}
            />
          </StyledFormItem>
        </FormFieldRow>

        <ButtonContainer>
          <StyledButton type="primary" htmlType="submit">
            {t("signup.buttonText")}
          </StyledButton>
        </ButtonContainer>

        <SubTitleStyle>{t("signup.disclaimer")}</SubTitleStyle>
      </StyledForm>
    </Container>
  );
};

export default SignupForm;
