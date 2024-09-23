import type { Metadata } from "next";
import BottomNav from "@/components/layout/BottomNav";
import TopNav from "@/components/layout/TopNav";
import { ILinkWithOptionalComponent } from "@/components/layout/CustomLink";
import SecondaryTopNavBar from "@/components/layout/SecondaryTopNavBar";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../i18n";
import TopNavBar from "./components/TopNavBar";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Corporate wellness",
    "office massage",
    "employee wellness",
    " workplace stress relief",
  ],

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
export default async function BusinessLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["business"]);

  return (
    <div className="font-[Helvetica]">
      <TranslationsProvider
        namespaces={["business"]}
        locale={locale}
        resources={resources}
      >
        <TopNavBar />
        {children}
        <BottomNav isTranslateable={true} />
      </TranslationsProvider>
    </div>
  );
}
