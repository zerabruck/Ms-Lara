"use client";

import H1 from "@/components/ui/typography/H1";
import H6 from "@/components/ui/typography/H6";
import { Button, Input } from "antd";
import styled from "styled-components";
import Image from "next/image";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormContainer = styled.div`
  height: 766px;
  width: 100%;
  // border: 1px solid;
  // border: 1px solid;

  border-image-source: linear-gradient(
    270deg,
    rgba(209, 181, 255, 0.64) 15%,
    rgba(133, 171, 247, 0.557273) 54%,
    rgba(81, 164, 242, 0.5) 81%
  );

  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 40px;
  padding-top: 100px;
  border-radius: 16px;
  @media screen and (max-width: 600px) {
    padding: 5%;

    gap: 24px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;

  height: 75px;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    align-items: center;
    padding-top: 20%;
  }
`;

const InputWithLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 600px) {
    gap: 14px;
  }
`;

const FormItemRowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const StyledTextInput = styled(Input)`
  width: 310px;
  height: 40px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  border: 1px solid #e2e2ed;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    padding-top: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: flex-end;
  }
`;

const StyledButton = styled(Button)`
  width: 217px;
  height: 40px;
  border-radius: 5px;
  background-color: #0d99ff;
  border-color: white;
`;

const ButtonText = styled(H6)`
  color: white;
  text-align: center;
`;

const Text = styled(H6)`
  //styleName: H1;
  font-family: Helvetica;
  font-size: 25px;
  font-weight: 400;
  line-height: 32.37px;

  @media screen and (max-width: 600px) {
    //styleName: H2;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 400;
    line-height: 25.9px;
    // text-align: center;
  }
`;

const StyledImage = styled(Image)`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
export default function Body() {
  return (
    <Wrapper>
      <HeaderContainer>
        <H1>Account</H1>

        <StyledImage
          src={"/Vector (1).png"}
          width={20.25}
          height={13.5}
          alt=""
        />
      </HeaderContainer>
      <FormWrapper>
        <FormContainer>
          <FormItemRowContainer>
            <InputWithLabelContainer>
              <Text>Email Address</Text>
              <StyledTextInput placeholder="Email Address" />
            </InputWithLabelContainer>
            <InputWithLabelContainer>
              <Text>Mobile Phone Number</Text>
              <StyledTextInput placeholder="Mobile Phone Number" />
            </InputWithLabelContainer>
          </FormItemRowContainer>
          <FormItemRowContainer>
            <InputWithLabelContainer>
              <Text>Current Password</Text>
              <StyledTextInput placeholder="Current Password" />
            </InputWithLabelContainer>
          </FormItemRowContainer>
          <ButtonContainer>
            <StyledButton>
              <ButtonText>Update</ButtonText>
            </StyledButton>
          </ButtonContainer>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
}
