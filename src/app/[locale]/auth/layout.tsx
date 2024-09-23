import BottomNav from "@/components/layout/BottomNav";
import TopNav, { ILink } from "@/components/layout/TopNav";
import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import TopNavDropDown from "@/components/layout/TopNavDropDown";
import Footer from "@/components/layout/Footer";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import TopNavBar from "./components/TopNavBar";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: ["User login", "account access", "client login", "secure login"],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, ["auth"]);

  return (
    <>
      <TranslationsProvider
        namespaces={["auth"]}
        locale={locale}
        resources={resources}
      >
        <TopNavBar />
        {children}
        <Footer />
      </TranslationsProvider>
    </>
  );
}
