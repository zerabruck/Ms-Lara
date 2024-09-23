"use client";
import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import Calendar from "./Calendar";
import { useTranslation } from "react-i18next";

// #0d99ff

const StyledButton = styled.div<{ bgColor: string; textColor: string }>`
  width: 297px;
  height: 48px;
  background-color: ${(props) => props.bgColor};
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
`;

const CalendarContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 20;
`;
export default function TimeTab() {
  const { t } = useTranslation();
  const baseNameSpace = "tabs.timeTab";
  return (
    <div>
      <div className="flex items-center justify-center flex-col gap-5 mb-10">
        <H1>{t(`${baseNameSpace}.header`)}</H1>
        <div className="flex flex-cols items-center justify-center gap-10">
          <StyledButton bgColor="#0d99ff" textColor="white">
            {t(`${baseNameSpace}.buttonTexts.first`)}
          </StyledButton>
          <StyledButton bgColor="white" textColor="#0D99FF">
            {t(`${baseNameSpace}.buttonTexts.second`)}
          </StyledButton>
        </div>
        <Text>{t(`${baseNameSpace}.slotText`)}</Text>
      </div>
      {/* <CalendarWrapper>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </CalendarWrapper> */}
    </div>
  );
}
