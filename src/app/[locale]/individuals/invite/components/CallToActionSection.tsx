"use client";

import { Input } from "antd";
import styled from "styled-components";

const Header = styled.span`
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 400;
  line-height: 46.62px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.9px;
    text-align: center;
  }
`;

const BodyText = styled.span<{ color: string }>`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: center;
  color: ${(props) => props.color};

  @media screen and (max-width: 600px) {
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.01em;
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
  }
`;

const StyledInputContainer = styled.div`
  grid-column-start: 5;
  grid-column-end: 8;
  @media screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-column-end: 9;
  }
`;
const StyledInput = styled(Input)`
  width: 100%;
  height: 50px;
  border-radius: 1px;
`;

const StyledButton = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  background-color: #0d99ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  grid-column-start: 8;
  grid-column-end: 9;
  @media screen and (max-width: 600px) {
    grid-column-start: 9;
    grid-column-end: 12;
  }
`;

const FormItemContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export default function CallToAction() {
  return (
    <div className="flex flex-col gap-5 py-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <Header>{`Give $20, Get  $20`}</Header>
        <BodyText color="#000000">
          For every friedn who books their firest massage, you get $20 in
          credit, and they get $20 off
        </BodyText>
      </div>
      <div className="flex flex-col  gap-5 sm:px-0 px-10">
        <FormItemContainers>
          <StyledInputContainer>
            <StyledInput placeholder="ABSD12DF" />
          </StyledInputContainer>
          <StyledButton>Copy</StyledButton>
        </FormItemContainers>
        <BodyText color="#0D99FF">Terms and Conditions</BodyText>
      </div>
    </div>
  );
}
