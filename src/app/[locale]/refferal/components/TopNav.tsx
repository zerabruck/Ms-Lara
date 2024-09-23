"use client";
import { Button } from "antd";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";

import H6 from "@/components/ui/typography/H6";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CustomLink, {
  ILinkWithOptionalComponent,
} from "@/components/layout/CustomLink";
import DrawerNav from "@/components/layout/DrawerNav";
import UsEmbassyPicture from "../../../../../public/drop-down-images/zeel-usdep-logo 1.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  height: 75px;
  @media screen and (max-width: 600px) {
    // grid-template-columns: repeat(3, 1fr);
    height: 69px;
  }
`;

const InnerContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 23;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-column-end: 24;
  }
`;

const SmallScreenImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    gap: 4px;
  }
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
}: {
  links: ILinkWithOptionalComponent[];
  drawerLinks: ILinkWithOptionalComponent[];
  callToAction?: React.ReactNode;
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Container>
        <InnerContainer>
          <div className="flex items-center">
            <MenuOutlined onClick={() => setOpenDrawer(true)} />
            <DrawerNav
              navLinks={drawerLinks}
              isOpen={openDrawer}
              setIsOpen={setOpenDrawer}
            />
          </div>

          <SmallScreenImageContainer>
            <Image src="/logo.svg" alt="Logo" width={86} height={33} />
            <Image src={UsEmbassyPicture} alt="us embassy picture" />
          </SmallScreenImageContainer>

          <div className="flex items-center justify-end gap-3">
            <Image
              src={"/QuestionMarkIcon.svg"}
              width={20}
              height={20}
              alt=""
            />
            <Image src={"/UserIcon.png"} width={20} height={20} alt="" />
          </div>
        </InnerContainer>
      </Container>
    </>
  );
}
