import type { Metadata } from "next";
import BottomNav from "@/components/layout/BottomNav";
import TopNav from "@/components/layout/TopNav";
import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import ReferalButton from "./components/ReferalButton";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../i18n";
import TopNavBar from "./components/TopNavBar";
export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Veterans massage services",
    "veteran wellness",
    "massage for veterans",
    "veteran support",
  ],
};

export default async function BusinessLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["vasubpages"]);

  return (
    <>
      <TranslationsProvider
        namespaces={["vasubpages"]}
        locale={locale}
        resources={resources}
      >
        <TopNavBar />
        {children}
      </TranslationsProvider>
    </>
  );
}
