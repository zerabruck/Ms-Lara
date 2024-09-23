"use client";
import { Button } from "antd";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";

import H6 from "../ui/typography/H6";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomLink, { ILinkWithOptionalComponent } from "./CustomLink";
import DrawerNav from "./DrawerNav";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  height: 75px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  box-shadow: 0px 2px 2px 0px #00000040;
  @media screen and (max-width: 800px) {
    // grid-template-columns: repeat(3, 1fr);
    height: 69px;
  }
`;

const InnerContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 24;
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CallToActionContainer = styled.div`
  display: flex;
  grid-column-start: 20;
  grid-column-end: 25;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const NavLinksContainer = styled.div`
  grid-column: span 19;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 32px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const SmallScreenImageContainer = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HamburgerIconContianer = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
    display: flex;
    align-items: center;
  }
`;

const QuestionMarkAndUserIconContainer = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
  }
`;

const StyledImage = styled(Image)`
  cursor: pointer;
`;
export interface ILink {
  label: string;
  url: string;
  index?: boolean;
  currentLinkIndex?: number;
  setCurrentLinkIndex?: any;
}

export default function TopNav({
  links,
  drawerLinks,
  callToAction = null,
  isTranslateable = false,
}: {
  links: ILinkWithOptionalComponent[];
  drawerLinks: ILinkWithOptionalComponent[];
  callToAction?: React.ReactNode;
  isTranslateable?: boolean;
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <InnerContainer>
          <HamburgerIconContianer>
            <MenuOutlined onClick={() => setOpenDrawer(true)} />
            <DrawerNav
              navLinks={drawerLinks}
              isOpen={openDrawer}
              setIsOpen={setOpenDrawer}
            />
          </HamburgerIconContianer>

          <SmallScreenImageContainer>
            <StyledImage
              src="/logo.svg"
              alt="Logo"
              width={86}
              height={33}
              onClick={() => router.push("/")}
            />
          </SmallScreenImageContainer>

          <NavLinksContainer>
            <StyledImage
              src="/logo.svg"
              alt="Logo"
              width={86}
              height={33}
              onClick={() => router.push("/")}
            />
            {links.map((item, index: any) => (
              <CustomLink
                label={item.label}
                url={item.url}
                index={index}
                key={index}
                component={item?.component}
              />
            ))}
          </NavLinksContainer>

          <CallToActionContainer>
            {callToAction ? (
              <>{callToAction}</>
            ) : (
              <>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#0D99FF",
                  }}
                  onClick={() => {
                    router.push("/book");
                  }}
                >
                  <H6 color="white">
                    {isTranslateable
                      ? t("navBar.primaryNavBar.bookAMassage")
                      : "Book a Massage"}
                  </H6>
                </Button>
                <Button
                  icon={<MenuOutlined />}
                  style={{
                    border: "none",
                    outline: "none",
                  }}
                />
              </>
            )}
          </CallToActionContainer>
          <QuestionMarkAndUserIconContainer>
            {/* <div className="flex items-center justify-end gap-3 sm:hidden"> */}
            <Image
              src={"/QuestionMarkIcon.svg"}
              width={20}
              height={20}
              alt=""
            />
            <Image src={"/UserIcon.png"} width={20} height={20} alt="" />
            {/* </div> */}
          </QuestionMarkAndUserIconContainer>
        </InnerContainer>
      </Container>
    </>
  );
}
