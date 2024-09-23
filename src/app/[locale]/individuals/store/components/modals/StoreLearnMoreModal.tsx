"use client";

import styled from "styled-components";
import { Divider, Modal } from "antd";
import ProductTitleAddToCardAndPriceSection from "./ProductTitleAddToCardAndPriceSection";
import SecondSection from "./SecondSection";
import WhatsIncluded from "./WhatIsIncludedSection";
import SpecificationSection from "./SpecificationSection";
import ThridSection from "./ThridSection";
import StyledDivider from "./StyledDivider";
import { useState, useContext, useEffect } from "react";
import { ProductListSectionContext } from "../ProductListSection";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    min-height: 1648px;
    padding: 40px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
      padding: 20px;
    }
  }
`;

const ImageContainer = styled.div<{ imgSrc: string }>`
  height: 377px;
  background-image: url(${(props) => `'${props.imgSrc}'`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const WhatsIncludedContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media screen and (max-width: 600px) {
    grid-gap: 24px;
  }
`;

const Header = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.01em;
  text-align: left;
`;

const Text = styled.span`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #2a2a2a;
`;

const OnDemandContainer = styled.div`
  grid-column-start: 7;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;
const WhatsIncludedSection = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 13;
    margin-bottom: 5%;
  }
`;

export default function CustomModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
  setIsAddToCartModalOpen?: any;
}) {
  const handleClose = () => setIsOpen(false);

  const { setIsAddToCartModalOpen, currentProduct } = useContext(
    ProductListSectionContext
  );

  return (
    <StyledModal
      open={isOpen}
      width={1000}
      footer={null}
      onCancel={() => handleClose()}
      onClose={() => handleClose()}
    >
      <ImageContainer
        imgSrc={currentProduct && currentProduct.productMainPictureLink}
      />
      <ProductTitleAddToCardAndPriceSection
        productName={currentProduct && currentProduct.productName}
        productShortDescriptionText={"Percussion Massage Device"}
        productPriceText={currentProduct && currentProduct.price}
      />
      <StyledDivider />
      <SecondSection
        leftSectionHeader={"We Take"}
        leftSectionContent={` This next-gen Hypervolt is now easier to handle and maneuver, thanks
          to an updated, ergonomic design and lighter weight. And somehow it
          still packs in more power than ever.`}
        rightSectionHeader={`Hypervolt 2 is best for:`}
        rightSectionContent={[
          "1. Stretching | Recovery",
          "2. Beginner | Intermediate",
          "3. Whole body",
        ]}
      />
      <StyledDivider />

      <ThridSection
        leftSectionHeader={"Benefits"}
        leftSectionContent={`The original Hypervolt with some serious upgrades—lighter, more powerful, with a newly designed handle—to give your muscles the daily relief they've been asking for.
HyperSmart™ Technology connects to Hyperice App
Helps relieve muscle soreness and stiffness
Improves range of motion
Promotes circulation
Accelerates warmup and recovery`}
        featureSection="The Hypervolt 2 has an improved ergonomic and lightweight
design that helps you feel better faster so you can get back to
doing the things you love."
        whisperQuietSection="Don’t pause your music or your favorite show. Our patented 
QuietGlide technology will have you saying “ahhh,” not “shhh”."
      />

      <WhatsIncludedContainer>
        <WhatsIncludedSection>
          <WhatsIncluded
            bulletPoints={[
              "Hypervolt 2",
              "Head attachment pouch",
              "5head attachments (Fork, Ball, Cushion, Flat, Bullet)",
              "18V Charge",
              "International Plug Adapters (3)",
            ]}
          />
        </WhatsIncludedSection>
        <OnDemandContainer>
          <Header>Recovery, on demand</Header>
          <Text>
            Integrated with HyperSmart”, it’s easy to find the warm-up and
            recovery plans that will help you feel and move better with
            step-by-step expert guidance through the Bluetooth connected
            Hyperice App.
          </Text>
        </OnDemandContainer>
      </WhatsIncludedContainer>

      <SpecificationSection
        specs={[
          { key: "Dimensions", value: "7.25” x 2.5” x 9.5”" },
          { key: "Weight", value: "1.8 lbs" },
          { key: "Battery Life", value: "3 hrs" },
          { key: "Quiet Glide", value: "Yes" },
          { key: "Bluetooth", value: "Yes" },
          { key: "Speeds", value: "3 Options" },
          { key: "Pressure sensor", value: "Yes (3 levels)" },
          { key: "Motor", value: "Brushless high-torque 60W motor" },
          { key: "Travel-friendly", value: "Yes (TSA approved carry-on)" },
        ]}
      />
    </StyledModal>
  );
}
