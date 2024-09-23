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
      label: t("navBar.primaryNavBar.massageForVeterans"),
      url: "/veteran/messageforveterans",
    },
    {
      label: t("navBar.primaryNavBar.learnAboutMassage"),
      url: "/veteran/learnaboutmassage",
    },
    {
      label: t("navBar.primaryNavBar.resourceForVa"),
      url: "/veteran/resourceforvs",
    },
    {
      label: t("navBar.primaryNavBar.faqs"),
      url: "/veteran/faqs",
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
