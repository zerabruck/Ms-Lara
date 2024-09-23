"use client";
import React from "react";
import { Input, Button, Grid } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

const Container = styled.div<{ screenSm: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;
`;

const Title = styled.p<{ screenSm: boolean }>`
  font-family: "Helvetica";
  font-size: 20px;
  // font-size: ${(props) => (props.screenSm ? "36px" : "20px")};
  text-align: center;
  font-weight: 400;
  line-height: 30px;
  color: #000000;
  padding: 0 1rem;

  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
`;

const Text = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #5e596d;
  max-width: 646.06px;
`;

const InputGroup = styled.div<{ screenSm: boolean }>`
  // width: ${(props) => (props.screenSm ? "60%" : "100%")};
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 8px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const InputField = styled.div<{ screenSm: boolean }>`
  display: flex;
  flex-direction: row;
  // flex-direction: ${(props) => (props.screenSm ? "row" : "column")};
  gap: 2rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const InputLabel = styled.p`
  font-family: "Helvetica";
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #5e596d;
  text-align: left;
  padding: 0.5rem 0;
`;

const StyledInput = styled(Input)`
  height: 50px;
  border: solid;
  border-color: rgba(94, 89, 109, 0.5);
  border-width: 2px;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  background-color: #858585;
  color: white;
  border-radius: 0px;
  border: white;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  width: Hug (264px) px;
  height: 48px;

  padding: 12px 100px 12px 100px;
  gap: 10px;
  opacity: 0px;
`;

const StyledLink = styled(Link)`
  color: #5e596d;
`;

const Divider = styled.div<{ screenSm: boolean }>`
  border-bottom: 1px solid #b7b7b7;
  // margin: ${(props) => (props.screenSm ? "1rem 7rem" : "1rem 1rem")};
  margin: 1rem 7rem;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin: 1rem 1rem;
  }
`;

const H5 = styled.span`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #5e596d;
`;
const SpaCallToActionSection = () => {
  const screen = useBreakpoint();
  const screenSm = screen.sm || false;
  const { t } = useTranslation();

  return (
    <Container screenSm={screenSm}>
      <Title screenSm={screenSm}>
        {t("apply.spacCallToActionSection.title")}
      </Title>
      <Text>{t("apply.spacCallToActionSection.applicationInfo")}</Text>
      <InputGroup screenSm={screenSm}>
        <div className="flex">
          <Text>
            {t(
              "apply.spacCallToActionSection.applicationForm.contactInfoFields.title"
            )}
          </Text>
        </div>
        <InputField screenSm={screenSm}>
          <div
            style={{
              width: screenSm ? "50%" : "100%",
            }}
          >
            <InputLabel>
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.firstName"
              )}
            </InputLabel>
            <StyledInput />
          </div>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.lastName"
              )}
            </InputLabel>
            <StyledInput />
          </div>
        </InputField>
        <InputField screenSm={screenSm}>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>
              {" "}
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.emailAddress"
              )}
            </InputLabel>
            <StyledInput />
          </div>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>
              {" "}
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.phoneNumber"
              )}
            </InputLabel>
            <StyledInput />
          </div>
        </InputField>
        <InputField screenSm={screenSm}>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>
              {" "}
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.zipCode"
              )}
            </InputLabel>
            <StyledInput />
          </div>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>
              {" "}
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.areaOfPractice"
              )}
            </InputLabel>
            <StyledInput />
          </div>
        </InputField>
        <InputField screenSm={screenSm}>
          <div style={{ width: screenSm ? "50%" : "100%" }}>
            <InputLabel>
              {" "}
              {t(
                "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.areaOfPractice"
              )}
            </InputLabel>
            <div className="sm:mb-0 mb-2">
              <H5 color="#5E596D">
                {t(
                  "apply.spacCallToActionSection.applicationForm.contactInfoFields.fieldsLabel.selectHealthWellness"
                )}
              </H5>
            </div>
            <StyledInput />
          </div>
        </InputField>
      </InputGroup>
      <div className="flex sm:px-0 px-10">
        <H5>{t("apply.spacCallToActionSection.applicationForm.footer.1")}</H5>
      </div>
      <StyledButton>
        <span style={{ fontSize: "16px" }}>
          {" "}
          <H5>
            {t("apply.spacCallToActionSection.applicationForm.buttonText")}
          </H5>
        </span>
      </StyledButton>
      <Text>
        <H5>{t("apply.spacCallToActionSection.applicationForm.footer.2")}</H5>
        <StyledLink href="">
          {" "}
          <H5>{t("apply.spacCallToActionSection.applicationForm.footer.3")}</H5>
        </StyledLink>
        .
      </Text>
      <Divider screenSm={screenSm} />
    </Container>
  );
};

export default SpaCallToActionSection;
