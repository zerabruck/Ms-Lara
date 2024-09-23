import type { Metadata } from "next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../../i18n";

export const metadata = {
  generator: "Mrs Lara Massage therapy",
  applicationName: "Mrs Lara Massage therapy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Massage subscription",
    "membership benefits",
    "recurring massage services",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function MembershipLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, ["dropdownpages"]);

  return (
    <div className="font-[Helvetica]">
      <TranslationsProvider
        namespaces={["dropdownpages"]}
        locale={locale}
        resources={resources}
      >
        {children}
      </TranslationsProvider>
    </div>
  );
}
