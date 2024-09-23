"use client";
import HowZeelIsDifferent from "./home/components/HowZeelIsDifferent";
import NeedPainReliefNow from "./home/components/NeedPainReliefNowSection";
import ScallableSolutionSection from "./home/components/ScallableSolution";
import MilitaryProviders from "./home/components/ZeelMilitartProviders";
import CardsContainer from "./home/components/CardsContainer";
import FocalPoint from "./home/components/FocalPoint";
import JoinTheNetworkSection from "./home/components/JoinNetworkSection";
import MeetYourProvidersSection from "./home/components/MeetYourPorivdersSections";
import MilitaryVeteranSection from "./home/components/MilitaryVeteranSection";

import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import TopNavDropDown from "@/components/layout/TopNavDropDown";
import TopNav from "@/components/layout/TopNav";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import FastAndEasyBookingSection from "./home/components/FastEasyBookingSection";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <FocalPoint />
      <CardsContainer />
      <MilitaryVeteranSection />
      <ScallableSolutionSection />
      <HowZeelIsDifferent />
      <FastAndEasyBookingSection />
      <JoinTheNetworkSection />
      <MeetYourProvidersSection />
      <MilitaryProviders />
      <NeedPainReliefNow />
    </>
  );
}
