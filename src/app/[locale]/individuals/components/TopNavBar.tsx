"use client";

import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import TopNav from "@/components/layout/TopNav";
import TopNavDropDown from "@/components/layout/TopNavDropDown";
import { useTranslation } from "react-i18next";

export default function TopNavBar() {
  const { t } = useTranslation();
  const primaryLinks: ILinkWithOptionalComponent[] = [
    {
      label: t("navBar.primaryNavBar.inhomeService"),
      url: "/individuals/massage",
      component: <TopNavDropDown isTranslateable={true} />,
    },
    {
      label: t("navBar.primaryNavBar.store"),
      url: "/individuals/store",
    },
    {
      label: t("navBar.primaryNavBar.blog"),
      url: "/individuals/blog",
    },
    {
      label: t("navBar.primaryNavBar.trustAndSafety"),
      url: "/individuals/trust-and-safety",
    },
  ];
  const secondaryLinks: ILinkWithOptionalComponent[] = [
    {
      label: t("navBar.secondaryNavBar.individuals"),
      url: "/individuals",
    },
    {
      label: t("navBar.secondaryNavBar.business"),
      url: "/business",
    },
    {
      label: t("navBar.secondaryNavBar.healthcare"),
      url: "/health",
    },
    {
      label: t("navBar.secondaryNavBar.providers"),
      url: "/providers",
    },
  ];
  return (
    <>
      <TopNav
        links={primaryLinks}
        drawerLinks={secondaryLinks}
        isTranslateable={true}
      />
      <SecondaryTopNavBar
        linksForLargeScreens={secondaryLinks}
        linksForSmallScreens={primaryLinks}
        shouldBeScrollable={true}
        isTranslateable={true}
      />
    </>
  );
}
