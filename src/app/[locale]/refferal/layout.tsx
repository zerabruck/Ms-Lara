import type { Metadata } from "next";
import TopNav from "./components/TopNav";
import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../i18n";
export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Referral program",
    "refer a friend",
    "massage rewards",
    "customer referral",
  ],
};

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["dropdownpages"]);

  const primaryLinks: ILinkWithOptionalComponent[] = [
    {
      label: "Workplace Wellness",
      url: "",
    },
    {
      label: "Book a Chair Massage Event",
      url: "/business/bookachair",
    },
    {
      label: "Spa Staffing",
      url: "/business/spastaffing",
    },
    {
      label: "Trust and Safety",
      url: "/business/trustandsafety",
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
      url: "/business",
    },
    {
      label: " Providers",
      url: "/providers",
    },
  ];

  return (
    <>
      <TopNav links={primaryLinks} drawerLinks={secondaryLinks} />
      <TranslationsProvider
        namespaces={["dropdownpages"]}
        locale={locale}
        resources={resources}
      >
        {children}
      </TranslationsProvider>
    </>
  );
}
