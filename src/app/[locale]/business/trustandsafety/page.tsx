"use client";
import TrustAndSafetySideImageCard from "@/app/[locale]/individuals/business/components/TrustAndSafetySideImageCard";
import TrustAndSafetyTabButtons from "@/app/[locale]/individuals/business/components/TrustAndSafetyTabButtons";
import styled from "styled-components";
import { Grid } from "antd";
import { useTranslation, Trans } from "react-i18next";
import React, { useState } from "react";
const { useBreakpoint } = Grid;
const Page = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0);
  const sideImageServiceCard = [
    {
      title: t("trustAndSafety.headlinesGuidelines.cleanlinessPractices.title"),
      body: t(
        "trustAndSafety.headlinesGuidelines.cleanlinessPractices.description"
      ),
      imageUrl: "/business-images/trustandsafety-service-one.png",
    },
    {
      title: t("trustAndSafety.forConsumers.vettedProviders.title"),
      body: t("trustAndSafety.forConsumers.vettedProviders.description"),
      imageUrl: "/business-images/trustandsafety-service-two.png",
    },
    {
      title: t("trustAndSafety.forConsumers.bookingAndReview.title"),
      body: t("trustAndSafety.forConsumers.bookingAndReview.description"),
      imageUrl: "/business-images/trustandsafety-service-three.png",
    },
    {
      title: t("trustAndSafety.forProviders.verifiedClient.title"),
      body: t("trustAndSafety.forProviders.verifiedClient.description"),
      imageUrl: "/business-images/trustandsafety-service-four.png",
    },
    {
      title: t("trustAndSafety.forProviders.safetyAndSupport.title"),
      body: t("trustAndSafety.forProviders.safetyAndSupport.description"),
      imageUrl: "/business-images/trustandsafety-service-five.png",
    },
    {
      title: t("trustAndSafety.forBusinesses.clientCare.title"),
      body: t("trustAndSafety.forBusinesses.clientCare.description"),
      imageUrl: "/business-images/trustandsafety.png",
    },
    {
      title: t("trustAndSafety.forProviders.verifiedClient.title"),
      body: t("trustAndSafety.forProviders.verifiedClient.description"),
      imageUrl: "/business-images/trustandsafety-service-three.png",
    },
    {
      title: t("trustAndSafety.forBusinesses.vettedProviders.title"),
      body: t("trustAndSafety.forBusinesses.vettedProviders.description"),
      imageUrl: "/business-images/trustandsafety-service-six.png",
    },
  ];
  const TopSection = styled.div`
    position: relative;
    height: 89vh;
    background-image: url(/business-images/trustandsafety-landing-image.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(3, 1fr);
  `;

  const Text = styled.p`
    font-family: "Helvetica";
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #000000;
    margin-top: 2rem;
  `;
  const HeaderText = styled.p`
    font-family: Helvetica;
    font-size: 25px;
    font-weight: 400;
    line-height: 32.37px;
    text-align: center;
  `;
  const HeaderContainer = styled.div`
    background-color: #eae2f799;
    width: 99vw;
    position: absolute;
    top: 50%;
    padding: 2rem 0;
  `;
  const StyledDivider = styled.div`
    border-bottom: 1px solid #b7b7b7;
    width: 100%;
  `;

  const screen = useBreakpoint();

  return (
    <div>
      <TopSection>
        <HeaderContainer>
          <HeaderText>{t("trustAndSafety.header")}</HeaderText>
        </HeaderContainer>
      </TopSection>
      <div style={{ padding: screen.sm ? "5rem 7rem" : "5rem 2rem" }}>
        <TrustAndSafetyTabButtons setIndex={setSelectedTab} />
        {selectedTab === 0 && (
          <div>
            <Text>
              {t("trustAndSafety.headlinesGuidelines.introduction.first")}
            </Text>
            <Text>
              {t("trustAndSafety.headlinesGuidelines.introduction.second")}
            </Text>
            <Text>
              {t("trustAndSafety.headlinesGuidelines.introduction.third")}
            </Text>
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[0].title}
              body={sideImageServiceCard[0].body}
              imageUrl={sideImageServiceCard[0].imageUrl}
            />
            <StyledDivider />
            {/* <TrustAndSafetyTabButtons /> */}
          </div>
        )}
        {selectedTab === 1 && (
          <div>
            <Text>{t("trustAndSafety.forConsumers.introduction")}</Text>
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[1].title}
              body={sideImageServiceCard[1].body}
              imageUrl={sideImageServiceCard[1].imageUrl}
            />
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[2].title}
              body={sideImageServiceCard[2].body}
              imageUrl={sideImageServiceCard[2].imageUrl}
            />
            <StyledDivider />
            {/* <TrustAndSafetyTabButtons /> */}
          </div>
        )}
        {selectedTab === 2 && (
          <div>
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[3].title}
              body={sideImageServiceCard[3].body}
              imageUrl={sideImageServiceCard[3].imageUrl}
            />
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[6].title}
              body={sideImageServiceCard[6].body}
              imageUrl={sideImageServiceCard[6].imageUrl}
            />
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[4].title}
              body={sideImageServiceCard[4].body}
              imageUrl={sideImageServiceCard[4].imageUrl}
            />
            <StyledDivider />
            {/* <TrustAndSafetyTabButtons /> */}
          </div>
        )}
        {selectedTab === 3 && (
          <div>
            <Text>{t("trustAndSafety.forProviders.introduction")}</Text>

            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[7].title}
              body={sideImageServiceCard[7].body}
              imageUrl={sideImageServiceCard[7].imageUrl}
            />
            <TrustAndSafetySideImageCard
              title={sideImageServiceCard[5].title}
              body={sideImageServiceCard[5].body}
              imageUrl={sideImageServiceCard[5].imageUrl}
            />
            <StyledDivider />
            {/* <TrustAndSafetyTabButtons /> */}
          </div>
        )}
        {selectedTab === 4 && (
          <div>
            <Text>{t("trustAndSafety.trustAndSafetyTeam.first_text")}</Text>
            <Text>{t("trustAndSafety.trustAndSafetyTeam.second_text")}</Text>
            <StyledDivider className="py-[2rem]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
