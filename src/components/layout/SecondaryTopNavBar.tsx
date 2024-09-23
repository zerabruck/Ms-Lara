"use client";
import styled, { css } from "styled-components";
import SecondaryTopNavBarLinksContainer, {
  StyledH6ForLargeScreens,
} from "./SecondaryTopNavLinksContainer";
import { ILinkWithOptionalComponent } from "./CustomLink";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const Container = styled.div<{
  hideOnLargeScreens: boolean;
  shouldBeScrollable: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  height: 44px;

  background: linear-gradient(
    270deg,
    rgba(166, 207, 245, 0.17) 0%,
    rgba(184, 167, 238, 0.17) 50%,
    rgba(215, 209, 233, 0.17) 100%
  );

  @media screen and (min-width: 600px) {
    display: ${(props) => (props.hideOnLargeScreens ? "none" : "grid")};
  }

  @media screen and (max-width: 600px) {
    min-height: 47px;
    ${(props) =>
      props.shouldBeScrollable
        ? css`
            display: flex;
            overflow: visible;
          `
        : css``}
  }
`;

export default function SecondaryTopNavBar({
  linksForLargeScreens,
  linksForSmallScreens,
  hideOnLargeScreens = false,
  shouldBeScrollable = false,
  isTranslateable = false,
}: {
  linksForLargeScreens: ILinkWithOptionalComponent[];
  linksForSmallScreens: ILinkWithOptionalComponent[];
  hideOnLargeScreens?: boolean;
  shouldBeScrollable?: boolean;
  isTranslateable?: boolean;
}) {
  const pathName = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const AuthLinks: ILinkWithOptionalComponent[] = isTranslateable
    ? [
        {
          label: t("navBar.secondaryNavBar.sigin"),
          url: "/auth",
        },
        {
          label: t("navBar.secondaryNavBar.signup"),
          url: "/auth/signup",
        },
        {
          label: t("navBar.secondaryNavBar.help"),
          url: "/help",
        },
      ]
    : [
        {
          label: "Sign in",
          url: "/auth",
        },
        {
          label: "Sign up",
          url: "/auth/signup",
        },
        {
          label: "Help & contact",
          url: "/help",
        },
      ];

  return (
    <Container
      hideOnLargeScreens={hideOnLargeScreens}
      shouldBeScrollable={shouldBeScrollable}
    >
      <SecondaryTopNavBarLinksContainer
        linksForLargeScreens={linksForLargeScreens}
        linksForSmallScreens={linksForSmallScreens}
        shouldBeScrollable={shouldBeScrollable}
      />
      <div className="hidden sm:flex  col-span-10 gap-6 items-center pr-2 justify-end">
        {AuthLinks.map((item, index) => (
          <StyledH6ForLargeScreens
            selectedTab={pathName == item.url}
            tabName="/"
            color="#343030"
            onClick={() => router.push(item.url)}
            key={index}
          >
            {item.label}
          </StyledH6ForLargeScreens>
        ))}
      </div>
    </Container>
  );
}
