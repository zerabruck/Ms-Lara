"use client";

import React from "react";
import { Button, Input, Form, Typography, Grid } from "antd";
import { CSSProperties } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
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
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 600px) {
    --padding: 20px;
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
`;

const StyledForm = styled(Form)`
  width: 413px;
  height: 341px;
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
  position: relative;
`;

const StyledIcon = styled(CloseOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px; /* Adjust the size as needed */
  color: #ffffff; /* Adjust color if needed */
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #0d99ff;
  border: none;
`;

const SubTitleStyle = styled(H1)`
  line-height: 20px;
  margin-bottom: 24px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
`;

const StyledInputFormItem = styled(Form.Item)`
  margin-bottom: 16px;
  width: 100%;
`;
const PasswordResetForm = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const formItemStyle: CSSProperties = {
    marginBottom: "16px",
    width: "100%",
  };

  return (
    <Container>
      <StyledForm layout="vertical">
        <StyledIcon onClick={() => router.push("/auth")} />

        <H1 color="#FFFFFF">{t("forgotPassword.title")}</H1>

        <SubTitleStyle>{t("forgotPassword.secondText")}</SubTitleStyle>

        <StyledInputFormItem name="email">
          <Input placeholder={t("forgotPassword.emailFormFieldPlaceholder")} />
        </StyledInputFormItem>

        <Form.Item style={{ width: "100%" }}>
          <StyledButton type="primary" htmlType="submit">
            {t("forgotPassword.buttonText")}
          </StyledButton>
        </Form.Item>
      </StyledForm>
    </Container>
  );
};

export default PasswordResetForm;
