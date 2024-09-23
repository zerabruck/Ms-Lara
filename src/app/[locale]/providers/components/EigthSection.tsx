"use client";

import { Button } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  min-height: 472px;
  width: 100%;
  background: linear-gradient(
    270deg,
    rgba(166, 207, 245, 0.17) 0%,
    rgba(184, 167, 238, 0.17) 50%,
    rgba(215, 209, 233, 0.17) 100%
  );

  @media screen and (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Text = styled.span<{ color: string }>`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${(props) => props.color};
`;

const Body = styled.span`
  font-family: Helvetica;
  font-size: 28px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  color: #2a2a2a;
`;

const StyledButton = styled(Button)`
  width: 244px;
  height: 48px;
  border: 1px solid #0d99ff;
  background-color: #f2f3fd;
  border-radius: 1px;
`;

export default function EightSection() {
  const { t } = useTranslation();
  const baseNameSpace = "landing.eigthSection";
  return (
    <Container className="flex sm:flex-row flex-col items-center justify-center gap-5">
      <Image
        src={"/providers/Rectangle 334.png"}
        width={568}
        height={336}
        alt="map"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Text color="#0d99ff">{t(`${baseNameSpace}.title`)}</Text>
          <Body>{t(`${baseNameSpace}.body`)}</Body>
        </div>
        <div className="flex sm:justify-start justify-center">
          <StyledButton>
            <Text color="#0067B8">{t(`${baseNameSpace}.buttonText`)}</Text>
          </StyledButton>
        </div>
      </div>
    </Container>
  );
}
