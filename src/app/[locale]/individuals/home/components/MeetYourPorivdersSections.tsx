"use client";
import H1 from "@/components/ui/typography/H1";
import H2 from "@/components/ui/typography/H2";
import H5 from "@/components/ui/typography/H5";
import H6 from "@/components/ui/typography/H6";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  min-height: 200px;
  background-color: white;
  min-height: 400px;

  @media screen and (max-width: 600px) {
    margin-top: 5%;
  }
`;

const Container = styled.div`
  grid-column-start: 5;
  grid-column-end: 22;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  // @media screen and (max-width: 600px) {
  //   grid-column-start: 5;
  //   grid-column-end: 23;
  //   // background-color: red;
  // }
`;

const ImageContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 12;
    // background-color: red;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  grid-column-start: 5;
  grid-column-end: 12;
  margin-top: 10%;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 12;
  }
`;

const BottomTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HiddenTextContainer = styled(H1)`
  display: none;
  @media screen and (max-width: 600px) {
    @media screen and (max-width: 600px) {
      display: block;
      grid-column-start: 1;
      grid-column-end: 12;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;
    }
  }
`;
export default function MeetYourProvidersSection() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <HiddenTextContainer>
          <H1>{t("landingPage.meetProvidersSection.header")}</H1>
        </HiddenTextContainer>
        <ImageContainer>
          <Image
            src="/Ellipse 22.png"
            width={259}
            height={269}
            alt="Provider Portait"
          />
        </ImageContainer>
        <TextContainer>
          <H1>{t("landingPage.meetProvidersSection.header")}</H1>
          <H6 color="#5E596D">
            {t(
              "landingPage.meetProvidersSection.providers.firstProvider.description.paragraphs.first"
            )}
          </H6>
          <H6 color="#5E596D">
            {t(
              "landingPage.meetProvidersSection.providers.firstProvider.description.paragraphs.second"
            )}
          </H6>

          <BottomTextSection>
            <H2>
              {t(
                "landingPage.meetProvidersSection.providers.firstProvider.name"
              )}
            </H2>
            <H5 color="#0067B8">
              {t(
                "landingPage.meetProvidersSection.providers.firstProvider.credentials"
              )}
            </H5>
          </BottomTextSection>
        </TextContainer>
      </Container>
    </Wrapper>
  );
}
