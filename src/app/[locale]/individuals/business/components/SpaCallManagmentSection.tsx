"use client";

import Image from "next/image";
import { Grid } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const { useBreakpoint } = Grid;

const Container = styled.div<{ screenLg: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.screenLg ? "row" : "column")};
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
`;

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const Title = styled.p<{ screenSm: boolean }>`
  font-family: "Helvetica";
  font-size: ${(props) => (props.screenSm ? "36px" : "20px")};
  font-weight: 400;
  color: #000000;
  padding: 1rem 0;
`;

const Text = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #5e596d;
`;

const SpaCallManagmentSection = () => {
  const screen = useBreakpoint();
  const { t } = useTranslation();

  return (
    <Container screenLg={screen.lg || false}>
      <ImageWrapper>
        <RelativeContainer>
          <div className="relative w-[306.7px] h-[306.7px] ">
            <Image
              src="/business-images/spacall-images.png"
              alt="Spa Call Managment"
              fill
            />
          </div>
        </RelativeContainer>
      </ImageWrapper>
      <div style={{ maxWidth: "614px" }}>
        <Title screenSm={screen.sm || false}>
          {t("spaStaffing.easyManagement.title")}
        </Title>
        <Text>{t("spaStaffing.easyManagement.firstDescription")}</Text>
        <Text>{t("spaStaffing.easyManagement.secondDescription")}</Text>
      </div>
    </Container>
  );
};

export default SpaCallManagmentSection;
