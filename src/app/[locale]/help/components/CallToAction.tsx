"use client";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Contianer = styled.div`
  background-image: url("/Rectangle 89.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 427px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    background-image: url("Rectangle 326.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const CallToActionContainer = styled.div`
  min-width: 481.71px;
  height: 77px;
  top: 332px;
  border-radius: 5px 0px 0px 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  //   align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-family: Helvetica;
  font-size: 29px;
  font-weight: 400;
  line-height: 37.55px;
  text-align: center;
  color: white;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.31px;
    text-align: center;
  }
`;

const StyledInput = styled(Input)`
  width: 375.03px;
  height: 28px;
  border-radius: 5px;
  font-family: Helvetica;
  font-size: 10px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;

  @media screen and (max-width: 600px) {
    max-width: 223px;
    height: 28px;
  }
`;

export default function CallToAction() {
  const { t } = useTranslation();
  return (
    <Contianer>
      <CallToActionContainer>
        <TextContainer>
          <Text>{t("focalPoint.title")}</Text>
        </TextContainer>
        <StyledInput placeholder={t("focalPoint.inputPlaceholder")} />
      </CallToActionContainer>
    </Contianer>
  );
}
