"use client";

"use client";
import Image from "next/image";

import styled from "styled-components";

import BackArrowPicture from "../../../../../public/book-massage-images/lets-icons_back.png";
import { useContext } from "react";
import { TabContext } from "@/app/[locale]/book/lib/TabContextProvider";
import { useRouter } from "next/navigation";
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
  grid-column-start: 2;
  grid-column-end: 24;
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

export default function TopNav() {
  const { handleTabChange, activeKey } = useContext(TabContext);
  const router = useRouter();
  return (
    <>
      <Container>
        <InnerContainer>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (Number(activeKey) == 1) {
                router.back();
              } else {
                handleTabChange(String(Number(activeKey) - 1));
              }
            }}
          >
            <Image src={BackArrowPicture} alt="Back arrow" />
          </div>

          <SmallScreenImageContainer>
            <Image src="/logo.svg" alt="Logo" width={86} height={33} />
          </SmallScreenImageContainer>
        </InnerContainer>
      </Container>
    </>
  );
}
