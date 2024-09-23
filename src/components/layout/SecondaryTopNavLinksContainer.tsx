"use client";

import styled, { css } from "styled-components";
import H6 from "../ui/typography/H6";
import { usePathname, useRouter } from "next/navigation";
import CustomLink, { ILinkWithOptionalComponent } from "./CustomLink";

export const StyledH6ForLargeScreens = styled(H6)<{
  selectedTab: boolean;
  tabName: string;
}>`
  text-decoration: ${(props) => (props.selectedTab ? "underline" : "none")};
  text-underline-offset: 10px;
  text-decoration-thickness: 1px;
  text-decoration-color: #9a9a9a;
  cursor: pointer;
`;

const StyledH6ForSmallScreens = styled(CustomLink)`
  font-size: 12px;
`;

const LargeScreenContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 14;
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SmalleScreenContainer = styled.div<{ shouldBeScrollable: boolean }>`
  ${(props) =>
    props.shouldBeScrollable
      ? css`
          padding-left: 5%;
          display: flex;
          gap: 32px;
          align-items: center;
          justify-content: space-between;
          // overflow: visible;
          overflow-x: auto;
          white-space: nowrap;
        `
      : css`
          grid-column-start: 2;
          grid-column-end: 24;
          display: flex;
          gap: 32px;
          align-items: center;
          justify-content: space-between;
        `}

  @media screen and (min-width: 601px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
`;
export default function SecondaryTopNavBarLinksContainer({
  linksForLargeScreens,
  linksForSmallScreens,
  shouldBeScrollable = false,
}: {
  linksForLargeScreens: ILinkWithOptionalComponent[];
  linksForSmallScreens: ILinkWithOptionalComponent[];
  shouldBeScrollable?: boolean;
}) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      <LargeScreenContainer>
        {linksForLargeScreens.map((item, index: any) => (
          <StyledH6ForLargeScreens
            selectedTab={pathName.includes(item.url)}
            tabName="/"
            color="#343030"
            onClick={() => router.push(item.url)}
            key={index}
          >
            {item.label}
          </StyledH6ForLargeScreens>
        ))}
      </LargeScreenContainer>

      <SmalleScreenContainer shouldBeScrollable={shouldBeScrollable}>
        {linksForSmallScreens.map((item, index: any) => (
          <StyledH6ForSmallScreens
            label={item.label}
            url={item.url}
            index={index}
            key={index}
            component={item?.component}
          />
        ))}
      </SmalleScreenContainer>
    </>
  );
}
