"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
const StyledButton = styled.div`
  width: 242px;
  min-height: 48px;
  padding: 12px 30px 12px 30px;
  background-color: #0d99ff;
  border: none;
  cursor: pointer;
`;

const StyledButtonText = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: white;
`;

export default function ApplyToJoin() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <StyledButton onClick={() => router.push("/providers/apply")}>
      <StyledButtonText>
        {t("landing.thirdSection.buttonText")}
      </StyledButtonText>
    </StyledButton>
  );
}
