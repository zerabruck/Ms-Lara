"use client";

import H1 from "@/components/ui/typography/H1";
import H6 from "@/components/ui/typography/H6";
import styled from "styled-components";
import InputWithButton from "./CustomInput";
import H5Font15 from "@/components/ui/typography/H5-font-15";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div`
  background-image: url("/Rectangle 515 (1).png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 634px;

  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);

  @media screen and (max-width: 600px) {
    background-image: url("/homeFocal.png");
    // grid-template-columns: 1fr;
    grid-template-columns: repeat(12, 1fr);

    padding-left: 7%;
    padding-right: 7%;
  }
`;

const StyledH6 = styled(H6)`
  display: flex;
  gap: 1px;

  @media screen and (max-width: 600px) {
    //styleName: H6;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.01em;
    text-align: justified;
  }
`;

const StyledHeader = styled(H1)`
  padding-right: 10%;
  @media screen and (max-width: 600px) {
    //styleName: H2;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.9px;
    text-align: left;
  }
`;

const ImageAndTextContainer = styled.div`
  display: flex;
  // gap: 8px;
  align-items: center;

  @media screen and (max-width: 600px) {
    gap: 8px;
  }
`;

const StyledFont15 = styled(H5Font15)`
  @media screen and (max-width: 600px) {
    font-size: 12px;
    text-align: left;
    line-height: 12px;
  }
`;
export default function FocalPoint() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="sm:col-start-2 sm:col-end-11 col-start-1 col-end-13 row-start-12 row-end-15 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <StyledHeader color="white">
            {t("landingPage.focalPoint.header")}
          </StyledHeader>
          <StyledH6 color="white">
            {t("landingPage.focalPoint.secondaryHeader")}
          </StyledH6>
        </div>
        <InputWithButton />
        <ImageAndTextContainer>
          <Image
            src="/carbon_badge.png"
            width={25}
            height={26}
            alt="carbon badge"
          />
          <StyledFont15 color="white">
            {t("landingPage.focalPoint.veteransMessage")}
          </StyledFont15>
        </ImageAndTextContainer>
      </div>
    </Wrapper>
  );
}
