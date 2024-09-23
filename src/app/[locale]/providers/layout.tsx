import type { Metadata } from "next";
import BottomNav from "@/components/layout/BottomNav";
import TopNav, { ILink } from "@/components/layout/TopNav";
import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import TopNavBar from "./components/TopNavBar";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Work with Us Massage therapist jobs",
    "join our team",
    "therapist opportunities",
    "provider applications",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      fr: "/fr",
    },
  },
  openGraph: {
    title: "Mrs Lara Massage therapy",
    description:
      "Massage therapy, wellness services, book a massage, therapeutic massages",
    url: "http://65.21.105.199:3000",
    siteName: "Next.js",
    images: [
      {
        url: "http://65.21.105.199:3000/logo.svg",
        width: 800,
        height: 600,
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default async function BusinessLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["providers"]);

  return (
    <>
      <TranslationsProvider
        namespaces={["providers"]}
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
