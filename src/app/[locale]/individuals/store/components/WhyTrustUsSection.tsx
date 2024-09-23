"use client";

import styled from "styled-components";
import { Space, Grid } from "antd";
import Image from "next/image";
import H5 from "@/components/ui/typography/H5";
import { useTranslation } from "react-i18next";

const TextJustifyAligned = styled(H5)`
  text-align: justify;
`;

const SpaceStyled = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 180px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const { useBreakpoint } = Grid;

const WhyTrustUsSection = () => {
  const { t } = useTranslation();
  return (
    <SpaceStyled>
      <Image src="/Group 21.png" width={215} height={204} alt="Trust us" />
      <FlexContainer>
        <TextJustifyAligned>
          {t("storePage.whyTrustUsSection.body")}
        </TextJustifyAligned>
      </FlexContainer>
    </SpaceStyled>
  );
};

export default WhyTrustUsSection;
