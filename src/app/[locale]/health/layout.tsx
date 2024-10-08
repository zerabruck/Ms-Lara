import type { Metadata } from "next";
import BottomNav from "@/components/layout/BottomNav";
import TopNav from "@/components/layout/TopNav";
import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../i18n";
import TopNavBar from "./components/TopNavBar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function BusinessLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["healthcare"]);

  const primaryLinks: ILinkWithOptionalComponent[] = [
    {
      label: "Solution for healtcare partner",
      url: "/health",
    },
  ];

  const secondaryLinks: ILinkWithOptionalComponent[] = [
    {
      label: " Individuals",
      url: "/individuals",
    },
    {
      label: "Business",
      url: "/business",
    },
    {
      label: "Healthcare Partners",
      url: "/health",
    },
    {
      label: " Providers",
      url: "/providers",
    },
  ];

  return (
    <>
      <TranslationsProvider
        namespaces={["healthcare"]}
        locale={locale}
        resources={resources}
      >
        <TopNavBar />
        {children}
        <BottomNav isTranslateable={true} />
      </TranslationsProvider>
    </>
  );
}
