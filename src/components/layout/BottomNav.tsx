"use client";

import { Button, Divider, Grid, Input } from "antd";
import Image from "next/image";
import React from "react";
import { StyleObject } from "@/types/cssProps";
import H6 from "@/components/ui/typography/H6";
import H1 from "@/components/ui/typography/H1";
import styled from "styled-components";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const H1WithBreakpoint = styled(H1)`
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const SecondSectionItemHeader = styled(H1)`
  font-size: 27px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 40px;
  grid-gap: 40px;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 10vh;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-bottom: 5vh;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SecondSectionContainer = styled.div`
  margin-top: 2%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 48px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 10%;
  }
`;

const SecondSectionItemContainer = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 5vw;
  margin-right: 5vw;

  @media screen and (max-width: 600px) {
    margin-left: 15vw;
    margin-right: 15vw;
  }
`;
const { useBreakpoint } = Grid;

const BottomNav = ({
  isTranslateable = false,
}: {
  isTranslateable?: boolean;
}) => {
  const { t } = useTranslation();
  const screen = useBreakpoint();

  const margin = screen.xs ? "15vw" : "5vw";
  const styles: StyleObject = {
    secondSectionItemContainer: {
      gridColumn: "span 2",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      // paddingLeft: screen.lg ? "10%" : "20%",
      marginLeft: margin,
      marginRight: margin,
    },

    secondSectionItemListContainer: {
      display: "grid",
      gridTemplateColumns: screen.lg ? "repeat(3,1fr)" : "1fr",
      gridTemplateRows: "repeat(4,1fr)",
      gridColumnGap: "24px",
      gridRowGap: "16px",
    },
  };

  const data: Array<{
    comp?: React.ReactNode;
    title: string;
    children: Array<{
      label: string;
      link: string;
    }>;
  }> = [
    {
      title: isTranslateable ? t("bottomNav.aboutSection.about") : "About",
      children: [
        {
          label: isTranslateable ? t("bottomNav.aboutSection.about") : "About",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.aboutSection.career")
            : "Career",
          link: "",
        },
        {
          label: isTranslateable ? t("bottomNav.aboutSection.blog") : "Blog",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.aboutSection.press")
            : "Press, Media and News",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.aboutSection.release")
            : "Press Release",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.aboutSection.siteMap")
            : "Site Map",
          link: "",
        },
      ],
    },
    {
      title: isTranslateable
        ? t("bottomNav.individualsSections.title")
        : "Individuals",
      children: [
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.inhome")
            : "In-Home Services",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.massage")
            : "Massage",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.massageForVets")
            : "Massage for veterans",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.massagePriceAndLocations")
            : "Massage Price & Locations",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.massageMembership")
            : "Massage Membership",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.zeelGifts")
            : "Zeel Gifts",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.zeelStore")
            : "Zeel Store",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.trustAndSafety")
            : "Trust & Safety",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.individualsSections.payment")
            : "HSF/HSA Payment",
          link: "",
        },
      ],
    },
    {
      title: isTranslateable ? t("bottomNav.businesses.title") : "Businesses",
      children: [
        {
          label: isTranslateable
            ? t("bottomNav.businesses.partners")
            : "Solutions for Healthcare partners",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.businesses.workplaceWellness")
            : "Workplace Wellness",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.businesses.bookAChair")
            : "Book a chair Massage Event",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.businesses.spaStafffing")
            : "Zeel spa Staffing",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.businesses.trustAndSafety")
            : "Trust & Safety",
          link: "",
        },
      ],
    },
    {
      title: isTranslateable ? t("bottomNav.providers.title") : "Providers",
      children: [
        {
          label: isTranslateable
            ? t("bottomNav.providers.workWithZeel")
            : "Work with Zeel",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.providers.applyNow")
            : "Apply Now",
          link: "",
        },
        {
          label: isTranslateable
            ? t("bottomNav.providers.trustAndSafety")
            : "Trust & Safety",
          link: "",
        },
      ],
    },
    {
      title: isTranslateable ? t("bottomNav.newsLetter.title") : "Newsletter",
      children: [{ label: "Subscribe  Us", link: "" }],
      comp: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Input
            placeholder={
              isTranslateable
                ? t("bottomNav.newsLetter.inputPlaceholder")
                : "Email address here"
            }
          />
          <Button
            style={{
              height: "33.67px",
              width: "120px",
              backgroundColor: "#0D99FF",
              color: "white",
              borderRadius: "0px",
              border: "white",
            }}
          >
            {isTranslateable
              ? t("bottomNav.newsLetter.buttonText")
              : "Subcribe"}
          </Button>
        </div>
      ),
    },
  ];

  const cities = [
    "Atlanta",
    "Los Angeles",
    "San Francisco",
    "Austin",
    "Miami",
    "Houston",
    "Chicago",
    "New York City",
    "Denver",
    "Dallas/Fort Worth",
    "Phoenix",
    "More...",
  ];

  return (
    <>
      <Container>
        {data.map((item, index) => (
          <ListContainer key={index}>
            <H1WithBreakpoint color="#001E54">{item.title}</H1WithBreakpoint>
            {item.children.map((child, index) => (
              <H6 key={index} color="#5E596D">
                {child.label}
              </H6>
            ))}
            {item.comp && <>{item.comp}</>}
          </ListContainer>
        ))}
      </Container>

      <SecondSectionContainer>
        <div style={styles.secondSectionItemContainer}>
          <SecondSectionItemHeader color="#001E54">
            {isTranslateable
              ? t("bottomNav.inHomeLocation.title")
              : "In-Home Message Location"}
          </SecondSectionItemHeader>
          <div style={styles.secondSectionItemListContainer}>
            {cities.map((val, index) => (
              <H6 color="#5E596D" key={index}>
                {val}
              </H6>
            ))}
          </div>
        </div>
        <div style={styles.secondSectionItemContainer}>
          <SecondSectionItemHeader color="#001E54">
            {isTranslateable
              ? t("bottomNav.chairMassageLocation.title")
              : "Chair Message Location"}
          </SecondSectionItemHeader>
          <div style={styles.secondSectionItemListContainer}>
            {cities.map((val, index) => (
              <H6 color="#5E596D" key={index}>
                {val}
              </H6>
            ))}
          </div>
        </div>
      </SecondSectionContainer>
      <Footer isTranslateable={isTranslateable} />
    </>
  );
};

export default BottomNav;
