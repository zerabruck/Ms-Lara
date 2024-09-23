"use client";

import React from "react";
import { Button, Input, Form, Typography, Checkbox, Flex } from "antd";
import { CSSProperties } from "react";
import styled from "styled-components";
import H1 from "@/components/ui/typography/H1";
import { useTranslation } from "react-i18next";
const { Link } = Typography;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89vh;
  background-image: url("/men_massge_pic.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 0px;
  padding-right: 0px;

  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled(H1)`
  margin-bottom: 16px;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
  width: 100%;
`;

const StyledForm = styled(Form)`
  width: 413px;
  height: 423px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  background: linear-gradient(
    180deg,
    rgba(228, 218, 243, 0.64) 0%,
    rgba(134, 124, 151, 0.3712) 100%
  );
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const StyledLink = styled(Link)`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #ffffff;
  text-decoration: underline;
`;

const SignupForm = () => {
  const { t } = useTranslation();
  const linkStyle: CSSProperties = {
    fontFamily: "Helvetica",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0.01em",
    textAlign: "left",
    color: "#FFFFFF",
    textDecoration: "underline",
  };

  return (
    <Container>
      <StyledForm layout="vertical">
        <Title color="#FFFFFF">{t("signin.title")}</Title>
        <StyledFormItem>
          <Input placeholder={t("signin.formFields.email.inputPlaceholder")} />
        </StyledFormItem>
        <StyledFormItem>
          <Input
            placeholder={t("signin.formFields.password.inputPlaceholder")}
          />
        </StyledFormItem>

        <Flex
          align="space-between"
          justify="space-between"
          style={{
            width: "100%",
            paddingRight: "2px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              paddingLeft: "5px",
            }}
          >
            <Checkbox></Checkbox>
          </div>
          <div>
            <Link
              href="/auth/password-reset"
              style={{
                color: "#fff",
                fontFamily: "Helvetica",
                fontSize: "10px",
                fontWeight: 400,
                lineHeight: "17px",
                letterSpacing: "0.01em",
                textAlign: "left",
                textDecoration: "underline",
              }}
            >
              {t("signin.forgotPasswordLink")}
            </Link>
          </div>
        </Flex>

        <ButtonContainer>
          <StyledButton type="primary" htmlType="submit">
            {t("signin.buttonText")}
          </StyledButton>
        </ButtonContainer>
        <Link href="/auth/signup" style={linkStyle}>
          {t("signin.signUpLink")}
        </Link>
      </StyledForm>
    </Container>
  );
};

export default SignupForm;
